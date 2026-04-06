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
    image: "/images/teeth-whitening.png", 
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
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-snow overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 animate-reveal">
           <div className="inline-flex items-center gap-3 justify-center">
             <div className="w-6 h-[1.5px] bg-mint" />
             <p className="text-[10px] font-semibold text-mint uppercase tracking-[0.3em]">The Suite</p>
             <div className="w-6 h-[1.5px] bg-mint" />
           </div>
           <h1 className="text-4xl md:text-7xl font-serif text-foreground leading-tight">
              Curated <span className="text-mint font-light italic">Excellence</span>.
           </h1>
           <p className="text-base md:text-lg text-gray-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Explore our full range of boutique dental services, each delivered with the precision of science and the touch of luxury.
           </p>
        </div>
      </section>

      {/* Full Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
              {services.map((service, index) => (
                <div key={service.slug} className="group animate-reveal" style={{ animationDelay: `${index * 80}ms` }}>
                   <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-card mb-7 transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-xl">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 45vw" 
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                      <div className="absolute bottom-8 left-8">
                         <h3 className="text-3xl font-serif text-white italic drop-shadow-md">{service.title}</h3>
                      </div>
                   </div>
                   <div className="space-y-5 px-2">
                      <p className="text-base text-gray-400 font-sans font-light leading-relaxed">
                        {service.description}
                      </p>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 hover:text-mint transition-all duration-300 group/link"
                      >
                         Learn about {service.title}
                         <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-24 bg-snow relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sage to-transparent" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <h2 className="text-3xl font-serif text-foreground italic">The Boutique Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { title: "Massage Chairs", desc: "Relax in luxury during every procedure." },
                 { title: "Entertainment", desc: "Netflix & noise-canceling headphones provided." },
                 { title: "Warm Amenities", desc: "Refresh with warm scented towels after your visit." }
               ].map(item => (
                 <div key={item.title} className="space-y-3 border-t border-gray-100 pt-7 transition-all duration-500 hover:border-mint">
                    <p className="text-lg font-serif text-foreground">{item.title}</p>
                    <p className="text-sm text-gray-400 font-sans font-light">{item.desc}</p>
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
