from flask import Flask, request, jsonify
from flask_cors import CORS

from google_drive import GoogleDriveSearch
from semantic_search import SemanticSearch
from slack import Slack

app = Flask(__name__)
CORS(app)

gds = GoogleDriveSearch()
ss = SemanticSearch()
slack = Slack()

@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/sync', methods=['POST'])
def sync():
    try:
        files = gds.explore_shared_drive('0AEEjlKudjzHPUk9PVA')
        gds.attach_text(files)
        files.extend(slack.get_messages())

        ss.build_model(files)
    except Exception as e:
        return jsonify({'success':False, 'error' : e}), 500, {'ContentType':'application/json'} 

    return jsonify({'success':True}), 200, {'ContentType':'application/json'} 


@app.route('/query', methods=['GET'])
def query():
    q = request.args.get('terms')
    num_terms = request.args.get('num-terms', default=7)
    if q:
        res = ss.query_model(q, num_terms)
    else:
        res = []
    return jsonify({'results' : res})