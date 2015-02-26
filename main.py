
FACEBOOK_APP_ID = "427564593967909"
FACEBOOK_APP_SECRET = "5023c09104d19782df9b3eda9d7383c8"


import os
from google.appengine.ext.webapp import template
import json
import time
#verify user email
from random import randint

import urllib
import urllib2

from google.appengine.ext import db
from google.appengine.api import users,mail
import webapp2
from webapp2_extras import sessions

#Facebook
import facebook

# files from the project
from models import Member,Country,Entity,Committee,Experience,Role,Year
from utilities import utility,Message

class BaseHandler(webapp2.RequestHandler):
    message = Message()
    def dispatch(self):
        # Get a session store for this request.
        self.session_store = sessions.get_store(request=self.request)

        try:
            # Dispatch the request.
            webapp2.RequestHandler.dispatch(self)
        finally:
            # Save all sessions.
            self.session_store.save_sessions(self.response)

    @webapp2.cached_property
    def session(self):
        # Returns a session using the default cookie key.
        return self.session_store.get_session() 
    def show_error(self,message):
        path = os.path.join(os.path.dirname(__file__),'error.html')
        self.response.out.write(template.render(path,{'error':message}))
    def show_message(self,message):
        path = os.path.join(os.path.dirname(__file__),'message.html')
        self.response.out.write(template.render(path,{'message':message}))
    def render(self,page,param):
        path = os.path.join(os.path.dirname(__file__),page + '.html')
        return template.render(path,param)
    def show_page(self,page,param=None):
        if param:
            path = os.path.join(os.path.dirname(__file__),page + '.html')
            self.response.out.write(template.render(path,param))
        else:
            path = os.path.join(os.path.dirname(__file__),page + '.html')
            self.response.out.write(template.render(path,self.render_parameters()))
    def current_member(self):
        member_id = self.session.get('member_id') 
        member = Member.gql("WHERE id = :member_id",member_id= member_id)
        return member.get()
    def render_parameters(self):
        member = self.current_member()
        render_paramaters={}
        render_paramaters['member'] = member
        if self.message.content:
            render_paramaters['message'] = self.message
        return render_paramaters
    def url_request(self, url, params = {}, method="POST"):
        if method == "GET":
            return urllib2.Request(url, data=urllib.urlencode(params))
        else:
            return urllib2.Request(url + "?" + urllib.urlencode(params))
    def show_entity(self,entity,message=None): # Shows the Committee active profile page.
        render_parameters = self.render_parameters() 
        render_parameters["entity"] = entity
        # Find the active committee profile which is shown by default
        active_committee = Committee.all().get() #entity.get_active_committee()
        
        if active_committee:
            # Extract Roles and send them to the form
            
            render_parameters["committee"] = active_committee
            #check if member is already in this profile
            render_parameters["is_member"] = active_committee.is_member(self.current_member())
            # Send current members list
            render_parameters['committee_member_list'] = active_committee.get_members()
        self.show_page('entity', render_parameters)
class MainHandler(BaseHandler):
    def get(self):
        self.redirect("https://apps.facebook.com/iamanaiesecer")
    def post(self):
        signed_request = utility.parse_signed_request(self.request.get('signed_request'),FACEBOOK_APP_SECRET)  
            
        if signed_request:
            if signed_request.has_key('user_id'):
                # if user is Authorized and has user id, then capture new information
                # and update if they exist if not put them into datastore. 
                self.session['oauth_token'] = signed_request['oauth_token']
                self.session['member_id'] = signed_request['user_id']
                member_id = signed_request['user_id']
                member = Member.gql("WHERE id = :member_id",member_id= member_id).get()
                render_parameters = {}
                # if not member add member.    
                graph = facebook.GraphAPI(signed_request['oauth_token'])
                me = graph.get_object("me")
                member = self.current_member()
                if not member :
                    member = Member(key_name= me['id'])         
                    member.id = me['id']
                    member.username = me['username']
                    member.first_name = me['first_name']
                    member.last_name = me['last_name']
                    member.name = me['name']
                    member.email = db.Email(me['email']) # It might be null if user did not provide an email
                    member.country = Country.country_name(signed_request['user']['country'])
                    member.put()
                if member.aiesec_email: #Already an AIESECer!
                    #Get current member and see if she already has a home_entity
                    render_parameters = {'member':member}
                    if member.home_committee: # Member already has a home_entity
                        param = self.render_parameters()
                        param["body_function"] = "committee_body('{0}');".format(member.home_committee.key())
                        self.show_page("base", param)
                    else: # Member is not in a commmittee
                        param = self.render_parameters()
                        param["body_function"] = "entity_welcome_body();"
                        self.show_page("base", param)
                else: #Member is not verified to be an AIESECer yet
                    # 1 - First method, to see if user email is an aiesec.net email
                    if(member.email.find("@aiesec.net")>-1):
                        render_parameters['aiesec_email_found'] = member.email
                    # 2 - Second method of getting aiesec email, user authorize the app to access
                    # if user is already signed in then get his email
                    if users.get_current_user():
                        current_user = users.get_current_user()
                        url_linktext = ''
                        current_email = str(current_user.email())
                        if current_email.find("@aiesec.net")>-1:
                            #keep the email in a login_aiesec_email and pass to form
                            render_parameters['login_aiesec_email'] = current_email
                        else:
                            #Ask for logout
                            url_linktext = 'Logout from ' + current_email
                        url = users.create_logout_url(self.request.uri)
                        render_parameters['url'] = url
                        render_parameters['url_linktext'] = url_linktext
                    else:
                        url = users.create_login_url(self.request.uri)
                        render_parameters['url'] = url
                        url_linktext = 'Login to aiesec.net account'
                        render_parameters['url_linktext'] = url_linktext
                    # 3 - Third method: Sending verification code
                    if member.temp_email_code:
                        if member.temp_email_code.find("@aiesec.net"):
                            render_parameters['code_sent_email'] = member.temp_email_code.split(';')[0]
                    render_parameters['member'] = member
                    self.show_page(r"register/welcome", render_parameters)
            else:
                #if user is not signed in the application he will be prompted to sign in
                self.show_page(r'register/login', {})
        
class RegisterGoogleLogin(BaseHandler):
    def get(self):
        #Second verification method, Login to aiesec.net account
        render_parameters = {}
        render_parameters['google_login_url'] = users.create_login_url(self.request.uri)
        self.redirect(users.create_login_url(self.request.uri))

    def post(self):
        #Second verification method, Login to aiesec.net account
        render_parameters = {}
        render_parameters['google_login_url'] = users.create_login_url(self.request.uri)
        self.redirect(users.create_login_url(self.request.uri))



class EntityHandler(BaseHandler):
    def post(self):
        if self.request.get('entity_key'):
            member=self.current_member()
            entity = db.get(self.request.get('entity_key'))
            member.home_entity = entity
            member.put()
            self.show_entity(entity)
        else:
            self.show_page("start_over")
class EntityCreateCommittee(BaseHandler):
    def post(self):
        if self.request.get('committee_name'):
            committee_name = self.request.get('committee_name')
            
            entity = db.get(self.request.get('entity_key'))
            
            committee = Committee(parent=entity,key_name= (entity.name + " " + committee_name))
            committee.name = committee_name
            committee.is_current = True
            committee.entiti = entity
            committee.put()
            self.show_entity(entity)
        else:
            self.show_page("start_over")
class CommitteeExperience(BaseHandler):
    def post(self):
        if self.request.get('committee_key'):
            committee = db.get(self.request.get('committee_key'))
            if self.request.get('action') == "join":
                xp = Experience()
                xp.member = self.current_member()
                xp.committee = committee
                xp.put()
            else:
                if self.request.get('action') == "leave":
                    member = self.current_member()
                    xp= Experience.gql("where member = :member_key and committee = :committee_key",
                                                                          member_key = member.key(),committee_key = committee.key()).get()
                    xp.delete()
            #self.show_entity(committee.entity)
        self.show_page("start_over")
class RPCHandler(BaseHandler):
    def member_body(self,*args):
        param = self.render_parameters()
        member_key = args[0]
        member = db.get(member_key)
        param["member"] = member
        #param["experience_part"] = "experience_part('{0}');".format(member_key) 
        return self.render("member_body", param)
    
    def committee_experience_approve(self,*args):
        experience_key = args[0]
        experience = db.get(experience_key)
        member_id = experience.member.id
        if args[1]:
            experience.approved = True
            experience.put()
        else:
            experience.delete()  
        return member_id
    def committee_experience_leave(self,*args):
        committee_key = args[0]
        committee = db.get(committee_key)
        member = self.current_member()
        experience = Experience.get_experience(member, committee)
        if experience:
            experience.delete()
            time.sleep(2)
        return self.committee_experience_part(*args)
    def committee_experience_join(self,*args):
        committee_key = args[0]
        committee = db.get(committee_key)
        role_key = args[1]
        role = db.get(role_key)
        department = args[2]
        member = self.current_member()
        experience = Experience.get_experience(member, committee) or Experience(key_name= "{0} {1}".format(committee.name(),member.id))
        experience.committee = committee.key()
        experience.role = role.key()
        experience.approved = False
        experience.department = department
        experience.member = member.key()
        experience.put()
        time.sleep(2)
        return self.committee_experience_part(*args)
    def committee_experience_part(self,*args):
        committee_key = args[0]
        committee = db.get(committee_key)
        member = self.current_member()
        experience = Experience.get_experience(member, committee)
        param = self.render_parameters()
        param["committee"] = committee
        param["role_list"] = Role.all()
        param["experience"] = experience
        if experience and experience.approved:
            param["pending_list"] = experience.pending_list()
        return self.render("committee_experience_part", param)
        
    def committee_set_home(self,*args):
        committee_key = args[0]
        committee = db.get(committee_key)
        member = self.current_member()
        member.home_committee = committee.key()
        member.put()
        return "Done!" #.format(committee.name())
    def committee_body(self,*args):
        param = self.render_parameters()
        committee_key = args[0]
        committee = db.get(committee_key)
        param["committee"] = committee
        param["experience_function"] = "committee_experience_part('{0}');".format(committee_key) 
        return self.render("committee_body", param)
    def entity_browser_committee_create_part(self,*args):
        entity_key = args[0]
        year_key = args[1]
        entity = db.get(entity_key)
        year = db.get(year_key)
        committee = Committee(parent = entity, key_name = Committee.create_key(entity, year))
        committee.year = year.key()
        committee.entiti = entity.key()
        committee.put()        
        return self.entity_browser_committee_part(*args)
    def entity_browser_committee_part(self,*args):
        entity_key = args[0]
        entity = db.get(entity_key)
        committee_result = Committee.gql("where entiti=:entity_key",entity_key = entity.key())
        param = self.render_parameters()
        committee = None
        committee_list = []
        for cmte in committee_result:
            if cmte.year.is_current:
                committee = cmte
                param["president"] = committee.president()
            else:
                committee_list.append(cmte)
        param["committee_list"] = committee_list
        param["committee"] = committee
        param["entity"] = entity
        year  = Year.all()
        if committee:
            year.filter("__key__ !=", committee.year.key())
        for cmte in committee_list:
            year.filter("__key__ !=", cmte.year.key())
        if year.count > 0:
            year_list = []
            for y in year:
                year_list.append(y)
            param["year_list"] = year_list
        #Temporary
        
        return self.render("entity_browser_committee_part", param)
    def entity_browser_entity_part(self,*args):
        country_name = args[0]
        country = Country.get_by_name(country_name)
        entity_result = Entity.gql("where country=:country_key",country_key = country.key())
        param = self.render_parameters()
        entity_lc = []
        entity_mc = None
        entity_ai = None
        for entity in entity_result:
            if entity.type.name == "MEMBER COMMITTEE":
                entity_mc = entity
            elif entity.type.name == "AIESEC INTERNATIONAL":
                entity_ai = entity
            else:
                entity_lc.append(entity)
        param["entity_lc_list"] = entity_lc
        param["entity_mc"] = entity_mc
        param["entity_ai"] = entity_ai 
        param["flag_url"] = country.get_flag_url()
        return self.render("entity_browser_entity_part", param)
    def entity_welcome_body(self,*args):
        param = self.render_parameters()
        return self.render("entity_welcome_body", param)
    def entity_browser_body(self,*args):
        country_key = args[0]
        entity_list = None
        if country_key:
            entity_list = Entity.gql("where country=:country_key",country_key = country_key)
        else:
            member = self.current_member()
            country = Country.gql("WHERE name = :country_name",country_name= member.country).get()
            entity_list = Entity.gql("where country=:country_key",country_key = country.key())
        
        param = self.render_parameters()
        param["entity_list"] = entity_list
        param["country_list"] = Country.all()
        return self.render("entity_browser_body", param)
    def register_code_verify(self,*args):
        render_parameters = self.render_parameters()
        member = self.current_member()
        code_entered = args[0]
        sent_code = member.temp_email_code.split(';')[1]
        aiesec_email = member.temp_email_code.split(';')[0]
        render_parameters['aiesec_email'] = aiesec_email
        if sent_code == code_entered:
            member.aiesec_email = aiesec_email
            member.save()
            render_parameters['member'] = member
            return self.render('entity_welcome_body',render_parameters)
        else:
            render_parameters['wrong_code'] = code_entered
            return self.render(r'register/code_sent',render_parameters)
    def verified(self, *args):
        #find the user
        member = self.current_member()
        render_parameters = self.render_parameters()
        member.aiesec_email = args[0]
        member.put()       
        render_parameters["member"] = member
        return self.render("entity_welcome_body", render_parameters)
    def show_page(self, *args):
        #find the user
        member = self.current_member()
        render_parameters = self.render_parameters()
        page = args[0]      
        render_parameters["member"] = member
        return self.render(page, render_parameters)
    def register_code_sent(self,*args):
        if args[0]:
            aiesec_email = args[0]
            random_number = randint(10000,99999)
            
            member = self.current_member()
            member.temp_email_code = aiesec_email + ";" + str(random_number)
            message = mail.EmailMessage(sender="I am an AIESECer <IamanAIESECer.Facebook@gmail.com>",
                                        subject="Verification code")
            message.to = "{0} <{1}>".format(member.name, aiesec_email)
            message.body = """
            Dear {0}:
            
            This is the verification code for your account:
            
                           {1}
            
            Please enter this code in the application to verify your account.
            
            I am an AIESECer Team
            """.format(member.first_name,random_number)
            
            message.send()
            member.save()
            return self.render(r'register/code_sent',{'aiesec_email':aiesec_email})
        else:
            return self.render(r'register/code_request',{'message':'Invalid email.'})
    def post(self):
        args = json.loads(self.request.body)
        func, args = args[0], args[1:]
        if func[0] == '_':
            self.error(403) # access denied
            return
        func = getattr(self, func, None)
        
        if not func:
            self.error(404) # file not found
            return 
        result = func(*args)
        self.response.out.write(json.dumps(result))
    def get(self):
        country_name = self.request.get('country_name')
        country = Country.get_by_name(country_name)
        if country:
            self.response.out.write(self.entity_browser_entity_part(country.key()))
        else:
            self.response.out.write(json.dumps("Country not found."))
        

        
config = {}
config['webapp2_extras.sessions'] = {'secret_key': 'dellnya',}
app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/rpc', RPCHandler),
    ('/committee_change_membership_status/', CommitteeExperience),
    ('/entity/', EntityHandler),
    ('/entity_create_committee/', EntityCreateCommittee),
    ('/register_google_login/',RegisterGoogleLogin)
] ,config=config ,debug=True)

def main():
    app.run()

if __name__ == "__main__":
    main()
