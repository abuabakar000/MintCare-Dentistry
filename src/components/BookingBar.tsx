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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Book Your <span className="text-mint italic">MINT</span> Experience
          </h2>
          <p className="text-gray-500 font-sans tracking-widest uppercase text-xs">
            Fast, easy, and premium dental care
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-mint transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Contact Field */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">
              Phone or Email
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 555-0123"
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-mint transition-all"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>

          {/* Service Field */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">
              Service
            </label>
            <select
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-mint transition-all appearance-none cursor-pointer"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option>General Dentistry</option>
              <option>Invisalign® & Braces</option>
              <option>Oral Surgery</option>
              <option>Teeth Whitening</option>
              <option>Cosmetic Veneers</option>
            </select>
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">
              Preferred Date
            </label>
            <input
              type="date"
              required
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-mint transition-all cursor-pointer"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-mint text-white font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-[#7da100] transition-all shadow-lg hover:shadow-mint/20 active:scale-95"
            >
              Book My Visit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
}
