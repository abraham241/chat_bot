import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './components/DogPicture/DogPicture.jsx'

const botName = 'Chat Bot_241_Business';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'green',
    },
    chatButton: {
      backgroundColor: 'green',
    },
  },
  state: {
    todos: []
  },
  widget: [
    {

    }
  ],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;