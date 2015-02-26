import base64
import hashlib
import hmac
import json

class utility():
    @staticmethod
    def base64_url_decode(inp):
        padding_factor = (4 - len(inp) % 4) % 4
        inp += "="*padding_factor 
        return base64.b64decode(unicode(inp).translate(dict(zip(map(ord, u'-_'), u'+/'))))
    @staticmethod
    def parse_signed_request(signed_request, secret):
     
        l = signed_request.split('.', 2)
        encoded_sig = l[0]
        payload = l[1]
     
        sig = utility.base64_url_decode(encoded_sig)
        data = json.loads(utility.base64_url_decode(payload))
     
        if data.get('algorithm').upper() != 'HMAC-SHA256':
            #log.error('Unknown algorithm')
            return None
        else:
            expected_sig = hmac.new(secret, msg=payload, digestmod=hashlib.sha256).digest()
     
        if sig != expected_sig:
            return None
        else:
            #log.debug('valid signed request received..')
            return data
class Message():
    type = "success"  # or error
    content = None    #any html content
    def __init__(self):
        self.content = None
        self.type = "success"
    def set_type(self,message_type):
        # message_type should be true or false
        if message_type:
            self.type = "success"
        else:
            self.type = "error"
        