import React, { useState, useRef, useEffect } from 'react';
import './FloatingChatbot.css';
import { MessageSquare, X, Send, User, Bot, MinusSquare } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Sakthivel's assistant. Ask me about his skills, projects, or how to contact him.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      
      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { text: data.response, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting right now.", isBot: true }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { text: "Sorry, I cannot reach the server. Is the backend running?", isBot: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <button 
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleChat}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </button>

      <div className={`chatbot-window glass ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <span className="online-indicator"></span>
            Portfolio Assistant
          </div>
          <div className="chat-controls">
            <button onClick={toggleChat} aria-label="Close Chat">
              <MinusSquare size={18} />
            </button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-wrapper ${msg.isBot ? 'bot' : 'user'}`}>
              <div className="message-avatar">
                {msg.isBot ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className="message-bubble">
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message-wrapper bot">
              <div className="message-avatar"><Bot size={16} /></div>
              <div className="message-bubble typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            aria-label="Chat input"
          />
          <button type="submit" disabled={!input.trim()} aria-label="Send message">
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FloatingChatbot;
