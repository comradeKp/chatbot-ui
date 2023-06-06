// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../components/DogPicture';
import AppList from '../components/AppList';

const botName = 'Provider Analytics bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`), createChatBotMessage(
    "Select an App :",
    {
      widget: 'appList',
    }
  )],
  botName: botName,
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'appList',
      widgetFunc: (props) => <AppList {...props} />,
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
    
  },
};

export default config;