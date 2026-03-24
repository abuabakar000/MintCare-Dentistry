"use client";

import { useState } from "react";

export default function BookingBar() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "General Dentistry",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Thank you! Your boutique experience begins now.");
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Container */}
        <div className="relative glass-effect rounded-[3rem] p-12 md:p-20 shadow-elite border border-gray-100/50 overflow-hidden group transition-all hover:border-mint/20">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-mint/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-mint/10 transition-colors" />

          <div className="flex flex-col xl:flex-row items-center gap-16">
            
            {/* Context */}
            <div className="xl:w-1/3 text-center xl:text-left space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
                Your <span className="text-mint font-light italic">Dream Smile</span> <br />
                Starts Here.
              </h2>
              <p className="text-gray-500 font-sans font-light leading-relaxed max-w-sm mx-auto xl:mx-0">
                Book your bespoke appointment in seconds. Our concierge team is ready to curate your MINT Care experience.
              </p>
              <div className="flex items-center justify-center xl:justify-start gap-4 text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                <span className="w-10 h-[1px] bg-gray-200" />
                Instant Confirmation
              </div>
            </div>

            {/* Form */}
            <div className="xl:w-2/3 w-full">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
                
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 ml-1">Guest Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-snow border-none rounded-2xl px-8 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all placeholder:text-gray-300 font-serif italic text-lg shadow-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 ml-1">Contact Method</label>
                  <input
                    type="text"
                    placeholder="Phone or Email"
                    className="w-full bg-snow border-none rounded-2xl px-8 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all placeholder:text-gray-300 font-serif italic text-lg shadow-sm"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Curated Service</label>
                  <div className="relative">
                    <select
                      className="w-full bg-snow border-none rounded-2xl px-8 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all font-serif italic text-lg shadow-sm appearance-none cursor-pointer pr-12"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>General Dentistry</option>
                      <option>Teeth Whitening</option>
                      <option>Veneers</option>
                      <option>Invisalign®</option>
                      <option>Oral Surgery</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 ml-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full bg-snow border-none rounded-2xl px-8 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all font-serif italic text-lg shadow-sm cursor-pointer"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>

                <div className="md:col-span-2 pt-6">
                  <button
                    type="submit"
                    className="w-full group bg-mint text-white py-6 rounded-[2rem] text-sm font-bold uppercase tracking-[0.4em] transition-all shadow-xl hover:bg-mint-dark transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4"
                  >
                    Confirm Boutique Booking
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
