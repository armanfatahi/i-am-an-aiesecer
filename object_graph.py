FACEBOOK_APP_ID = "427564593967909"
FACEBOOK_APP_SECRET = "5023c09104d19782df9b3eda9d7383c8"


import os
from google.appengine.ext.webapp import template
from google.appengine.ext import db
from models import Member,Country,Entity,EntityType,Committee,Role
import webapp2

class BaseHandler(webapp2.RequestHandler):
    def show_page(self,page,param=None):
        if param:
            path = os.path.join(os.path.dirname(__file__),r'object_open_graph/' + page + '.html')
            self.response.out.write(template.render(path,param))
        else:
            self.response.out.write("Something doesn't seem right!")
    def get(self,object_name,key):
        self.both(object_name,key)
    def post(self,object_name,key):
        self.both(object_name,key)
    def both(self,object_name,key):
        objecy_instance = db.get(key)
        self.show_page(object_name,{object_name:objecy_instance})

class MemberHandler(BaseHandler):
    def both(self,key):
        member = db.get(key)
        self.response.out.write(member.open_graph_object())
        
config = {}
config['webapp2_extras.sessions'] = {'secret_key': 'dellnya',}
app = webapp2.WSGIApplication([
    ('/object_graph/(.*)/(.*)/',BaseHandler)
] ,config=config ,debug=True)

def main():
    app.run()

if __name__ == "__main__":
    main()
