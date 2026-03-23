"use client";

import Link from "next/link";

export default function BookingBar() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light-gray rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center space-y-8 md:space-y-12 shadow-sm border border-gray-500/10">
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              Ready for your <br className="hidden md:block" /><span className="text-mint italic font-light">MINT Care</span> transformation?
            </h2>
            <p className="text-sm md:text-lg text-gray-500 font-sans tracking-wide max-w-xl mx-auto">
              Select your preferred service and schedule your visit in less than 60 seconds. Fast, easy, and premium dental care.
            </p>
          </div>
          
          <div className="flex justify-center pt-4">
            <Link 
              href="/book"
              className="group relative bg-mint text-white px-10 md:px-20 py-5 md:py-7 rounded-full text-base md:text-xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-mint/20 hover:bg-mint-dark transform hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Start Your Booking</span>
              <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>

          <div className="space-y-4 pt-4">
            <div className="w-12 h-[1px] bg-gray-200 mx-auto"></div>
            <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-gray-400 font-bold">
              The #17th Most Loved Workplace® in the Nation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
