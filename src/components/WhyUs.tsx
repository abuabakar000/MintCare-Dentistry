import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 sticky top-32">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
                Why <span className="text-mint font-light italic">MINT Care</span>?
              </h2>
              
              <div className="max-w-lg space-y-6">
                <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Here’s a fact of life:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  Most people are not born with beautiful, healthy teeth. That’s why, 
                  for the last fifteen years, over one million people from all over the 
                  country have trusted their teeth and their smiles to MINT Care dentistry. 
                  Our skilled dental surgeons, our extraordinary cutting-edge 
                  technology, and our intense customer-focused approach are why 
                  MINT Care is the fastest-growing private (but not private equity owned) 
                  dental company in the country.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/book"
                    className="inline-block bg-mint text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-mint-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Book Your Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 min-h-[500px] md:h-[550px]">
            {/* Column 1: Two small images */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative h-[150px] md:h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-1.png" alt="MINT Team" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              </div>
              <div className="relative h-[150px] md:h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-2.png" alt="MINT Team" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              </div>
            </div>

            {/* Column 2: One tall central image - hidden on small mobile, shown on md+ */}
            <div className="hidden md:block relative h-full overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03] pt-6 md:pt-10">
              <Image src="/images/staff-3.png" alt="MINT Team" fill sizes="20vw" className="object-cover" />
            </div>

            {/* Column 3: Two small images */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative h-[150px] md:h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-4.png" alt="MINT Team" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              </div>
              <div className="relative h-[150px] md:h-1/2 overflow-hidden rounded-2xl shadow-sm transition-all duration-700 hover:scale-[1.03]">
                <Image src="/images/staff-5.png" alt="MINT Team" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
