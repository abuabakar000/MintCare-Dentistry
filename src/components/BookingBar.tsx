"use client";

import { useState } from "react";

export default function BookingBar() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Request:", formData);
    alert("Our concierge team has been notified. We will call you shortly!");
  };

  return (
    <section className="w-full bg-white py-12 border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          
          {/* Left: Brand Intent */}
          <div className="flex flex-col gap-4 w-full xl:w-[350px]">
            <div className="space-y-1">
               <h2 className="text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tighter italic">
                  LET US <span className="text-mint font-light">CALL YOU</span>
               </h2>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">Complete the form and we'll be in touch</p>
            </div>
          </div>

          {/* Right: Compact Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-end font-sans">
             
             {/* Row 1: 3 Inputs */}
             <div className="md:col-span-4 space-y-2">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter First Name*" 
                  required
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-mint transition-all outline-none placeholder:text-gray-300 font-sans"
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
             </div>

             <div className="md:col-span-4 space-y-2">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Last Name*" 
                  required
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-mint transition-all outline-none placeholder:text-gray-300 font-sans"
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
             </div>

             <div className="md:col-span-4 space-y-2">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter Phone Number*" 
                  required
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-mint transition-all outline-none placeholder:text-gray-300 font-sans"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
             </div>

             {/* Row 2: Email + Button */}
             <div className="md:col-span-8 space-y-2">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter Email Address*" 
                  required
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-4 text-xs focus:ring-1 focus:ring-mint transition-all outline-none placeholder:text-gray-300 font-sans"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
             </div>

             <div className="md:col-span-4">
                <button 
                  type="submit"
                  className="w-full bg-mint text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-mint-dark transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  Book Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
             </div>

          </form>

        </div>
      </div>
    </section>
  );
}
