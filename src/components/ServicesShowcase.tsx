"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "General Dentistry",
    description: "The foundation of a perfect smile. Comprehensive care with a boutique touch.",
    image: "/images/general-dentistry.png",
    link: "/services/general",
  },
  {
    title: "Invisalign®",
    description: "Straighten your teeth with the world's most advanced clear aligner system.",
    image: "/images/invisalign.png",
    link: "/services/invisalign",
  },
  {
    title: "Veneers",
    description: "Transform your appearance with custom-crafted, ultra-thin porcelain veneers.",
    image: "/images/veneers.png",
    link: "/services/veneers",
  },
  {
    title: "Teeth Whitening",
    description: "Professional brightening that delivers immediate, stunning results.",
    image: "/images/general-dentistry.png", 
    link: "/services/whitening",
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical care in a calming, state-of-the-art environment.",
    image: "/images/oral-surgery.png",
    link: "/services/surgery",
  },
  {
    title: "Sedation Dentistry",
    description: "Maximum comfort for a completely stress-free dental experience.",
    image: "/images/sedation-dentistry.png",
    link: "/services/sedation",
  },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="py-24 bg-snow relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-mint/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold text-mint uppercase tracking-[0.4em]">Elite Services</p>
            <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
              Crafting <span className="text-mint font-light italic">Exceptional</span> Smiles.
            </h2>
          </div>
          <Link 
            href="/services"
            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-900 hover:text-mint transition-colors"
          >
            Explore All Services
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-mint group-hover:border-mint group-hover:text-white transition-all">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </div>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative flex flex-col space-y-6 animate-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-elite transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-mint/10">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <Link 
                     href={service.link}
                     className="w-full bg-white/90 backdrop-blur-md text-gray-900 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest text-center block hover:bg-mint hover:text-white transition-colors"
                   >
                     Learn More
                   </Link>
                </div>
              </div>

              <div className="space-y-3 px-2">
                <h3 className="text-3xl font-serif text-gray-900 group-hover:text-mint transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
