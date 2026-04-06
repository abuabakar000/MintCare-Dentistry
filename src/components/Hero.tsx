import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 animate-reveal">
        <Image 
          src="/images/hero-bg.png" 
          alt="Luxury Dentistry Experience" 
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-right opacity-90 md:opacity-100"
        />
        {/* Refined gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/5 md:via-background/40 md:to-transparent" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-10 animate-reveal">
          
          <div className="space-y-5">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-gold to-transparent" />
              <p className="text-[10px] md:text-xs font-sans font-semibold text-gold uppercase tracking-[0.45em]">
                Boutique Dentistry • Dallas, TX
              </p>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-serif text-foreground leading-[1.05] md:leading-[0.9] tracking-tight">
              A Better Way <br />
              To <span className="text-gold font-light italic">Smile</span>.
            </h1>
          </div>

          <div className="max-w-xl space-y-8">
            <p className="text-base md:text-lg text-gray-500 leading-relaxed font-sans font-light">
              This is not the dentist you grew up with. Experience <span className="font-medium text-foreground">MINT Care</span>—where luxury, technology, and 
              compassion converge to create the perfect dental experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/book"
                className="group relative inline-flex items-center justify-center bg-mint text-white px-10 py-4.5 rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 shadow-card hover:shadow-xl"
              >
                <span className="relative z-10">Book Your Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-mint-dark to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <a 
                href="#services"
                className="inline-flex items-center justify-center border border-gray-200 text-gray-700 px-10 py-4.5 rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-all duration-500 group"
              >
                View Services
                <svg className="w-3.5 h-3.5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Excellence Badge */}
          <div className="pt-10 flex items-center gap-6 border-t border-gray-100/80 mt-10 w-fit">
               <div className="flex -space-x-2.5">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-gray-100 overflow-hidden relative shadow-soft">
                        <Image 
                          src={`/images/staff-${i}.png`} 
                          alt="Staff" 
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                    </div>
                 ))}
               </div>
               <div className="space-y-1">
                 <p className="text-[10px] font-sans font-semibold text-gray-400 uppercase tracking-[0.2em] leading-none">Trusted by 10k+ Patients</p>
                 <p className="text-[11px] font-serif italic text-foreground">#17 Most Loved Workplace®</p>
               </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-gray-400">Scroll</span>
      </div>

    </section>
  );
}
