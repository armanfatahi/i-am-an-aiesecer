from ISO3166 import ISO3166,aiesec_list

def get_country_code(country_name):
    for country in ISO3166.iteritems():
        if  country_name.upper() == country[1].upper():
            return country[0]
    return None
def get_name(name):
    name_word_list = name.split(' ')
    new_name = ''
    for name_word in name_word_list:
        new_name += name_word.capitalize() + '-'
    return new_name[:-1]
country_list = []
for item in aiesec_list:
    country_entities = item.split("=")
    country_list.append(country_entities[0])
state_specific = ''
count = 0
for country_name in country_list:
    country_code = get_country_code(country_name)
    
    if country_code:
        count+=1
        temp = ''
        temp += country_code 
        temp += ": {\r\n\t\t name: '" 
        temp += country_name
        temp += """',\r\n\t\tdescription: '<img width="104" src="http://keep-me.appspot.com/flags/"""+get_name(country_name)+"""-Flag-128.png" style="float:left; margin-right: 10px;" />',\r\n\t\t"""
        temp += "color: 'green',\r\n\t\thover_color: 'red',\r\n\t\t"
        temp += """inactive: 'no',\r\n\t\turl: "javascript:entity_browser_entity_part('"""+country_name+ """')"},\r\n\t"""
        state_specific+= temp
    else:
        print "===================================",country_name
print state_specific,count
