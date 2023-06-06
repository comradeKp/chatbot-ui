import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import config from './bot/config';
import MessageParser from './bot/Messageparser'
import ActionProvider from './bot/ActionProvider'
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{maxWidth:"300px"}}>
        <Chatbot 
         config={config}
         messageParser={MessageParser}
         actionProvider={ActionProvider}/>
        </div>
    </div>
  );
}

export default App;