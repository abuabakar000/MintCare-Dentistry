"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Dentistry",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  const services = [
    "General Dentistry",
    "Invisalign® & Braces",
    "Oral Surgery",
    "Teeth Whitening",
    "Cosmetic Veneers",
    "Sedation Dentistry",
    "Emergency Care",
    "Periodontal Therapy",
    "Preventive Care",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-reveal">
          <div className="w-20 h-20 bg-mint/10 rounded-full flex items-center justify-center mx-auto text-mint">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-serif text-foreground italic">Booking Confirmed</h1>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Thank you, <span className="text-foreground font-medium">{formData.name}</span>. Your MINT Care experience is reserved for <span className="text-foreground font-medium">{formData.date}</span> at <span className="text-foreground font-medium">{formData.time}</span>.
            </p>
            <p className="text-xs text-gray-300">
              A confirmation email has been sent to {formData.email}.
            </p>
          </div>
          <div className="pt-6">
            <Link 
              href="/"
              className="inline-block bg-mint text-white px-9 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-mint-dark transition-all duration-300 shadow-card hover:shadow-xl"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-snow/50">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100/50 py-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative h-9 w-36">
            <Image 
              src="/images/logo.png" 
              alt="MINT Care Dentistry" 
              fill
              className="object-contain"
              priority
            />
          </Link>
          <Link href="/" className="text-[10px] uppercase tracking-[0.15em] text-gray-400 hover:text-mint transition-colors duration-300 font-semibold">
            Back to Site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-[1.5rem] shadow-card overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Visual Sidebar */}
          <div className="md:w-1/3 bg-mint p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-5">
              <h2 className="text-3xl font-serif italic leading-tight">Your MINT Care Journey Starts Here</h2>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Experience the pinnacle of boutique dentistry. Every detail of your visit is designed for your comfort and brilliance.
              </p>
            </div>
            <div className="relative z-10 space-y-3.5 pt-10">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-[10px] font-semibold">1</div>
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold">Details</p>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px]">2</div>
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold">In-Studio</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl"></div>
          </div>

          {/* Right: The Form */}
          <div className="md:w-2/3 p-10 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground">Request an Appointment</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">Full Name</label>
                    <input 
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-mint transition-colors duration-300 bg-transparent text-foreground text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-mint transition-colors duration-300 bg-transparent text-foreground text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">Email Address</label>
                  <input 
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-mint transition-colors duration-300 bg-transparent text-foreground text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">Select Service</label>
                  <select 
                    className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-mint transition-colors duration-300 bg-transparent text-foreground appearance-none cursor-pointer text-sm"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">Preferred Date</label>
                    <input 
                      required
                      type="date"
                      className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-mint transition-colors duration-300 bg-transparent text-foreground cursor-pointer text-sm"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">Preferred Time</label>
                    <input 
                      required
                      type="time"
                      className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-mint transition-colors duration-300 bg-transparent text-foreground cursor-pointer text-sm"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-mint text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-mint-dark transition-all duration-300 shadow-card hover:shadow-xl active:scale-[0.98]"
                >
                  Confirm Request
                </button>
                <p className="text-center text-[9px] text-gray-300 uppercase tracking-[0.15em] mt-5 font-semibold">
                  Experience the MINT Care Difference
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
