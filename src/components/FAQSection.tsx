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
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4 animate-reveal">
           <p className="text-xs font-bold text-mint uppercase tracking-[0.4em]">Clarity</p>
           <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Frequently <span className="text-mint font-light italic">Asked</span>.
           </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 animate-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group transition-all"
              >
                <span className="text-xl md:text-2xl font-serif text-gray-900 group-hover:text-mint transition-colors italic">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all ${openIndex === index ? 'bg-mint border-mint text-white rotate-180' : 'text-gray-400 group-hover:border-mint group-hover:text-mint'}`}>
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg text-gray-500 font-sans font-light leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-20 p-10 bg-snow rounded-3xl border border-gray-50 text-center space-y-4 animate-reveal">
           <p className="text-sm font-sans text-gray-500 italic">Have a more specific question?</p>
           <div className="flex justify-center gap-8 text-xs font-bold text-gray-900 uppercase tracking-widest">
              <span className="hover:text-mint pointer-events-none opacity-50">Live Chat Available</span>
              <span className="w-1.5 h-1.5 bg-mint rounded-full mt-1.5" />
              <span className="hover:text-mint cursor-pointer transition-colors">888-612-MINT</span>
           </div>
        </div>

      </div>
    </section>
  );
}
