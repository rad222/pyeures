from flask import Flask
from flask import jsonify
from flask import request
import pymongo
import urllib.parse

app = Flask(__name__)

username = urllib.parse.quote_plus('user')
password = urllib.parse.quote_plus('password')
client = pymongo.MongoClient('mongodb://%s:%s@127.0.0.1/test' % (username, password))
db = client.test_database
collection = db.test_collection

@app.route("/api/keywords/",  methods = ['GET'])
def get_keywords():
	# Find in DB
	keywords = collection.distinct('search.keyword')

	if keywords:
		result = keywords
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/location/",  methods = ['GET'])
def get_locations():
	keyword = request.args.get('keyword')
	# Find in DB the last entry sorted by date
	cursor = collection.find({'search.keyword': keyword}).sort('search.date',1).limit(1)
	try:
		types = cursor.next()
	except StopIteration:
		types = None

	if types:
		result = {'location': types['location']}
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/type/",  methods = ['GET'])
def get_types():
	keyword = request.args.get('keyword')
	# Find in DB the last entry sorted by date
	cursor = collection.find({'search.keyword': keyword}).sort('search.date',1).limit(1)
	try:
		types = cursor.next()
	except StopIteration:
		types = None

	if types:
		result = types['countract type']
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/duration/",  methods = ['GET'])
def get_durations():
	keyword = request.args.get('keyword')
	# Find in DB the last entry sorted by date
	cursor = collection.find({'search.keyword': keyword}).sort('search.date',1).limit(1)
	try:
		types = cursor.next()
	except StopIteration:
		types = None

	if types:
		result = types['contract duration']
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/education/",  methods = ['GET'])
def get_education_levels():
	keyword = request.args.get('keyword')
	# Find in DB the last entry sorted by date
	cursor = collection.find({'search.keyword': keyword}).sort('search.date', 1).limit(1)
	try:
		types = cursor.next()
	except StopIteration:
		types = None

	if types:
		result = types['education level']
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/experience/",  methods = ['GET'])
def get_experience():
	keyword = request.args.get('keyword')
	# Find in DB the last entry sorted by date
	cursor = collection.find({'search.keyword': keyword}).sort('search.date', 1).limit(1)
	try:
		types = cursor.next()
	except StopIteration:
		types = None

	if types:
		result = types['experience']
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/flag/",  methods = ['GET'])
def get_flags():
	keyword = request.args.get('keyword')
	# Find in DB the last entry sorted by date
	cursor = collection.find({'search.keyword': keyword}).sort('search.date', 1).limit(1)
	try:
		types = cursor.next()
	except StopIteration:
		types = None

	if types:
		result = types['eures flag']
	else:
		result = {'error': 1}

	return jsonify(result)

@app.route("/api/evolution/",  methods = ['GET'])
def get_evolution():
	keyword = request.args.get('keyword')
	# Find in DB
	records = collection.find({'search.keyword': keyword})
	result = []

	if records:
		for record in records:
			new_record = {}
			new_record['date'] = record['search']['date']
			new_record['type'] = record['countract type']
			result.append(new_record)
	else:
		result = {'error': 1}

	return jsonify(result)

if __name__ == "__main__":
    app.run(host='0.0.0.0')