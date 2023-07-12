from google_drive import GoogleDriveSearch
from semantic_search import SemanticSearch

from shutil import rmtree

gds = GoogleDriveSearch()
files = gds.explore_shared_drive('0AEEjlKudjzHPUk9PVA')
gds.attach_text(files)

ss = SemanticSearch()
ss.build_model(files)

while True:
    q = input("Enter Query: ")
    res = ss.query_model(q, 8)
    print(res)
