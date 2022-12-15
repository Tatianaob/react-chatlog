import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry  from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatMessages1 = [{
    sender:'Vladimir',
    body:'why are you arguing with me',
    timeStamp:'2018-05-29T22:49:06+00:00',
  }]

    return (
    <div id="App">
      <header>
        <h1>Chat beetween Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry></ChatEntry>
      <ChatEntry chatData={chatMessages1}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
  
      </main>
    </div>
  );
};

export default App;
