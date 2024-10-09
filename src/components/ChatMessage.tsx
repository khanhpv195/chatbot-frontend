import React from 'react';
import { ChatMessage as ChatMessageType } from '../types';

const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <p>{message.text}</p>
    </div>
  );
};

export default ChatMessage;
