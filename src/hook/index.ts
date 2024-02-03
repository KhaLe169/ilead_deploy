import { ChatWidget } from 'sdk-chat-widget';

const showDlink = () => {
  ChatWidget.show();
};
const loginDlink = (token: string) => {
  console.log('token', token);
  ChatWidget.login(token);
};

const openChatDlink = (groupchat: string, type: string) => {
  ChatWidget.openChat(groupchat, type, (result: any) => {
    console.log(result);
  });
};

export { showDlink, loginDlink, openChatDlink };
