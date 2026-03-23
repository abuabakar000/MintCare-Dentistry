import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Content */}
          <div className="lg:w-2/5 sticky top-32">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="w-16 h-24 relative mb-4">
                {/* Logo Mark */}
                <span className="text-4xl text-mint font-serif">M</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
                Why <span className="text-mint font-light italic">MINT</span>?
              </h2>
              
              <div className="max-w-lg space-y-6">
                <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Here’s a fact of life:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  Most people are not born with beautiful, healthy teeth. That’s why, 
                  for the last fifteen years, over one million people from all over the 
                  country have trusted their teeth and their smiles to MINT dentistry. 
                  Our skilled dental surgeons, our extraordinary cutting-edge 
                  technology, and our intense customer-focused approach are why 
                  MINT is the fastest-growing private (but not private equity owned) 
                  dental company in the country.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 3-Column Image Grid (2-1-2 layout) */}
          <div className="lg:w-3/5 grid grid-cols-3 gap-3 md:gap-4 h-[600px] md:h-[750px]">
            {/* Column 1: Two small images */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-1.png" alt="MINT Team" fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover" />
              </div>
              <div className="relative h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-2.png" alt="MINT Team" fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover" />
              </div>
            </div>

            {/* Column 2: One tall central image */}
            <div className="relative h-full overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03] pt-6 md:pt-10">
              <Image src="/images/staff-3.png" alt="MINT Team" fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover" />
            </div>

            {/* Column 3: Two small images */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-4.png" alt="MINT Team" fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover" />
              </div>
              <div className="relative h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-5.png" alt="MINT Team" fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
