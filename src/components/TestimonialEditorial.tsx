"use client";

const testimonials = [
  {
    quote: "MINT Care isn't just a dental office; it's a sanctuary. I've never felt so pampered during a routine cleaning. The massage chairs and Netflix are game-changers.",
    author: "Sarah J.",
    location: "Highland Park"
  },
  {
    quote: "Finally, a practice that understands the value of time and technology. Painless, precise, and professional. The results are nothing short of perfection.",
    author: "Robert M.",
    location: "Preston Hollow"
  },
  {
    quote: "The atmosphere is unlike anything else in Dallas. It feels like walking into a high-end boutique hotel. My kids actually look forward to their visits now.",
    author: "Elena G.",
    location: "Southlake"
  }
];

export default function TestimonialEditorial() {
  return (
    <section className="py-24 md:py-32 bg-snow border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-5 animate-reveal">
           <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-[10px] font-bold text-gold uppercase tracking-[0.45em]">Patient Stories</p>
           </div>
           <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
             The Wall of <br /> <span className="text-gold font-light italic">Excellence</span>.
           </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          
          {testimonials.map((t, index) => (
            <div 
              key={t.author} 
              className="relative flex flex-col space-y-8 animate-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
               {/* Large Decorative Quote Mark */}
               <span className="text-[6rem] font-serif text-gold/10 leading-none absolute -top-8 -left-4">"</span>
               
               <p className="text-xl lg:text-2xl font-serif text-foreground italic leading-relaxed relative z-10 pr-4">
                 {t.quote}
               </p>

               <div className="pt-6 border-t border-gold/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground mb-1">{t.author}</p>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-gray-400 font-sans">{t.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-2.5 h-2.5 text-gold fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
               </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
