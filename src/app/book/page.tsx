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
    // Simulate API call
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
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-mint/10 rounded-full flex items-center justify-center mx-auto text-mint">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-serif text-gray-900 italic">Booking Confirmed</h1>
            <p className="text-gray-500 font-sans tracking-wide">
              Thank you, <span className="text-gray-900 font-medium">{formData.name}</span>. Your MINT Care experience is reserved for <span className="text-gray-900 font-medium">{formData.date}</span> at <span className="text-gray-900 font-medium">{formData.time}</span>.
            </p>
            <p className="text-sm text-gray-400">
              A confirmation email has been sent to {formData.email}.
            </p>
          </div>
          <div className="pt-8">
            <Link 
              href="/"
              className="inline-block bg-mint text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-mint-dark transition-all shadow-lg"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative h-10 w-40">
            <Image 
              src="/images/logo.png" 
              alt="MINT Care Dentistry" 
              fill
              className="object-contain"
              priority
            />
          </Link>
          <Link href="/" className="text-xs uppercase tracking-widest text-gray-500 hover:text-mint transition-colors font-bold">
            Back to Site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Visual Sidebar */}
          <div className="md:w-1/3 bg-mint p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-serif italic leading-tight">Your MINT Care Journey Starts Here</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Experience the pinnacle of boutique dentistry. Every detail of your visit is designed for your comfort and brilliance.
              </p>
            </div>
            <div className="relative z-10 space-y-4 pt-12">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">1</div>
                <p className="text-xs uppercase tracking-widest font-bold">Details</p>
              </div>
              <div className="flex items-center gap-4 opacity-50">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">2</div>
                <p className="text-xs uppercase tracking-widest font-bold">In-Studio</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Right: The Form */}
          <div className="md:w-2/3 p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-gray-900">Request an Appointment</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Full Name</label>
                    <input 
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-mint transition-colors bg-transparent text-gray-900"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-mint transition-colors bg-transparent text-gray-900"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Email Address</label>
                  <input 
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-mint transition-colors bg-transparent text-gray-900"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Select Service</label>
                  <select 
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-mint transition-colors bg-transparent text-gray-900 appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Preferred Date</label>
                    <input 
                      required
                      type="date"
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-mint transition-colors bg-transparent text-gray-900 cursor-pointer"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Preferred Time</label>
                    <input 
                      required
                      type="time"
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-mint transition-colors bg-transparent text-gray-900 cursor-pointer"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full bg-mint text-white py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-mint-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  Confirm Request
                </button>
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-6">
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
