"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SmileTransformations() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <section className="py-24 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Smile <span className="text-mint italic font-light">Transformations</span>
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto" />
          <p className="text-sm font-sans tracking-[0.3em] text-gray-500 uppercase">
            Experience the MINT Care Difference
          </p>
        </div>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize group select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Before Image (Bottom Layer) */}
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1593114183058-c3fd2da62d8e?auto=format&fit=crop&q=80&w=2000" 
              alt="Before MINT Care" 
              fill
              className="object-cover"
            />
            {/* "Before" Label */}
            <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
              Before
            </div>
          </div>

          {/* After Image (Top Layer) */}
          <div 
            className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-[10px_0_20px_-10px_rgba(0,0,0,0.5)]"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[initial] h-full" style={{ width: containerRef.current?.offsetWidth }}>
              <Image 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000" 
                alt="After MINT Care" 
                fill
                className="object-cover"
              />
            </div>
            {/* "After" Label */}
            <div className="absolute top-8 right-8 bg-mint/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-x-125"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-mint/20">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-mint rounded-full" />
                <div className="w-1 h-4 bg-mint rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 font-sans italic">
            "We don't just fix teeth; we craft smiles that empower. Our signature MINT Care whitening and alignment techniques deliver clinical excellence with boutique comfort."
          </p>
          <div className="mt-8">
            <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
              Advanced Cosmetics & Whitening
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
