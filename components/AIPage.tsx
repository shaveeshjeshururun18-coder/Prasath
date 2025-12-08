import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Sparkles, User, Cpu, Zap, Command } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll, Typewriter } from './Shared';

const AIPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "SYSTEM ONLINE. I am the AI interface for S. Shaveesh Jeshurun's portfolio. I can analyze his coding skills, projects, and academic background. How may I assist?" }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isThinking]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: text }]);
    setInput("");
    setIsThinking(true);

    // Simulate AI processing
    setTimeout(() => {
        let response = "I process data regarding Shaveesh's skills and projects.";
        const lower = text.toLowerCase();
        
        if (lower.includes('project') || lower.includes('work')) {
            response = "Shaveesh has developed websites like cotministries.unaux.com and good2go.unaux.com. He also creates interactive presentations and posters.";
        } else if (lower.includes('contact') || lower.includes('email')) {
            response = "You can reach Shaveesh at shaveesjeshururu18@gmail.com or call +91 98417 23628.";
        } else if (lower.includes('skill') || lower.includes('code')) {
            response = "Key Competencies: C, C++, HTML, CSS, Video Editing, and Poster Designing.";
        } else if (lower.includes('school') || lower.includes('class')) {
            response = "He is currently studying in Class 8 at Velammal Vidhyashram, Surapet.";
        } else if (lower.includes('hello') || lower.includes('hi')) {
            response = "Greetings. I am ready to process your query regarding this student profile.";
        }

        setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: response }]);
        setIsThinking(false);
    }, 1200);
  };

  return (
    <div className="max-w-5xl mx-auto py-4 md:py-8 min-h-[80vh] flex flex-col">
       <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex p-3 md:p-4 rounded-full bg-slate-900 text-teal-400 mb-3 md:mb-4 shadow-lg ring-1 ring-teal-500/50">
               <Cpu size={32} className="animate-pulse md:w-10 md:h-10" />
            </div>
            <SectionTitle>Interactive AI Terminal</SectionTitle>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base px-4">
                Engage with the portfolio's neural interface to access profile data instantly.
            </p>
       </div>

       <RevealOnScroll className="flex-1">
           <Card className="h-[75vh] md:h-[600px] flex flex-col border-2 border-slate-200 bg-slate-50 relative overflow-hidden shadow-2xl p-0 md:p-0">
                {/* Header */}
                <div className="bg-slate-900 p-3 md:p-4 flex items-center justify-between text-white border-b border-teal-900 shrink-0">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        <span className="ml-2 md:ml-4 font-mono text-xs md:text-sm text-teal-400 flex items-center gap-2">
                            <Command size={12} className="md:w-3.5 md:h-3.5" /> SHAVEESH_OS_V1.0
                        </span>
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-slate-500">STATUS: CONNECTED</div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex gap-3 md:gap-4 max-w-[90%] md:max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-teal-600 text-white'}`}>
                                    {msg.type === 'user' ? <User size={16} className="md:w-5 md:h-5" /> : <Bot size={16} className="md:w-5 md:h-5" />}
                                </div>
                                <div className={`p-3 md:p-4 rounded-2xl shadow-sm text-xs md:text-sm leading-relaxed ${
                                    msg.type === 'user' 
                                        ? 'bg-white text-slate-800 rounded-tr-none' 
                                        : 'bg-slate-800 text-teal-50 rounded-tl-none border border-slate-700'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isThinking && (
                        <div className="flex gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                                <Bot size={16} className="text-white md:w-5 md:h-5" />
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-700">
                                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-75"></span>
                                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 md:p-4 bg-white border-t border-slate-200 shrink-0">
                    <div className="flex gap-2 md:gap-4">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 md:px-6 md:py-4 focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium text-sm md:text-base"
                            placeholder="Enter command..."
                        />
                        <button 
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isThinking}
                            className="bg-slate-900 text-white px-4 md:px-8 rounded-xl font-bold hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-xs md:text-sm"
                        >
                            <span className="hidden md:inline">SEND</span> <Send size={16} className="md:w-4 md:h-4" />
                        </button>
                    </div>
                    <div className="mt-2 md:mt-3 flex gap-2 justify-center overflow-x-auto no-scrollbar pb-1">
                        {['Projects', 'Skills', 'Contact'].map(suggestion => (
                            <button 
                                key={suggestion}
                                onClick={() => handleSend(suggestion)}
                                className="whitespace-nowrap text-[10px] md:text-xs bg-slate-100 hover:bg-teal-50 hover:text-teal-600 px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
           </Card>
       </RevealOnScroll>
    </div>
  );
};

export default AIPage;