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
        <div className="flex flex-col md:flex-row gap-4 h-[360px] md:h-[440px]">
          {models.map((model) => (
            <div
              key={model.id}
              onClick={() => setActiveId(model.id)}
              className={`relative cursor-pointer transition-all duration-700 ease-in-out overflow-hidden rounded-2xl group ${
                activeId === model.id 
                  ? "flex-[3] md:flex-[2.5]" 
                  : "flex-1 grayscale hover:grayscale-0"
              }`}
            >
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
              />
              
              {/* Overlay for text readability */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${
                activeId === model.id ? "bg-black/10" : "bg-black/30 group-hover:bg-black/10"
              }`} />

              {/* Vertical Name Overlay */}
              <div className="absolute inset-y-0 right-0 p-8 flex flex-col justify-end">
                <span className="text-white text-xl md:text-2xl font-serif font-bold tracking-widest writing-vertical uppercase pointer-events-none drop-shadow-md">
                  {model.name}
                </span>
                <style jsx>{`
                  .writing-vertical {
                    writing-mode: vertical-rl;
                  }
                `}</style>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
