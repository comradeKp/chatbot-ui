import { createChatBotMessage } from 'react-chatbot-kit';
import AppList from '../components/AppList';
import ActnList from '../components/ActionList';
import RequestWidget from '../components/RequestWidget';

const botName = 'EMAPbot';

const config = {
  initialMessages: [createChatBotMessage(`Hello! I'm ${botName}!. Enter your query in format-"app-env-actn" (eg: EMAP-SIT-DB).
   Available Apps :`,
    {
      widget: 'appList',
    }
  ), createChatBotMessage(
    "Available Actions :",
    {
      widget: 'actnList',
    }
  )],
  botName: botName,
  widgets: [
    {
      widgetName: 'appList',
      widgetFunc: (props) => <AppList {...props} />,
    },
    {
      widgetName: 'actnList',
      widgetFunc: (props) => <ActnList {...props} />,
    },
    {
      widgetName: 'requestWidget',
      widgetFunc: (props) => <RequestWidget {...props} />,
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