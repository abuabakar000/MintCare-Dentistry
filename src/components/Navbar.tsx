"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Founder", href: "#founder" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "py-4 glass-effect shadow-glass" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <Link href="/" className="relative h-10 w-40 md:h-12 md:w-48 transition-transform hover:scale-105">
            <Image 
              src="/images/logo.png" 
              alt="MINT Care Dentistry" 
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-900 hover:text-mint transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-mint transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Link 
              href="/book"
              className="bg-mint text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:bg-mint-dark transform hover:-translate-y-1 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 focus:outline-none p-2"
          >
            <div className="w-8 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-3/4 h-[2px] bg-current transition-all duration-300 ml-auto ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/98 z-40 transition-all duration-500 md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif font-bold italic text-gray-900 transition-all hover:text-mint transform hover:scale-110"
            >
              {link.name}
            </a>
          ))}
          <Link 
            href="/book"
            onClick={() => setIsOpen(false)}
            className="bg-mint text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.3em] shadow-2xl animate-mint-pulse"
          >
            Book Appointment
          </Link>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-all"
          >
             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
