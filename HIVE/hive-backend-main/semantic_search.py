from google_drive import GoogleDriveSearch
from txtai.pipeline import Textractor
from txtai.embeddings import Embeddings

from shutil import rmtree
import json

class SemanticSearch:
    def __init__(self):
        self.embeddings = Embeddings({"path": "sentence-transformers/nli-mpnet-base-v2"})
    
    def build_model(self, files):
        textractor = Textractor(lines=True)
        self.data = []

        for file in files:
            if file['service'] in ('GDrive', 'GDocs', 'GSheets', 'GDrive'):
                try:
                    res = textractor(file['content'])
                except AttributeError:
                    res = ['']
            else:
                res = [file['content']]
            for par in res:
                self.data.append((par, file['name'], file['webViewLink'], file['service'], file['datetime']))
        

        self.embeddings.index((uid, (content[0], content[1]), None) for uid, content in enumerate(self.data))
        self.embeddings.save('index')

        with open('data.json', 'w') as ofile:
            json.dump(self.data,ofile)

    def query_model(self,query, max_results):
        res = []
        if self.embeddings.count() < 1:
            self.embeddings.load('index')
        
        if not hasattr(self, 'data') or len(self.data) < 1:
            with open('data.json', 'r') as ifile:
                self.data = json.load(ifile)
        
        result = self.embeddings.search(query, max_results)
        found_docs = set()
        for item in result:
            info = self.data[item[0]]

            if info[2] in found_docs:
                continue
            else:
                found_docs.add(info[2])

            entry = {
                "title" : info[1],
                "url" : info[2],
                "service" : info[3],
                "createdDate" : info[4],
                "content" : info[0],
            }
            res.append(entry)

        return res