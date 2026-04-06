import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-background overflow-hidden relative">
      
      {/* Decorative Brand Mark - softer */}
      <div className="absolute top-20 -left-20 text-[18rem] font-serif italic text-mint/[0.03] select-none pointer-events-none leading-none">
        M
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-10 animate-reveal">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3">
                <div className="w-6 h-[1.5px] bg-mint" />
                <p className="text-[10px] font-semibold text-mint uppercase tracking-[0.3em]">The MINT Care Standard</p>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
                Designed For <br />
                <span className="text-mint font-light italic">Exceptional</span> People.
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-500 leading-relaxed font-sans font-light">
                Most people are not born with beautiful, healthy teeth. That&apos;s why, 
                for fifteen years, over one million people have trusted MINT Care. 
              </p>
              <p className="text-base text-gray-400 leading-relaxed font-sans italic border-l-2 border-mint/30 pl-6">
                &ldquo;Our mission is simple: to make world-class dental care 
                accessible to everyone who demands the very best.&rdquo;
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-1.5">
                  <h4 className="text-2xl font-serif text-foreground">1M+</h4>
                  <p className="text-[9px] uppercase font-semibold text-gray-400 tracking-[0.15em]">Smiling Patients</p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-2xl font-serif text-foreground">Top 1%</h4>
                  <p className="text-[9px] uppercase font-semibold text-gray-400 tracking-[0.15em]">Industry Ranking</p>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/book"
                  className="group inline-flex items-center gap-3 bg-foreground text-white px-8 py-4 md:px-9 md:py-[18px] rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-mint shadow-card hover:shadow-xl active:scale-[0.97]"
                >
                  Book Your Experience
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Image Grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-12 gap-3 h-[600px] md:h-[700px]">
            {/* Big Main Image */}
            <div className="col-span-8 h-full relative rounded-[2.5rem] overflow-hidden shadow-card animate-reveal group">
              <Image 
                src="/images/staff-3.png" 
                alt="Elite Dental Team" 
                fill 
                sizes="(max-width: 1024px) 70vw, 35vw" 
                className="object-cover transition-transform duration-[8s] group-hover:scale-105" 
              />
            </div>
            {/* Secondary Column */}
            <div className="col-span-4 flex flex-col gap-3 h-full">
               <div className="h-1/2 relative rounded-[2rem] overflow-hidden shadow-card animate-reveal [animation-delay:200ms] group">
                <Image src="/images/staff-1.png" alt="MINT Clinic" fill sizes="15vw" className="object-cover transition-transform duration-[8s] group-hover:scale-105" />
               </div>
               <div className="h-1/2 relative rounded-[2rem] overflow-hidden shadow-card animate-reveal [animation-delay:400ms] group">
                <Image src="/images/staff-5.png" alt="Precision Care" fill sizes="15vw" className="object-cover transition-transform duration-[8s] group-hover:scale-105" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
