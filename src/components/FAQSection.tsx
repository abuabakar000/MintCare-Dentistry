"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you take my insurance?",
    answer: "We accept most PPO insurance plans. Our concierge team handles all the paperwork, so your experience is entirely stress-free. We'll verify your benefits before your first visit to ensure complete transparency."
  },
  {
    question: "Are you really the 'Most Loved Workplace'?",
    answer: "Yes! MINT Care was recently recognized as the #17 Most Loved Workplace® in the nation by the Wall Street Journal®. We believe that happy, empowered employees provide the highest quality care for our patients."
  },
  {
    question: "What makes MINT Care different from other dentists?",
    answer: "It's the 'MINT Care Standard.' We combine boutique luxury (massage chairs, Netflix, premium amenities) with the top 1% of dental talent and state-of-the-art technology. It's dentistry for people who demand the best."
  },
  {
    question: "Is MINT Care suitable for children?",
    answer: "Absolutely. We pride ourselves on being a family-focused practice. Our gentle approach and calming environment are perfect for introducing young ones to a lifetime of healthy dental habits."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-5 animate-reveal">
           <div className="inline-flex items-center gap-4 justify-center">
             <div className="w-12 h-[1px] bg-gold" />
             <p className="text-[10px] font-bold text-gold uppercase tracking-[0.45em]">Clarity</p>
             <div className="w-12 h-[1px] bg-gold" />
           </div>
           <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
              Frequently <br /> <span className="text-gold font-light italic">Asked</span>.
           </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100/80 animate-reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-7 flex items-center justify-between text-left group transition-all"
              >
                <span className="text-xl md:text-2xl font-serif text-foreground group-hover:text-gold transition-colors duration-500 pr-8 italic">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                  openIndex === index 
                    ? 'bg-mint text-white rotate-180 shadow-soft' 
                    : 'border border-gray-100 text-gray-300 group-hover:border-gold group-hover:text-gold'
                }`}>
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                   </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-700 ease-out ${
                openIndex === index ? 'max-h-[600px] opacity-100 pb-10' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-base text-gray-400 font-sans font-light leading-[1.9] pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-20 p-10 bg-snow rounded-2xl border border-gold/10 text-center space-y-6 animate-reveal">
           <p className="text-sm font-sans text-gray-400 italic">Have a more specific question?</p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">
              <span className="opacity-40">Live Concierge Available</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-gold/30 rounded-full" />
              <a href="tel:8886126468" className="text-foreground hover:text-gold cursor-pointer transition-colors duration-300 px-6 py-2 border border-gray-100 rounded-xl">888-612-MINT</a>
           </div>
        </div>

      </div>
    </section>
  );
}
