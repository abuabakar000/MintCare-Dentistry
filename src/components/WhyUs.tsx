import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden relative">
      
      {/* Decorative Brand Mark */}
      <div className="absolute top-20 -left-20 text-[20rem] font-serif italic text-mint/5 select-none pointer-events-none">
        M
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-10 animate-reveal">
            <div className="space-y-4">
              <p className="text-xs font-bold text-mint uppercase tracking-[0.4em]">The MINT Care Standard</p>
              <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight">
                Designed For <br />
                <span className="text-mint font-light italic">Exceptional</span> People.
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed font-sans font-light">
                Most people are not born with beautiful, healthy teeth. That’s why, 
                for fifteen years, over one million people have trusted MINT Care. 
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-sans italic border-l-4 border-mint/20 pl-8">
                "Our mission is simple: to make world-class dental care 
                accessible to everyone who demands the very best."
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif text-gray-900 italic">1M+</h4>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Smiling Patients</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif text-gray-900 italic">Top 1%</h4>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Industry Ranking</p>
                </div>
              </div>

              <div className="pt-6">
                <Link 
                  href="/book"
                  className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-mint shadow-xl transform hover:-translate-y-1"
                >
                  Book Your Experience
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Image Grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-12 gap-4 h-[600px] md:h-[700px]">
            {/* Big Main Image */}
            <div className="col-span-8 h-full relative rounded-[3rem] overflow-hidden shadow-elite animate-reveal">
              <Image 
                src="/images/staff-3.png" 
                alt="Elite Dental Team" 
                fill 
                sizes="(max-width: 1024px) 70vw, 35vw" 
                className="object-cover transition-transform duration-[8s] hover:scale-110" 
              />
            </div>
            {/* Secondary Column */}
            <div className="col-span-4 flex flex-col gap-4 h-full">
               <div className="h-1/2 relative rounded-[2rem] overflow-hidden shadow-elite animate-reveal [animation-delay:200ms]">
                <Image src="/images/staff-1.png" alt="MINT Clinic" fill sizes="15vw" className="object-cover" />
               </div>
               <div className="h-1/2 relative rounded-[2rem] overflow-hidden shadow-elite animate-reveal [animation-delay:400ms]">
                <Image src="/images/staff-5.png" alt="Precision Care" fill sizes="15vw" className="object-cover" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
