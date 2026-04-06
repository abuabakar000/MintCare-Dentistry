"use client";

const pillars = [
  {
    number: "01",
    title: "Unmatched Comfort",
    subtitle: "Massage & Amenities",
    description: "Every MINT Care office is designed to feel more like a luxury lounge than a dental practice. From signature massage chairs to private entertainment suites, we ensure a serene visit from start to finish."
  },
  {
    number: "02",
    title: "Elite Precision",
    subtitle: "Advanced Technology",
    description: "We invest in only the highest-tier dental technology. AI-driven diagnostics and pain-free laser technology mean faster, more comfortable, and incredibly precise results for your smile."
  },
  {
    number: "03",
    title: "Clinical Excellence",
    subtitle: "The Top 1% Masters",
    description: "Our doctors are selected through a rigorous process, recruiting only the top 1% of graduates and masters in their field. We believe that elite dentistry starts with elite talent."
  }
];

export default function MintStandard() {
  return (
    <section className="py-24 md:py-32 bg-snow border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-5 animate-reveal">
           <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-[10px] font-bold text-gold uppercase tracking-[0.45em]">The Philosophy</p>
           </div>
           <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
             The <span className="text-gold font-light italic">MINT</span> Standard.
           </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 relative">
           
           {/* Decorative background numbers */}
           <div className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden md:block">
              <div className="flex justify-between h-full items-center opacity-[0.03] text-[20rem] font-serif text-gold leading-none italic px-10">
                 <span>1</span>
                 <span>2</span>
                 <span>3</span>
              </div>
           </div>

           {pillars.map((pillar, index) => (
             <div 
               key={pillar.title} 
               className="relative flex flex-col space-y-6 animate-reveal"
               style={{ animationDelay: `${index * 150}ms` }}
             >
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">{pillar.number}</span>
                     <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif text-foreground italic leading-tight">{pillar.title}</h3>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.25em]">{pillar.subtitle}</p>
               </div>
               
               <p className="text-base text-gray-500 font-sans font-light leading-relaxed pr-6">
                 {pillar.description}
               </p>

               <div className="pt-4">
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300 border-b border-gray-100 hover:border-gold pb-1.5 flex items-center gap-3 group">
                     Learn More
                     <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                  </button>
               </div>
             </div>
           ))}

        </div>

      </div>
    </section>
  );
}
