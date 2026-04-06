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
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm sorry, I'm having a little trouble connecting right now. Please try again or call us directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
          {/* Notification Bubble */}
          <div className="bg-white/95 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-2xl shadow-card animate-bounce relative">
             <p className="text-[9px] font-semibold text-foreground uppercase tracking-[0.15em] whitespace-nowrap">
                Ask me anything
             </p>
             <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-gray-100" />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-gold text-white rounded-2xl shadow-elite flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#D4B982] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      )}

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100%-2rem)] md:w-[370px] h-[520px] max-h-[85vh] bg-white rounded-[1.5rem] shadow-xl border border-gray-100 flex flex-col transition-all duration-500 ease-out overflow-hidden ${
        isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
      }`}>
        {/* Header */}
        <div className="bg-gold p-6 flex items-center justify-between relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#D4B982] opacity-50" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-serif font-bold italic text-lg border border-white/30">
              M
            </div>
            <div>
              <h3 className="text-white font-serif font-bold leading-none text-base italic">MINT Care Assistant</h3>
              <p className="text-white/80 text-[9px] font-sans uppercase tracking-[0.2em] leading-none mt-1.5 font-bold">The Concierge</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center text-white hover:bg-black/20 transition-all relative z-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-snow/50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] p-3.5 rounded-2xl font-sans text-sm leading-relaxed ${
                m.role === "user" 
                  ? "bg-mint text-white rounded-br-md shadow-soft" 
                  : "bg-white text-gray-700 rounded-bl-md border border-gray-100 shadow-soft"
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-400 p-3.5 rounded-2xl rounded-bl-md border border-gray-100 flex gap-1 shadow-soft">
                <div className="w-1.5 h-1.5 bg-mint/40 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-mint/60 rounded-full animate-bounce [animation-delay:75ms]"></div>
                <div className="w-1.5 h-1.5 bg-mint/80 rounded-full animate-bounce [animation-delay:150ms]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3.5 bg-white border-t border-gray-50">
          <form onSubmit={handleSubmit} className="flex gap-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, 800))}
              maxLength={800}
              placeholder="Inquire about MINT Care..."
              className="flex-1 bg-snow border border-gray-100 rounded-2xl px-5 py-3.5 text-xs text-foreground focus:ring-1 focus:ring-gold/30 transition-all outline-none placeholder:text-gray-300 shadow-soft"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-mint text-white rounded-2xl flex items-center justify-center disabled:bg-gray-100 transition-all duration-500 hover:bg-mint-dark active:scale-95 shadow-soft hover:shadow-elite"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          <div className="flex justify-between items-center mt-2.5">
            <p className="text-[8px] uppercase tracking-[0.15em] text-gray-300 font-semibold">End-to-End Encrypted</p>
            {input.length > 600 && (
              <p className={`text-[9px] ${input.length >= 800 ? 'text-red-500' : 'text-gray-300'}`}>
                {input.length}/800
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
