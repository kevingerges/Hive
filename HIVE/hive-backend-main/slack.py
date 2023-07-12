import logging
import os
import re

from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError


class Slack:
    def __init__(self):
        self.client = WebClient(token=os.environ.get("SLACK_USER_TOKEN"))
        self.logger = logging.getLogger(__name__)

    def get_messages(self):
        channels = []
        try:
            for channel in self.client.conversations_list(types='public_channel,private_channel').get('channels'):
                # channels[channel['id']] = channel['name']
                channels.append((channel['id'], channel['name']))

        except SlackApiError as e:
            print(f"Error: {e}")


        content = []
        for channel in channels:
            try:
                messages = self.client.conversations_history(channel=channel[0]).get('messages')
            except SlackApiError as e:
                self.logger.error("Error creating conversation: {}".format(e))

            for message in messages:
                if not message.get('subtype'):
                    entry = {'service' : 'slack', 'name' : f'#{channel[1]}'}
                    entry['content'] = re.sub(r'(\<).*?(\>)',"", message.get('text'))
                    entry['datetime'] = float(message.get('ts'))
                    try:
                        res = self.client.chat_getPermalink(channel=channel[0], message_ts=message.get('ts'))
                        entry['webViewLink'] = res['permalink']
                    except SlackApiError as e: 
                        self.logger.error("Error getting permalink: {}".format(e))
                    content.append(entry)

                    if message.get('thread_ts'):
                        for thread_message in self.client.conversations_replies(channel=channel[0], ts=message.get('ts')).get('messages')[1:]:
                            entry = {'service' : 'slack', 'name' : f'#{channel[1]}'}
                            entry['content'] = re.sub(r'(\<).*?(\>)',"", thread_message.get('text'))
                            entry['datetime'] = float(thread_message.get('ts'))
                            try:
                                res = self.client.chat_getPermalink(channel=channel[0], message_ts=thread_message.get('ts'))
                                entry['webViewLink'] = res['permalink']
                            except SlackApiError as e: 
                                self.logger.error("Error getting permalink: {}".format(e))
                            content.append(entry)

        return content

