"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your MINT Care assistant. How can I help you get in 'MINT Care condition' today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm sorry, I'm having a little trouble connecting right now. Please try again or call us directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Notification Bubble */}
          <div className="bg-white/95 backdrop-blur-md border border-mint/20 px-4 py-2 rounded-2xl shadow-xl animate-bounce mb-1 group-hover:scale-105 transition-transform">
             <p className="text-[10px] font-bold text-gray-900 uppercase tracking-widest whitespace-nowrap">
                Ask me anything
             </p>
             {/* Tiny Triangle Tail */}
             <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-mint/10" />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-mint text-white rounded-full shadow-2xl flex items-center justify-center animate-mint-pulse transition-all duration-300 group"
          >
            <svg className="w-7 h-7 animate-chat-wiggle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      )}

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100%-2rem)] md:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-[2rem] shadow-3xl border border-gray-100 flex flex-col transition-all duration-500 overflow-hidden ${
        isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
      }`}>
        {/* Header */}
        <div className="bg-mint p-6 flex items-center justify-between shadow-lg relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-serif font-bold italic text-lg border border-white/30">
              M
            </div>
            <div>
              <h3 className="text-white font-serif font-bold leading-tight text-lg">MINT Care Assistant</h3>
              <p className="text-white/80 text-[10px] font-sans uppercase tracking-[0.2em] leading-none mt-1 font-bold">Always Online</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-white hover:bg-black/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30 backdrop-blur-sm">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[88%] p-4 rounded-2xl font-sans text-sm md:text-base leading-relaxed shadow-sm ${
                m.role === "user" 
                  ? "bg-mint text-white rounded-tr-none shadow-mint/10" 
                  : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-400 p-4 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1.5 shadow-sm">
                <div className="w-1.5 h-1.5 bg-mint/40 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-mint/60 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-mint/80 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, 800))}
              maxLength={800}
              placeholder="Type your message..."
              className="flex-1 bg-gray-50 border-gray-200 border rounded-2xl px-5 py-3 text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-mint focus:border-transparent transition-all outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-mint text-white rounded-2xl flex items-center justify-center disabled:bg-gray-200 transition-all hover:bg-mint-dark transform active:scale-95 shadow-lg hover:shadow-mint/20"
            >
              <svg className="w-6 h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          <div className="flex justify-between items-center mt-3">
            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">End-to-End Encrypted</p>
            {input.length > 600 && (
              <p className={`text-[10px] ${input.length >= 800 ? 'text-red-500' : 'text-gray-400'}`}>
                {input.length}/800
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
