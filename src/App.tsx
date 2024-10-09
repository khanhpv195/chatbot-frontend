import React from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Chatbot</h1>
      <ChatWindow />
    </div>
  );
};

export default App;
