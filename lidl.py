#!/usr/bin/env python
import requests
import csv
import sys

# Bing Spatial API :-)
baseurl = 'https://spatial.virtualearth.net/REST/v1/data/d9ba533940714d34ac6c3714ec2704cc/Filialdaten-AT/Filialdaten-AT?$format=json&key=Ailqih9-jVv2lUGvfCkWmEFxPjFBNcEdqZ3lK_6jMMDDtfTYu60SwIaxs32Wtik2&'
# CountryRegion is always 'AT', AR, NF, Addresstyp are unknown.
fields = 'EntityID,Latitude,Longitude,AddressLine,PostalCode,Locality,OpeningTimes'


def fetch(skip):
    url = baseurl + '$filter=Adresstyp%20Eq%201&$select=' + fields + '&$top=250&$skip=' + str(skip)
    r = requests.get(url, headers={'Accept': 'application/json'})
    return r.json()['d']['results']


def fetch_and_write(f):
    writer = csv.writer(f, delimiter='|', quoting=csv.QUOTE_MINIMAL) 
    data = []
    while True:
        res = fetch(len(data))
        data.extend(res)
        if not res:
            break
        for entry in res:
            # STORETYPE|STOREID|LAT|LON|REGION|ZIP|CITY|ADDRESS|PHONE|TIMES
            r = ['Lidl', entry['EntityID'], entry['Latitude'], entry['Longitude'],
                 '', entry['PostalCode'], entry['Locality'], entry['AddressLine'],
                 '', entry['OpeningTimes'].replace('[br]', '; ').replace('<br>', '; ')]
            r = [f.encode('utf-8') if isinstance(f, unicode) else f for f in r]
            writer.writerow(r)


if __name__ == '__main__':
    fetch_and_write(sys.stdout)
