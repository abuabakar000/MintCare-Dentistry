import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Family Image */}
          <div className="lg:w-1/2 relative h-[600px] w-full rounded-2xl overflow-hidden border border-gray-100 transition-all hover:scale-[1.02]">
            <Image
              src="/images/founder.png"
              alt="Dr. Field Harrison and Family"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right: Bio Content */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-12 font-sans italic">
              At the heart of it all is our founder, Dr. Field Harrison — a dentist, 
              entrepreneur, author, and passionate advocate for people in pain. From 
              providing free food drives to people during COVID, to free dental care to 
              injured veterans, to building MINT dentistry rooted in excellence and 
              purpose, Dr. Harrison's mission is simple: to make world-class dental care 
              accessible to everyone. He and his wife, Sabrina also give back through 
              MINT Cares, supporting employees and local causes alike. And under his 
              leadership, MINT was recently recognized as the #17th Most Loved 
              Workplace® in the nation by the Wall Street Journal®.
            </p>

            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-gray-900 leading-tight">
                Dr. Field Harrison
              </h2>
              <p className="text-sm font-sans tracking-widest text-[#8DB600] uppercase font-bold">
                Founder & CEO
              </p>
              
              {/* Ratings and Signature Link */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-mint" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Link href="#" className="text-sm font-bold text-mint hover:underline font-sans">
                  See MINT Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
