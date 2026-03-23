"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes MINT dentistry different?",
    answer: "MINT dentistry combines world-class clinical expertise with a luxurious, patient-focused experience. From our boutique-style offices and massage chairs to our cutting-edge technology and hand-picked clinical teams, we've reimagined dental care as a premium service you'll actually look forward to.",
  },
  {
    question: "Do you accept my dental insurance?",
    answer: "We accept most major PPO dental insurance plans. Our dedicated insurance coordinators work directly with your provider to maximize your benefits and ensure a transparent, stress-free billing process. We also offer flexible financing options for those without insurance.",
  },
  {
    question: "How long do MINT whitening treatments last?",
    answer: "Our professional MINT whitening treatments are designed for lasting impact. Depending on your lifestyle and habits, results can stay vibrant for 6 to 12 months. We also offer take-home maintenance kits to help you keep your 'MINT condition' smile bright.",
  },
  {
    question: "Is Invisalign® right for me?",
    answer: "Invisalign is an excellent solution for most orthodontic cases, including crowding, spacing, and bite issues. During your initial consultation, our specialists will use 3D imaging to determine if clear aligners are the best path to your goal smile.",
  },
  {
    question: "Can I book a same-date appointment?",
    answer: "We understand that dental needs can be urgent. While we recommend booking ahead to secure your preferred time, we always strive to accommodate same-day appointments for emergencies or sudden clinical needs. Use our booking bar or call us directly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Frequently Asked <span className="text-mint italic">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-xl font-sans transition-colors duration-300 ${
                  openIndex === index ? "text-mint font-medium" : "text-gray-900 group-hover:text-mint"
                }`}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <svg className="w-6 h-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 font-sans leading-relaxed text-lg max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 font-sans mb-8">
            Still have questions? Our team is here to help.
          </p>
          <button className="border-2 border-mint text-mint px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-mint hover:text-white transition-all duration-300">
            Contact Us Directly
          </button>
        </div>
      </div>
    </section>
  );
}
