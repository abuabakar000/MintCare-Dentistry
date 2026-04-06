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
    <section className="w-full bg-background py-20 relative overflow-hidden">
      {/* Premium Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          
          {/* Left: Brand Intent */}
          <div className="flex flex-col gap-3 w-full xl:w-[400px]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4 mb-1">
                <div className="w-12 h-[1px] bg-gold" />
                <p className="text-[10px] font-semibold text-gold uppercase tracking-[0.45em] font-sans">The Concierge</p>
              </div>
               <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight">
                 REQUEST ASIA <br /> <span className="text-gold font-light italic">Consultation</span>.
               </h2>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] font-sans">Expect a response within 15 minutes.</p>
            </div>
          </div>

          {/* Right: Compact Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 gap-5 items-end font-sans">
             
              <div className="md:col-span-4 space-y-2">
                 <label className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] px-1">First Name</label>
                 <input 
                   type="text" 
                   placeholder="Enter First Name*" 
                   required
                   className="w-full bg-snow border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-1 focus:ring-mint/50 focus:border-mint/30 transition-all outline-none placeholder:text-gray-300 font-sans shadow-soft"
                   onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                 />
              </div>

              <div className="md:col-span-4 space-y-2">
                 <label className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] px-1">Last Name</label>
                 <input 
                   type="text" 
                   placeholder="Enter Last Name*" 
                   required
                   className="w-full bg-snow border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-1 focus:ring-mint/50 focus:border-mint/30 transition-all outline-none placeholder:text-gray-300 font-sans shadow-soft"
                   onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                 />
              </div>

              <div className="md:col-span-4 space-y-2">
                 <label className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] px-1">Phone Number</label>
                 <input 
                   type="tel" 
                   placeholder="Enter Phone Number*" 
                   required
                   className="w-full bg-snow border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-1 focus:ring-mint/50 focus:border-mint/30 transition-all outline-none placeholder:text-gray-300 font-sans shadow-soft"
                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
                 />
              </div>

              {/* Row 2: Email + Button */}
              <div className="md:col-span-8 space-y-2">
                 <label className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] px-1">Email Address</label>
                 <input 
                   type="email" 
                   placeholder="Enter Email Address*" 
                   required
                   className="w-full bg-snow border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-1 focus:ring-mint/50 focus:border-mint/30 transition-all outline-none placeholder:text-gray-300 font-sans shadow-soft"
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                 />
              </div>

              <div className="md:col-span-4">
                 <button 
                   type="submit"
                   className="w-full bg-mint text-white py-4.5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-card hover:shadow-elite hover:bg-mint-dark transition-all duration-500 flex items-center justify-center gap-3 group active:scale-[0.98]"
                 >
                   Confirm Request
                   <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </button>
              </div>

          </form>

        </div>
      </div>
    </section>
  );
}
