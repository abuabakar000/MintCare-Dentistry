import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="pt-16 pb-0 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Family Image */}
          <div className="lg:w-1/2 relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-elite group">
            <Image
              src="/images/founder.png"
              alt="Dr. Field Harrison and Family"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[8s] group-hover:scale-105"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Right: Bio Content */}
          <div className="lg:w-1/2 space-y-8 animate-reveal">
            <div className="inline-flex items-center gap-5 mb-2">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-[10px] font-bold text-gold uppercase tracking-[0.45em]">The Visionary</p>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-[1.1] tracking-tight">
              A Legacy of <br /> <span className="text-gold font-light italic">Compassion</span>.
            </h2>

            <p className="text-lg text-gray-400 leading-[1.9] font-sans font-light pr-8">
              At the heart of it all is our founder, Dr. Field Harrison — a dentist, 
              entrepreneur, author, and passionate advocate for people in pain. From 
              providing free food drives to people during COVID, to free dental care to 
              injured veterans, to building MINT Care dentistry rooted in excellence and 
              purpose, Dr. Harrison&apos;s mission is simple: to make world-class dental care 
              accessible to everyone. 
              <br /><br />
              He and his wife, Sabrina also give back through 
              MINT Care Cares, supporting employees and local causes alike. Under his 
              leadership, MINT Care was recently recognized as the #17th Most Loved 
              Workplace® in the nation by the Wall Street Journal®.
            </p>

            <div className="pt-10 space-y-4 border-t border-gray-100 mt-10">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <h3 className="text-2xl font-serif text-foreground italic">Dr. Field Harrison</h3>
                   <p className="text-[10px] font-sans tracking-[0.3em] text-gold uppercase font-bold">Founder & CEO</p>
                </div>
                
                {/* Ratings */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Link href="#" className="text-[9px] font-bold text-gray-300 hover:text-gold transition-colors font-sans uppercase tracking-[0.2em]">
                    Read Patient Letters →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
