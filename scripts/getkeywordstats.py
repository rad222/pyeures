import argparse
from pprint import pprint
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import codecs
import pymongo
import urllib.parse

description = """
PyEures version 1.0. Script that gets sidebar statistics from https://ec.europa.eu by searching for keywords.
The script expects at least one keyword. Results are stored in `keyword_stats.json`
"""

''' parsing the command line '''
parser = argparse.ArgumentParser(description=description)
parser.add_argument('keywords', type=str, nargs='+', help='keyword that is being searched', metavar='keyword')
args = parser.parse_args()

# keywords to be searched
keyword = " ".join(args.keywords)
mydate = datetime.utcnow().strftime(format='%d%m%Y')

''' utility functions '''

def get_country_data(data):
    country_result = {}

    for country in data["facetResults"]["locationFacetResults"]["facetEntriesList"]:
        country_count = country["count"]
        country_code = country["code"]
        #country_label = country["valueWithCode"]["value"]["label"]

        country_result[country_code] = {
            "code ": country_code,
            "count": country_count
        }

    return country_result

def get_valueWithCode_count_data(pairs, key_transform_fun = lambda x: x):
    """
        function that extracts data from 'pairs' into a dictionary

        @param pairs: list of dictionaries that contain values for keys 'valueWithCode' and 'count'
        @param key_transform_fun: function that transforms key u more readable format

        @return dictionary where 'valueWithCode' becomes key and 'count' becomes value
    """
    pairs_result = {}
    for pair in pairs:
        key = key_transform_fun(pair["code"])
        value = pair["count"]

        pairs_result[key] = value

    return pairs_result

def get_contract_duration_data(data):
    def transformer(key):
        """
            every occurrence of '_' is replaced with ' ' and the whole string is capitalized
        """
        return key.replace("_", " ").capitalize()

    pairs = data['facetResults']["contractDurationFacetResults"]["facetEntriesList"]
    return get_valueWithCode_count_data(pairs, transformer)

def get_contract_type_data(data):
    def transformer(key):
        """
            every occurrence of '_' is replaced with '-' and the every word is capitalized
        """
        return key.replace("_", "-").title()

    pairs = data['facetResults']["contractTypeFacetResults"]["facetEntriesList"]
    return get_valueWithCode_count_data(pairs, transformer)

def get_education_level_data(data):
    transformer = {
        "HT": "Higher Training, Including Academic",
        "HTT": "Higher Technical Training",
        "VT": "Vocational Training / Apprenticeships",
        "CE": "Compulsory Education / Professional Initiation",
        "ATT": "Advanced Technical Training",
        "NOT_SPECIFIED": "Not Specified"
    }

    pairs = data['facetResults']["educationLevelFacetResults"]["facetEntriesList"]
    return get_valueWithCode_count_data(pairs, lambda x: transformer.get(x, x))

def get_eures_flag_data(data):
    transformer = {
        "TRUE": "With EURES flag",
        "FALSE": "Without EURES flag"
    }
    pairs = data['facetResults']["euresFlagFacetResults"]["facetEntriesList"]
    return get_valueWithCode_count_data(pairs, lambda x: transformer.get(x, x))

def get_experience_data(data):
    transformer = {
        "A": "Not required",
        "B": "Up to 1 year",
        "C": "Up to 2 years",
        "D": "Between 2 and 5 years",
        "E": "More than 5 years",
        "NS": "Not specified"
    }
    pairs = data['facetResults']["experienceFacetResults"]["facetEntriesList"]
    return get_valueWithCode_count_data(pairs, lambda x: transformer.get(x, x))


headers = {
    "Content-Type":"application/json"
}

result = {}

with requests.Session() as session:
    session.headers.update(headers)

    # send HTTP POST request with payload
    payload = '{"keywords":[{"keyword":"'+keyword+'","specificSearchCode":"EVERYWHERE"}],"selectedNuts":[],"notSpecifiedInCountry":[],"selectedOccupations":[],"contractTypeCodes":[],"contractDurationCodes":[],"experienceCodes":[],"educationLevelCodes":[],"euresFlagCodes":[],"solidarityContextCodes":[],"accommodation":[],"travel":[],"relocation":[],"meals":[],"languageSkills":[],"includeJvsWithoutReqLanguages":false,"page":1}'
    url = "https://ec.europa.eu/eures/eures-searchengine/page/jvSearch/fullSearch?lang=en&app=1.8.1p6-build-0-SNAPSHOT"
    response = session.post(url, data=payload)

    #
    result["search"] = {"date": mydate, "keyword": keyword}

    # convert the response into dictionary and filter results
    data = json.loads(response.text)
    result["location"] = get_country_data(data)
    result["contract duration"] = get_contract_duration_data(data)
    result["countract type"] = get_contract_type_data(data)
    result["education level"] = get_education_level_data(data)
    result["eures flag"] = get_eures_flag_data(data)
    result["experience"] = get_experience_data(data)

# save results in a file
with codecs.open("keyword_stats.json", "w", "utf-8-sig") as f:
    json.dump(result, f, ensure_ascii=False, sort_keys = True)


#save results in db
username = urllib.parse.quote_plus('user')
password = urllib.parse.quote_plus('password')
client = pymongo.MongoClient('mongodb://%s:%s@127.0.0.1/test' % (username, password))
db = client.test_database
collection = db.test_collection
collection.insert_one(result)

