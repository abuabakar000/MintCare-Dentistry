"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <div className="relative h-12 w-48 transition-transform duration-300 hover:scale-105">
                <Image 
                  src="/images/logo.png" 
                  alt="MINT Care Dentistry" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-mint transition-colors tracking-widest uppercase">Services</Link>
            <Link href="tel:888-612-6468" className="text-sm font-bold text-gray-900 tracking-wide hover:text-mint transition-colors">888-612-MINT</Link>
            <Link 
              href="/book"
              className="bg-mint hover:bg-mint-dark text-white px-10 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider shadow-lg hover:shadow-mint/20"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-24 left-0 right-0 bg-white border-b border-gray-100 shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 py-12 space-y-10 text-center">
          <Link 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="block text-2xl font-serif text-gray-900 tracking-wide hover:text-mint transition-colors"
          >
            Our Services
          </Link>
          <div className="space-y-2">
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Direct Line</p>
            <Link 
              href="tel:888-612-6468"
              className="block text-xl font-serif text-gray-900 hover:text-mint transition-colors"
            >
              888-612-MINT
            </Link>
          </div>
          <div className="pt-6">
            <Link 
              href="/book"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-mint text-white px-16 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all"
            >
              Book Now
            </Link>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold pt-10">
            MINT CARE DENTISTRY
          </p>
        </div>
      </div>
    </nav>
  );
}
