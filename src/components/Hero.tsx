import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Premium Dental Care"
          fill
          sizes="100vw"
          className="object-cover object-[center_right] md:object-right"
          priority
        />
        {/* Advanced Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="space-y-4 mb-8 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-serif text-gray-900 leading-[0.95] tracking-tight">
              Get in <br />
              <span className="text-mint font-bold italic">MINT Care</span> <br />
              Condition
            </h1>
            <p className="text-[10px] md:text-base font-sans tracking-[0.3em] md:tracking-[0.4em] text-gray-800 uppercase font-bold">
              MINT Care Dentistry
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            {/* Main Booking Group */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Link 
                  href="/book"
                  className="bg-mint text-white px-10 py-4 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-mint-dark transition-all shadow-lg hover:shadow-mint/20 transform hover:-translate-y-1 block text-center"
                >
                  Book Now
                </Link>
                <button className="bg-white/40 backdrop-blur-md text-gray-900 px-10 py-4 rounded-md text-sm font-bold uppercase tracking-widest border border-white/60 hover:bg-white/60 transition-all shadow-sm">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
