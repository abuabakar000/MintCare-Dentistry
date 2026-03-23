"use client";

import { useState } from "react";
import Link from "next/link";

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
            Book Your <span className="text-mint italic">MINT Care</span> Experience
          </h2>
          <p className="text-gray-500 font-sans tracking-widest uppercase text-xs">
            Fast, easy, and premium dental care
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16 border border-gray-100 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl font-serif text-gray-900 italic">Ready for your MINT Care transformation?</h3>
            <p className="text-gray-500 font-sans tracking-wide">
              Select your preferred service and schedule your visit in less than 60 seconds.
            </p>
          </div>
          <div className="flex justify-center">
            <Link 
              href="/book"
              className="bg-mint text-white px-16 py-6 rounded-full text-lg font-bold uppercase tracking-[0.2em] transition-all shadow-2xl hover:bg-mint-dark transform hover:-translate-y-1 active:scale-95"
            >
              Start Your Booking
            </Link>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
            Fastest Growing Private Dental Company in the Country
          </p>
        </div>
    </div>
  </section>
  );
}
