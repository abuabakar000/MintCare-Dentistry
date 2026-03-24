"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  { id: 1, title: "Modern Luxury", subtitle: "Boutique Atmosphere", image: "/images/hero-bg.png" },
  { id: 2, title: "Elite Tech", subtitle: "Advanced Diagnostics", image: "/images/staff-3.png" },
  { id: 3, title: "Care First", subtitle: "Patient Advocacy", image: "/images/founder.png" },
  { id: 4, title: "Dream Smiles", subtitle: "Cosmetic Excellence", image: "/images/staff-1.png" },
];

export default function ExpandingGallery() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-8 animate-reveal">
           <div className="max-w-2xl space-y-4">
              <p className="text-xs font-bold text-mint uppercase tracking-[0.4em]">The Atmosphere</p>
              <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight italic">
                 Inside <span className="text-mint font-light">MINT Care</span>.
              </h2>
           </div>
           <p className="text-gray-400 font-sans text-xs tracking-[0.3em] font-bold uppercase pb-4">Explore the boutique</p>
        </div>

        {/* Expanding Items */}
        <div className="flex flex-col md:flex-row h-[700px] gap-6 animate-reveal">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setExpandedId(item.id)}
              className={`relative h-full transition-all duration-700 ease-in-out cursor-pointer group overflow-hidden rounded-[3rem] shadow-elite border-4 border-white ${
                expandedId === item.id ? "flex-[4]" : "flex-1 grayscale hover:grayscale-0"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (expanded) 50vw, 15vw"
                className="object-cover transition-transform duration-[8s] group-hover:scale-110"
              />
              
              {/* Overlay Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-opacity duration-700 ${
                 expandedId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-40"
              }`} />

              {/* Content Badge */}
              <div className={`absolute bottom-10 left-10 right-10 transition-all duration-700 ${
                expandedId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <div className="glass-effect p-8 rounded-[2rem] border border-white/20 shadow-2xl">
                  <p className="text-[10px] uppercase font-bold text-mint tracking-[0.4em] mb-2">{item.subtitle}</p>
                  <h4 className="text-3xl md:text-4xl font-serif text-gray-900 italic">{item.title}</h4>
                </div>
              </div>

              {/* Collapsed Label (Rotated) */}
              {expandedId !== item.id && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <p className="text-xs font-bold text-white uppercase tracking-[0.5em] -rotate-90 whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity">
                      {item.title}
                   </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
