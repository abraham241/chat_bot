import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'

function App() {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:flex-row  bg-slate-800'>
        <div className='flex flex-col text-white  md:w-1/2  bg-slate-700 p-10'>
          <h1 className='text-5xl font-bold text-white py-5'>
            Bienvenue sur le Chatbot teste fait par le hub_241
          </h1>
          <p>
            Suivez les instructions ci-dessous pour tester le chatbot
          </p>
          <ul>
            <li>1. Dites 'Bonjour'</li>
            <li>2. Ecrivez quelque chose avec le mot  'chien'</li>
          </ul>
        </div>
        <div className='flex justify-end md:w-1/2 p-10'>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
      
    </>
  );
}

export default App;
