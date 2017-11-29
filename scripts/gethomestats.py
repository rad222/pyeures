import json
import requests
from bs4 import BeautifulSoup
from pprint import pprint
from datetime import datetime
import argparse

description = """
Script that gets sidebar statistics from https://ec.europa.eu/eures/public/en/homepage
Results are stored in `homestats.json`
"""

''' parsing the command line '''
parser = argparse.ArgumentParser(description=description)
mydate = datetime.utcnow().strftime(format='%d%m%Y%H%M')

result = {}
result['date'] = mydate

with requests.Session() as session:
    # sending simple HTTP GET request
    response = session.get("https://ec.europa.eu/eures/public/en/homepage")
    soup = BeautifulSoup(response.text, 'html5lib')

    # getting data
    div_job_stat = soup.find("div", class_="job-stat")
    job_stats_lis = div_job_stat.find_all("li")
    for li in job_stats_lis:
        value, *keys = li.text.split(' ')
        key = " ".join(keys)
        result[key] = int(value.replace(',','')) #convert string to int


# saving data to a file
with open('homestats.json', 'w') as f:
    json.dump(result, f, sort_keys = True)