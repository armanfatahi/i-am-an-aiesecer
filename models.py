from google.appengine.ext import db
from google.appengine.ext.db import polymodel
from ISO3166 import ISO3166,aiesec_list
import os
from google.appengine.ext.webapp import template


class Identity(polymodel.PolyModel):
    id = db.StringProperty() # Later!
class Team(db.Model):
    name = db.StringProperty()
    mission = db.StringProperty()
    
class Role(db.Model):
    '''
    role = Role()
    role.access_level = 50
    role.name = "PRESIDENT"
    role.put()
    role = Role()
    role.access_level = 40
    role.name = "VICE PRESIDENT"
    role.put()
    role = Role()
    role.access_level = 30
    role.name = "MANAGER"
    role.put()
    role = Role()
    role.access_level = 30
    role.name = "DIRECTOR"
    role.put()
    role = Role()
    role.access_level = 20
    role.name = "TEAM LEADER"
    role.put()
    role = Role()
    role.access_level = 10
    role.name = "TEAM MEMBER"
    role.put() '''
    name = db.StringProperty()
    access_level = db.IntegerProperty()
    @staticmethod
    def get_by_name(name):
        return Role.gql("WHERE name = :role_name",role_name=name.upper()).get()
    def og_url(self):
        return "https://apps.facebook.com/iamanaiesecer/object_graph/role/{0}/".format(self.key())
    def og_image(self):
        return "https://i-am-an-aiesecer.appspot.com/static/object_role.jpg"
    
class Year(db.Model):
    '''
        for year in Year.all():
            year.delete()
        year = Year(key_name="2011/2012")
        year.name = "2011/2012"
        year.is_current  = False
        year.start_year = 2011
        year.put()
        year = Year(key_name="2012/2013")
        year.name = "2012/2013"
        year.is_current  = True
        year.start_year = 2012
        year.put()
        year = Year(key_name="2013/2014")
        year.name = "2013/2014"
        year.is_current  = False
        year.start_year = 2013
        year.put() 
    '''
    name = db.StringProperty()
    start_year = db.IntegerProperty() #2012, 2013, 2014 , ...
    is_current = db.BooleanProperty()
    
class Country(db.Model):
    name = db.StringProperty()
    @staticmethod
    def country_name(country_code):
        return ISO3166[country_code.upper()]
    @staticmethod
    def get_by_name(country_name):
        return Country.gql("WHERE name=:1",country_name).get()
    def get_flag_url(self):
        name_word_list = self.name.split(' ')
        new_name = ''
        for name_word in name_word_list:
            new_name += name_word.capitalize() + '-'
        return """http://keep-me.appspot.com/flags/"""+new_name[:-1]+"""-Flag-128.png"""
    def og_url(self):
        return "https://apps.facebook.com/iamanaiesecer/object_graph/country/{0}/".format(self.key())
    def og_image(self):
        return "https://i-am-an-aiesecer.appspot.com/static/object_country.jpg"
    
class EntityType(db.Model):
    # AI: 10  MC: 20  LC: 30
    name = db.StringProperty()  # AIESEC INTERNATIONAL, LOCAL COMMITTEE, MEMBER COMMITTEE
    level = db.IntegerProperty()
    @staticmethod
    def get_by_name(name):
        '''
        name: LC , MC , AI
        '''
        if name.upper()=="MC":
            name = "MEMBER COMMITTEE"
        elif name.upper()=="AI":
            name = "AIESEC INTERNATIONAL"
        elif name.upper()=="LC":
            name = "LOCAL COMMITTEE"
        return EntityType.gql("WHERE name=:1",name).get()
    def og_url(self):
        return "https://apps.facebook.com/iamanaiesecer/object_graph/entity_type/{0}/".format(self.key())
    def og_image(self):
        return "https://i-am-an-aiesecer.appspot.com/static/object_entity_type.jpg"
class Entity(db.Model):
    country = db.ReferenceProperty(Country,collection_name="country_entity")
    name = db.StringProperty()
    created = db.DateProperty()
    contact_info = db.StringProperty()
    myaiesec_link = db.LinkProperty()
    type = db.ReferenceProperty(EntityType, collection_name = "Entity_Entity_Type")
    @staticmethod
    def store_entities():
        '''        
        for et in EntityType.all():
            et.delete()
        for country in Country.all():
            country.delete()
        for entity in Entity.all():
            entity.delete()
        '''     
        # create global and AI
        ai = EntityType(key_name="AI")
        ai.name = "AIESEC INTERNATIONAL"
        ai.level = 10
        ai.put()
        mc = EntityType(key_name="MC")
        mc.name = "MEMBER COMMITTEE"
        mc.level = 20
        mc.put()
        lc = EntityType(key_name="LC")
        lc.name = "LOCAL COMMITTEE"
        lc.level = 30
        lc.put()
        
        country = Country(key_name = 'GLOBAL')
        country.name = 'GLOBAL'
        country.put()
        entity = Entity(parent = country, key_name = "AIESEC INTERNATIONAL")
        entity.country = country
        entity.name = "AIESEC INTERNATIONAL"
        entity.type = ai
        entity.put()
        for item in aiesec_list:
            country_entities = item.split("=")
            country = Country( key_name = country_entities[0],name= country_entities[0])
            country.put()
            if len(country_entities)>1:
                entity = Entity(parent = country,key_name = mc.name+" " + country.name)
                entity.country = country
                entity.type = mc
                entity.name = country.name
                entity.put()
                entity_list = country_entities[1].split(";")
                for item in entity_list:
                    entity = Entity(country,item)
                    entity.name = item
                    entity.type = lc
                    entity.country = country
                    entity.put()

    def get_active_committee(self):
        return Committee.gql("WHERE parent = :entity_key",entity_key = self.key()).get()
    def og_url(self):
        return "https://apps.facebook.com/iamanaiesecer/object_graph/entity/{0}/".format(self.key())
    def og_image(self):
        return "https://i-am-an-aiesecer.appspot.com/static/object_entity.jpg"

class Project(db.Model):
    start_date = db.DateProperty(auto_now_add=True)
    description = db.StringProperty()
    entiti = db.ReferenceProperty(Entity,collection_name="project_reference_entity")

        
class Committee(db.Model):
    start_date = db.DateProperty(auto_now_add=True)
    year = db.ReferenceProperty(Year,collection_name="committee_reference_year")
    entiti = db.ReferenceProperty(Entity,collection_name="committee_reference_entity")
    def is_member(self,member):
        result = Experience.gql("Where member = :member_key and committee = :committee_key",member_key = member.key(),committee_key = self.key()).get()
        if result:
            return True
        else:
            return False
    def get_members(self):
        result = Experience.gql("Where committee = :committee_key",committee_key = self.key())
        member_list = []
        if result:
            for mem in result:
                member_list.append(mem)
        return member_list
    def is_current(self):
        return self.year.is_current
    @staticmethod
    def create_key(entity,year):
        return "{0} {1}".format(entity.name,year.name)
    def name(self):
        return "{0} {1}".format(self.entiti.name,self.year.name)
    def successor(self): # next committee
        year = Year.gql("WHERE start_year=:1",self.year.start_year + 1).get()
        if year:
            return Committee.gql("WHERE year=:1 AND entiti=:2",year.key(),self.entiti.key()).get()
        else:
            return None
    def children(self):
        if self.entiti.type.name == "MEMBER COMMITTEE":
            country = self.entiti.country
            entity_list = Entity.gql("WHERE country=:1",country.key())
            committee_list = []
            for entity in entity_list:
                committee = Committee.gql("WHERE entiti=:1 AND year=:2",entity.key(),self.year.key()).get()
                if committee:
                    committee_list.append(committee)
            return committee_list
        else:
            return None
    def president(self):
        president_role = Role.get_by_name("PRESIDENT")
        experience = Experience.gql("WHERE role = :1 AND committee = :2 AND approved = True",president_role.key(),self.key()).get()
        if experience:
            return experience.member
        else:
            return None
    def og_url(self):
        return "https://apps.facebook.com/iamanaiesecer/object/committee/{0}/".format(self.key())
    def html(self):      
        path = os.path.join(os.path.dirname(__file__),r'html/committee.html')
        return template.render(path,{"committee":self})
    
class User (polymodel.PolyModel):
    id = db.StringProperty() #facebook user-id
    username = db.StringProperty()
    first_name = db.StringProperty()
    last_name = db.StringProperty()
    name = db.StringProperty()
    email = db.EmailProperty()
    country = db.StringProperty()
    def picture(self,scale=50):
        return "http://graph.facebook.com/{0}/picture?width={0}&height={0}".format(self.id,scale)
    def link(self):
        return "https://www.facebook.com/profile.php?id={0}".format(self.id)     
    def html(self):  
        
        return "I am a Member"
            
        path = os.path.join(os.path.dirname(__file__),r'html/member.html')
        return template.render(path,{"member":self})
    
class Member(User):
    phone_number = db.StringProperty()  #phone number
    skype = db.StringProperty()
    identity_name = db.StringProperty()
    aiesec_email = db.EmailProperty()  #verified aiesec email
    temp_email_code = db.StringProperty()
    home_committee = db.ReferenceProperty(Committee,collection_name='committee_reference_member')     
    @staticmethod
    def GetMember(prop,value):
        member = Member.gql("WHERE :prop = :val",prop= prop,val = value)
        return member.get()
    def og_url(self):
        return "https://apps.facebook.com/iamanaiesecer/object_graph/member/{0}/".format(self.key())
    def og_image(self):
        return "https://i-am-an-aiesecer.appspot.com/static/object_member.jpg"
    def experience(self):
        experience_list = []
        experience_result = Experience.gql("WHERE member = :1 AND approved = True",self.key())
        for xp in experience_result:
            experience_list.append(xp)
        return experience_list
    def open_graph_object(self):
        path = os.path.join(os.path.dirname(__file__),'object_member.html')
        return template.render(path,{"member":self})
class Experience(db.Model):
    member = db.ReferenceProperty(Member, collection_name="Member_CommitteeMember")
    committee = db.ReferenceProperty(Committee, collection_name="Committee_CommitteeMember")
    role = db.ReferenceProperty(Role, collection_name="CommitteeRole_CommitteeMember")
    department = db.StringProperty()
    date_start = db.DateProperty(auto_now_add=True)
    date_end = db.DateProperty()
    finished = db.BooleanProperty()
    approved = db.BooleanProperty()
    @staticmethod
    def get_experience(member,committee):
        return Experience.gql('WHERE member = :member_key AND committee = :committee_key',member_key=member.key(),committee_key=committee.key()).get()
    def pending_list(self):
        pending_list = []
        role_list = []
        # Requests from own Entity
        if self.role.name == "PRESIDENT":
            role_list = [Role.get_by_name("VICE PRESIDENT"),Role.get_by_name("DIRECTOR"),Role.get_by_name("MANAGER")]
        elif self.role.name == "VICE PRESIDENT":
            role_list = [Role.get_by_name("DIRECTOR"),Role.get_by_name("MANAGER"),Role.get_by_name("TEAM LEADER"),Role.get_by_name("TEAM MEMBER")]
        for role in role_list:
            pending_experience = Experience.gql('WHERE committee=:1 AND role=:2 AND approved=False',
                                                self.committee.key(),role.key())
            if pending_experience:
                for request in pending_experience:
                    pending_list.append(request)
        # From next Year!
        successor = self.committee.successor()
        
        if successor:
            if self.role.name == "PRESIDENT":
                role_list = [Role.get_by_name("PRESIDENT"),Role.get_by_name("VICE PRESIDENT")]
            for role in role_list:
                pending_experience = Experience.gql('WHERE committee=:1 AND role=:2 AND approved=False',
                                                    successor.key(),role.key())
                if pending_experience:
                    for request in pending_experience:
                        pending_list.append(request)
        # From Committees Children!
        child_committee_list = self.committee.children()
        if child_committee_list:
            for child_committee in child_committee_list:
                if self.role.name == "PRESIDENT":
                    role_list = [Role.get_by_name("PRESIDENT"),Role.get_by_name("VICE PRESIDENT")]
                elif self.role.name == "VICE PRESIDENT":
                    role_list = [Role.get_by_name("PRESIDENT"),Role.get_by_name("VICE PRESIDENT")]
                for role in role_list:
                    pending_experience = Experience.gql('WHERE committee=:1 AND role=:2 AND approved=False',
                                                        child_committee.key(),role.key())
                    if pending_experience:
                        for request in pending_experience:
                            pending_list.append(request)
        return pending_list
    def url(self):
        return "https://apps.facebook.com/iamanaiesecer/object/experience/{0}/".format(self.key())
         
class Internship(db.Model):
    member = db.ReferenceProperty(Member, collection_name="Member_Internship")
    ep_id = db.StringProperty()
    project = db.ReferenceProperty(Project, collection_name="Project_Internship")
    date_start = db.DateProperty(auto_now_add=True)
    date_end = db.DateProperty()
    approved = db.BooleanProperty()