import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";

const services = [
  {
    title: "General Dentistry",
    description: "The foundation of health. Comprehensive exams, cleanings, and preventative care tailored for your comfort.",
    image: "/images/general-dentistry.png",
    slug: "general"
  },
  {
    title: "Invisalign®",
    description: "The clear alternative to braces. Straighten your teeth discreetly with world-class technology.",
    image: "/images/invisalign.png",
    slug: "invisalign"
  },
  {
    title: "Veneers",
    description: "Custom-crafted porcelain artistry. Achieve the perfect 'Hollywood Smile' in just two boutique visits.",
    image: "/images/veneers.png",
    slug: "veneers"
  },
  {
    title: "Teeth Whitening",
    description: "Immediate brilliance. Professional-grade brightening that removes years of stains in one hour.",
    image: "/images/general-dentistry.png", 
    slug: "whitening"
  },
  {
    title: "Oral Surgery",
    description: "Precision meets compassion. Expert surgical care using 3D guided technology and advanced sedation.",
    image: "/images/oral-surgery.png",
    slug: "surgery"
  },
  {
    title: "Sedation Dentistry",
    description: "Stress-free excellence. Experience twilight relaxation for a completely calm dental experience.",
    image: "/images/sedation-dentistry.png",
    slug: "sedation"
  }
];

export default function ServicesDirectory() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-snow overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mint/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 animate-reveal">
           <p className="text-xs font-bold text-mint uppercase tracking-[0.5em]">The Suite</p>
           <h1 className="text-4xl md:text-8xl font-serif text-gray-900 leading-tight">
              Curated <span className="text-mint font-light italic">Excellence</span>.
           </h1>
           <p className="text-base md:text-xl text-gray-500 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Explore our full range of boutique dental services, each delivered with the precision of science and the touch of luxury.
           </p>
        </div>
      </section>

      {/* Full Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {services.map((service, index) => (
                <div key={service.slug} className="group animate-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                   <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden shadow-elite mb-8 border-4 border-white transition-all duration-700 group-hover:-translate-y-4">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 45vw" 
                        className="object-cover transition-transform duration-[10s] group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                      <div className="absolute bottom-10 left-10">
                         <h3 className="text-4xl font-serif text-white italic drop-shadow-md">{service.title}</h3>
                      </div>
                   </div>
                   <div className="space-y-6 px-4">
                      <p className="text-lg text-gray-600 font-sans font-light leading-relaxed">
                        {service.description}
                      </p>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-900 hover:text-mint transition-colors group-hover:translate-x-2 transition-transform"
                      >
                         Learn about {service.title}
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                      </Link>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Boutique Experience Section */}
      <section className="py-24 bg-snow">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <h2 className="text-4xl font-serif text-gray-900 italic">The Boutique Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: "Massage Chairs", desc: "Relax in luxury during every procedure." },
                 { title: "Entertainment", desc: "Netflix & noise-canceling headphones provided." },
                 { title: "Warm Amenities", desc: "Refresh with warm scented towels after your visit." }
               ].map(item => (
                 <div key={item.title} className="space-y-4 border-t border-gray-100 pt-8 transition-all hover:border-mint">
                    <p className="text-xl font-serif text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 font-sans font-light">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <BookingBar />
      <Footer />
    </main>
  );
}
