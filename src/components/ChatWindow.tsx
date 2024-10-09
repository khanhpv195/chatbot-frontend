import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { ChatMessage as ChatMessageType } from '../types';
import { sendMessage } from '../services/api';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  const handleSendMessage = async (text: string) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      text,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const botResponse = await sendMessage(text);
      const botMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
