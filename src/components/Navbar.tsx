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
    { name: "Services", href: "/services" },
    { name: "888-612-MINT", href: "tel:8886126468" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? "py-3 glass-effect shadow-soft border-b border-white/40" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <Link href="/" className="relative h-10 w-40 md:h-12 md:w-48 transition-all duration-500 hover:opacity-80">
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
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.35em] font-semibold transition-all duration-300 relative group ${
                  link.name === "888-612-MINT" 
                    ? "text-mint text-[11px] tracking-[0.2em]" 
                    : "text-gray-700 hover:text-mint"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-gradient-to-r from-mint to-mint-dark transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <Link 
              href="/book"
              className="relative bg-mint text-white px-8 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-card hover:shadow-xl hover:bg-mint-dark active:scale-[0.97] overflow-hidden group"
            >
              <span className="relative z-10 font-sans">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mint-dark to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none p-2 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="w-7 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-current transition-all duration-500 origin-center ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`w-3/4 h-[1.5px] bg-current transition-all duration-300 ml-auto ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-500 origin-center ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/[0.97] z-40 transition-all duration-600 md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-medium transition-all duration-300 hover:text-mint ${
                link.name === "888-612-MINT" 
                  ? "text-mint text-lg tracking-wider" 
                  : "font-serif italic text-gray-900"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-sage" />
          
          <Link 
            href="/book"
            onClick={() => setIsOpen(false)}
            className="bg-mint text-white px-9 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-card transition-all duration-300"
          >
            Book Appointment
          </Link>
         
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
          >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
