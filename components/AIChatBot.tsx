
import React, { useState, useRef, useEffect } from 'react';
import { getShoppingAssistance } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Assalamu Alaikum! I am your Al-Noor assistant. How can I help you find the perfect Mushaf today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getShoppingAssistance(userText, history);
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm sorry, something went wrong. Try again!" }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-full max-w-[350px] sm:max-w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-100 animate-slideInUp">
          {/* Header */}
          <div className="p-4 bg-emerald-800 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center border border-emerald-600">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm">Al-Noor Assistant</h4>
                <div className="flex items-center text-[10px] text-emerald-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  Online & Ready to Help
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-emerald-200 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-emerald-700 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-emerald-50'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-emerald-50 shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-emerald-50 flex space-x-2">
            <input
              type="text"
              placeholder="Ask about mushafs, gifts..."
              className="flex-grow bg-gray-100 border-none rounded-full py-2 px-4 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-emerald-700 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-emerald-800 transition-colors disabled:opacity-50"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-emerald-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-700 hover:scale-110 transition-all duration-300 group relative"
      >
        <div className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
        </div>
        <i className={`fas ${isOpen ? 'fa-comment-slash' : 'fa-robot'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default AIChatBot;
