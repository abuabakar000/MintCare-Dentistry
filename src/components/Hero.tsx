import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Background Layer with Subtle Parallax Effect Style */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Luxury Dentistry Experience" 
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[10s] hover:scale-105"
        />
        {/* Elite Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-10 animate-reveal">
          
          <div className="space-y-4">
            <p className="text-xs md:text-sm font-sans font-bold text-mint uppercase tracking-[0.4em] mb-4">
              Boutique Dentistry • Dallas, TX
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif text-gray-900 leading-[0.9] tracking-tighter">
              A Better Way <br />
              To <span className="text-mint font-light italic">Smile</span>.
            </h1>
          </div>

          <div className="max-w-xl space-y-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light">
              This is not the dentist you grew up with. Experience <span className="font-bold text-gray-900">MINT Care</span>—where luxury, technology, and 
              compassion converge to create the perfect dental experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/book"
                className="group relative inline-flex items-center justify-center bg-mint text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all shadow-2xl hover:bg-mint-dark"
              >
                <span className="relative z-10">Book Your Experience</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0" />
              </Link>
              <a 
                href="#services"
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-1"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Excellence Badge */}
          <div className="pt-12 flex items-center gap-6 border-t border-gray-100 mt-12 w-fit">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden relative">
                        <img src={`/images/staff-${i}.png`} alt="Staff" className="object-cover" />
                    </div>
                 ))}
               </div>
               <div>
                 <p className="text-[10px] md:text-xs font-sans font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Trusted by 10k+ Fans</p>
                 <p className="text-[10px] md:text-xs font-serif italic text-gray-900">#17 Most Loved Workplace</p>
               </div>
          </div>

        </div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 rotate-90 origin-left translate-x-3">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>

    </section>
  );
}
