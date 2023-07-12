from __future__ import print_function

import os.path
import io
from datetime import datetime

from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.http import MediaIoBaseDownload




class GoogleDriveSearch:
    def __init__(self) -> None:

        SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly', 'https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive']

        creds = None        
        if os.path.exists('token.json'):
            creds = Credentials.from_authorized_user_file('token.json', SCOPES)
        # If there are no (valid) credentials available, let the user log in.
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    'credentials.json', SCOPES)
                creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open('token.json', 'w') as token:
                token.write(creds.to_json())

        self.credentials = creds
        self.service = build('drive', 'v3', credentials=creds)
        self.file_map = {
            "application/vnd.google-apps.document":("text/plain", ".txt"),
            "application/vnd.google-apps.spreadsheet":("text/csv", ".csv"),
            "application/vnd.google-apps.jam":("application/pdf", ".pdf"),
            "application/vnd.google-apps.script":("application/vnd.google-apps.script+json", ".pdf"),
            "application/vnd.google-apps.presentation":("text/plain", ".txt"),
            "application/vnd.google-apps.form":("application/zip",".pdf"),
            "application/vnd.google-apps.drawing":("application/pdf", ".pdf"),
            "application/vnd.google-apps.site":("text/plain", ".txt")
        }
        self.service_names = {
            "application/vnd.google-apps.document":"GDocs",
            "application/vnd.google-apps.spreadsheet":"GSheets",
            "application/vnd.google-apps.presentation":"GSlides",
        }

    def search_file(self, query_terms: list[str], *args, **kwargs) -> list[str]:

        creds = self.credentials
        # The file token.json stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.

        q_str = ""
        for term in query_terms:
            q_str += f'fullText contains "{term}" and '

        if 'parent' in kwargs:
            q_str += f'"{kwargs.get("parent")}" in parents and '

        q_str += "mimeType != 'application/vnd.google-apps.folder'"

        try:
            files = []
            page_token = None
            while True:
                print(f'q_str is {q_str}')
                response = self.service.files().list(q=q_str,
                                                spaces='drive',
                                                fields='nextPageToken, '
                                                    'files(id, name, mimeType, createdTime) ',
                                                pageToken=page_token).execute()
                files.extend(response.get('files', []))
                page_token = response.get('nextPageToken', None)
                if page_token is None:
                    break

        except HttpError as error:
            print(F'An error occurred: {error}')
            files = None

        return files
    
    def explore_shared_drive(self, drive_ID: str, *args, **kwargs):
        q = 'trashed=false'
        if 'folder_ID' in kwargs:
            q = f' and {kwargs.get("folder_ID")} in parents'
        
        try:
            files = []
            page_token = None
            while True:
                response = self.service.files().list(
                                                q=q,
                                                corpora='drive',
                                                driveId=drive_ID,
                                                includeItemsFromAllDrives=True,
                                                supportsAllDrives=True,
                                                fields='nextPageToken, '
                                                    'files(id, name, mimeType, webViewLink, createdTime) ',
                                                pageToken=page_token).execute()
                page = response.get('files', [])
                files.extend(tuple((file) for file in page if file['mimeType'] != 'application/vnd.google-apps.folder'))
                page_token = response.get('nextPageToken', None)
                if page_token is None:
                    break

        except HttpError as error:
            print(F'An error occurred: {error}')
            files = None

        for file in files:
            file['service'] = self.service_names.get(file['mimeType'], 'GDrive')

            dt = datetime.strptime(file.get('createdTime'), "%Y-%m-%dT%H:%M:%S.%fZ")
            file['datetime'] = int((dt - datetime(1970,1,1)).total_seconds())

        return files
        
    def attach_text(self, files):
        if not os.path.exists('files/'):
            os.makedirs('files/')

        for entry in files:
            try:
                mime_type = entry['mimeType']
                if mime_type.startswith('application/vnd.google-apps.'):
                    request = self.service.files().export_media(fileId=entry['id'], mimeType=self.file_map[mime_type][0])
                    filename = "files/" + entry['id'].replace('/',':') + self.file_map[mime_type][1]
                else:
                    request = request = self.service.files().get_media(fileId=entry['id'])
                    filename = "files/" + entry['id'].replace('/',':')

                file = io.FileIO( filename, mode='wb')
                downloader = MediaIoBaseDownload(file, request)
                done = False
                print(F'Downloading...')
                while done is False:
                    status, done = downloader.next_chunk()

                entry['content'] = filename

            except HttpError as error:
                print(F'An error occurred: {error}')
                entry = None
    



if __name__ == '__main__':
    pass
