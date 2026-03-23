import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Premium Dental Care"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Subtle White Overlay */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-2">
            Get in <br />
            <span className="text-mint font-bold italic">MINT</span> Condition
          </h1>
          <p className="text-xl md:text-2xl font-sans tracking-widest text-gray-700 uppercase mb-12">
            dentistry
          </p>

          {/* Action Buttons Group 1 */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all border border-gray-200">
              Book Now
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-md text-sm font-bold uppercase tracking-widest border border-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Call Now
            </button>
          </div>

          {/* Action Buttons Group 2 */}
          <p className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
            braces & invisalign®
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all border border-gray-200">
              Book Your <br /> Free Consult
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-md text-sm font-bold uppercase tracking-widest border border-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
