"use client";

import Image from "next/image";

const amenities = [
  {
    id: "01",
    title: "Therapeutic Comfort",
    description: "Massage chairs in every room to ensure your comfort is the priority.",
    image: "/images/luxury-massage.png",
    size: "large"
  },
  {
    id: "02",
    title: "Entertainment",
    description: "Beats by Dre & Netflix to make your visit feel like home.",
    image: "/images/luxury-entertainment.png",
    size: "small"
  },
  {
    id: "03",
    title: "Atmosphere",
    description: "Signature aroma therapy and a calming, curated playlist.",
    image: "/images/luxury-aroma.png",
    size: "small"
  },
  {
    id: "04",
    title: "Refreshments",
    description: "A private bar with luxury beverages available upon arrival.",
    image: "/images/luxury-refreshments.png",
    size: "medium"
  }
];

export default function ExperienceGrid() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8 animate-reveal">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-[10px] font-bold text-gold uppercase tracking-[0.45em]">The Boutique</p>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.05] tracking-tight">
              An Elevated <br /> <span className="text-gold font-light italic">Experience</span>.
            </h2>
          </div>
          <p className="text-gray-400 font-sans text-[10px] tracking-[0.3em] font-bold uppercase pb-4 max-w-[200px] leading-relaxed">
            Every detail curated for your ultimate serenity.
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 min-h-[1000px] md:min-h-[800px]">
          
          {/* Main Card (01) */}
          <div className="md:col-span-7 relative h-[500px] md:h-auto rounded-2xl overflow-hidden group shadow-card animate-reveal">
            <Image 
              src={amenities[0].image} 
              alt={amenities[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-gold">01</p>
               <h3 className="text-3xl font-serif mb-2 italic">{amenities[0].title}</h3>
               <p className="text-sm font-light font-sans text-gray-200 max-w-sm">{amenities[0].description}</p>
            </div>
          </div>

          {/* Secondary Cards Column */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
             {/* Card 02 */}
             <div className="flex-1 relative min-h-[300px] rounded-2xl overflow-hidden group shadow-card animate-reveal" style={{ animationDelay: '100ms' }}>
                <Image 
                  src={amenities[1].image} 
                  alt={amenities[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-gold/10 rounded-2xl" />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-10 text-center">
                   <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-3 text-gold">02</p>
                   <h3 className="text-2xl font-serif text-foreground mb-3 italic">{amenities[1].title}</h3>
                   <p className="text-xs font-light font-sans text-gray-500 leading-relaxed">{amenities[1].description}</p>
                </div>
             </div>

             {/* Card 03 */}
             <div className="flex-1 relative min-h-[300px] rounded-2xl overflow-hidden group shadow-card animate-reveal" style={{ animationDelay: '200ms' }}>
                <Image 
                  src={amenities[2].image} 
                  alt={amenities[2].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-10 text-center text-white">
                   <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-3 text-gold">03</p>
                   <h3 className="text-2xl font-serif mb-3 italic">{amenities[2].title}</h3>
                   <p className="text-xs font-light font-sans text-gray-200 leading-relaxed">{amenities[2].description}</p>
                </div>
             </div>
          </div>

          {/* Bottom Wide Card (04) */}
          <div className="md:col-span-12 relative h-[300px] rounded-2xl overflow-hidden group shadow-card animate-reveal" style={{ animationDelay: '300ms' }}>
             <Image 
                src={amenities[3].image} 
                alt={amenities[3].title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent backdrop-blur-[2px]" />
             <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <div className="max-w-md space-y-4">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">04</p>
                   <h3 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] italic">{amenities[3].title}</h3>
                   <p className="text-sm font-light font-sans text-gray-500 leading-relaxed">{amenities[3].description}</p>
                   <div className="pt-2">
                      <div className="w-12 h-[1px] bg-gold" />
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
