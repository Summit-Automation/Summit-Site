'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const StyledChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with Summit Automation today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatMessage = (text: string): string => {
    let formatted = text
      // Convert **bold** to <strong>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert line breaks to temporary markers first
      .replace(/\n/g, '|||BREAK|||');

    // Handle bullet points more carefully
    const lines = formatted.split('|||BREAK|||');
    const processedLines = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('- ')) {
        if (!inList) {
          processedLines.push('<ul style="margin: 6px 0 10px 0; padding-left: 18px; list-style-type: disc;">');
          inList = true;
        }
        const listItem = line.substring(2).trim();
        processedLines.push(`<li style="margin: 3px 0; line-height: 1.4;">${listItem}</li>`);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        if (line) {
          processedLines.push(`<p style="margin: 6px 0; line-height: 1.5;">${line}</p>`);
        }
      }
    }

    // Close any open list
    if (inList) {
      processedLines.push('</ul>');
    }

    return processedLines.join('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call your Flowise API - using the original chatflow ID
      const response = await fetch('https://flowise.summitautomation.io/api/v1/prediction/30ce9d6c-9395-4465-aacf-595d5dc24012', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text || data.answer || 'Sorry, I could not process your request.',
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I\'m having trouble connecting right now. Please try again later.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleStarterPrompt = async (prompt: string) => {
    // Immediately add user message and send
    const userMessage: Message = {
      id: Date.now().toString(),
      text: prompt,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('https://flowise.summitautomation.io/api/v1/prediction/30ce9d6c-9395-4465-aacf-595d5dc24012', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text || data.answer || 'Sorry, I could not process your request.',
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I\'m having trouble connecting right now. Please try again later.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Tooltip */}
      {!isOpen && showTooltip && (
        <div 
          className="absolute bottom-16 right-0 mb-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm rounded-xl shadow-2xl whitespace-nowrap animate-bounce"
          style={{ fontSize: '14px', fontWeight: '500' }}
        >
          ✨ Automate your business today!
          <div className="absolute bottom-[-8px] right-5 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-700"></div>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <div className="relative">
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-30"></div>
          
          <button
            onClick={openChat}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group overflow-hidden"
            style={{ 
              width: '60px', 
              height: '60px',
              boxShadow: '0 10px 30px rgba(59, 129, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Open chat"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <MessageCircle className="w-7 h-7 mx-auto group-hover:scale-110 transition-transform duration-200 relative z-10" />
            
            {/* Floating dots */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden backdrop-blur-sm"
          style={{ 
            width: '400px', 
            height: '700px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-5 flex justify-between items-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold" style={{ fontSize: '16px' }}>Summit Assistant</h3>
                <p className="text-blue-100 text-xs">Always here to help ✨</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl p-2 transition-all duration-200 relative z-10"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundColor: '#ffffff' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-lg leading-relaxed`}
                  style={{
                    fontSize: '16px',
                    backgroundColor: message.isUser ? '#3B81F6' : '#f7f8ff',
                    color: message.isUser ? '#ffffff' : '#303235'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: formatMessage(message.text)
                  }}
                />
              </div>
            ))}
            
            {/* Starter Prompts */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <div className="flex justify-start">
                  <button
                    onClick={() => handleStarterPrompt('How can Summit help my business?')}
                    className="bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm border border-blue-200/50"
                    style={{ 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    🚀 How can Summit help my business?
                  </button>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={() => handleStarterPrompt('What features do you offer?')}
                    className="bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-700 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm border border-green-200/50"
                    style={{ 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    ⚡ What features do you offer?
                  </button>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={() => handleStarterPrompt('How do I join the Alpha?')}
                    className="bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 text-purple-700 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm border border-purple-200/50"
                    style={{ 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    🎯 How do I join the Alpha?
                  </button>
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="flex justify-start">
                <div 
                  className="px-4 py-3 rounded-xl flex items-center space-x-2"
                  style={{ 
                    backgroundColor: '#f7f8ff',
                    color: '#303235'
                  }}
                >
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm text-gray-500">Summit is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-gray-50/50">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Summit Automation..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                style={{
                  fontSize: '15px'
                }}
                disabled={isLoading}
                autoFocus
                maxLength={200}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="rounded-xl p-3 transition-all duration-200 hover:scale-105 shadow-sm"
                style={{ 
                  backgroundColor: !inputValue.trim() || isLoading ? '#e5e7eb' : '#3B81F6',
                  color: 'white'
                }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            {inputValue.length > 180 && (
              <p className="text-xs text-red-500 mt-2 px-1">
                You exceeded the characters limit. Please input less than 200 characters.
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50/50 text-center border-t border-gray-100">
            <p style={{ fontSize: '11px', color: '#6b7280' }}>
              Powered by{' '}
              <a 
                href="https://summitautomation.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline font-medium"
                style={{ color: '#3B81F6' }}
              >
                Summit Automation
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyledChatWidget;