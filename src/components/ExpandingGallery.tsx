"use client";

import { useState } from "react";
import Image from "next/image";

const models = [
  { id: 1, name: "CLARA", image: "/images/model-clara.png" },
  { id: 2, name: "JD", image: "/images/model-jd.png" },
  { id: 3, name: "LILIA", image: "/images/model-lilia.png" },
  { id: 4, name: "DANTE", image: "/images/model-dante.png" },
  { id: 5, name: "WILLIAM", image: "/images/model-william.png" },
];

export default function ExpandingGallery() {
  const [activeId, setActiveId] = useState(2); // JD expanded by default

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            The Faces of <span className="text-mint italic font-light">MINT Care</span>
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto" />
          <p className="text-sm font-sans tracking-[0.3em] text-gray-500 uppercase">
            Brilliance in every smile
          </p>
        </div>

        <div className="flex flex-row gap-2 md:gap-4 h-[400px] md:h-[500px]">
          {models.map((model) => (
            <div
              key={model.id}
              onClick={() => setActiveId(model.id)}
              className={`relative cursor-pointer transition-all duration-700 ease-in-out overflow-hidden rounded-2xl group ${
                activeId === model.id 
                  ? "flex-[6] md:flex-[4]" 
                  : "flex-1 grayscale hover:grayscale-0"
              }`}
            >
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
                className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
              />
              
              {/* Overlay for text readability */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${
                activeId === model.id ? "bg-black/10" : "bg-black/30 group-hover:bg-black/10"
              }`} />

              {/* Name Overlay - Vertical for Desktop, Horizontal for Mobile Active */}
              <div className={`absolute inset-0 p-4 md:p-8 flex flex-col justify-end transition-all duration-500 ${
                activeId === model.id ? "opacity-100" : "opacity-0 md:opacity-100"
              }`}>
                <span className={`text-white text-lg md:text-2xl font-serif font-bold tracking-widest uppercase pointer-events-none drop-shadow-md transition-all duration-500 ${
                  activeId === model.id ? "rotate-0 translate-y-0" : "md:rotate-[-90deg] md:translate-y-[-2rem]"
                }`}>
                  {model.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
