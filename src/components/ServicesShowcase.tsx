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
    image: "/images/teeth-whitening.png", 
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
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-mint/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sage/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-[10px] font-semibold text-gold uppercase tracking-[0.45em]">The Collection</p>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.05] tracking-tight">
              Curated <span className="text-gold font-light italic">Excellence</span>.
            </h2>
          </div>
          <Link 
            href="/services"
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground hover:text-mint transition-all duration-300"
          >
            Explore All Services
            <div className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center group-hover:bg-mint group-hover:border-mint group-hover:text-white transition-all duration-500 shadow-soft">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </div>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative flex flex-col space-y-5 animate-reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-elite">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                   <Link 
                     href={service.link}
                     className="w-full bg-white/90 backdrop-blur-md text-foreground py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.25em] text-center block hover:bg-mint hover:text-white transition-all duration-500 shadow-soft"
                   >
                     Book Service
                   </Link>
                </div>
              </div>

              <div className="space-y-3 px-2">
                <h3 className="text-2xl font-serif text-foreground group-hover:text-gold transition-colors duration-500 italic">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans font-light pr-4">
                  {service.description}
                </p>
                <div className="pt-2 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-gold/50 to-transparent transition-all duration-1000" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
