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
    alert("Thank you! Your booking request has been sent.");
  };

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Book Your <span className="text-mint italic font-light">MINT Care</span> Experience
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto" />
          <p className="text-sm font-sans tracking-[0.3em] text-gray-500 uppercase">
            Fast, easy, and premium dental care
          </p>
        </div>

        {/* Wide Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 transition-all hover:shadow-mint/5 group">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-end gap-6">
            
            {/* Name Field */}
            <div className="w-full lg:flex-1 space-y-3 text-left">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Full Name</label>
              <input
                type="text"
                placeholder="Dr. Field Harrison"
                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all placeholder:text-gray-500 font-serif italic text-lg shadow-inner"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Contact Field */}
            <div className="w-full lg:flex-1 space-y-3 text-left">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Phone or Email</label>
              <input
                type="text"
                placeholder="888-612-MINT"
                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all placeholder:text-gray-500 font-serif italic text-lg shadow-inner"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>

            {/* Service Field */}
            <div className="w-full lg:flex-1 space-y-3 text-left">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Select Service</label>
              <div className="relative">
                <select
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all font-serif italic text-lg shadow-inner appearance-none cursor-pointer pr-12"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option>General Dentistry</option>
                  <option>Teeth Whitening</option>
                  <option>Veneers</option>
                  <option>Invisalign®</option>
                  <option>Oral Surgery</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date Field */}
            <div className="w-full lg:flex-1 space-y-3 text-left">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 text-gray-900 focus:ring-2 focus:ring-mint transition-all font-serif italic text-lg shadow-inner cursor-pointer"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <div className="w-full lg:w-auto pt-4 lg:pt-0">
              <button
                type="submit"
                className="w-full lg:w-auto bg-mint hover:bg-mint-dark text-white px-12 py-6 rounded-2xl text-xs font-bold uppercase tracking-[0.3em] transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-mint/20"
              >
                Book Now
              </button>
            </div>

          </form>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-gray-50 pt-10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative">
                    <img src={`/images/staff-${i}.png`} alt="Patient" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">
                Join 10,000+ MINT Care Fans
              </p>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-gray-200" />
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold leading-relaxed">
              #17th Most Loved Workplace® <span className="text-gray-300 mx-2">|</span> Wall Street Journal®
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
