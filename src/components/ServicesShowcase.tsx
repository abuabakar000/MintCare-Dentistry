import Image from "next/image";
import Link from "next/link";

const services = [
  { id: 1, title: "General Dentistry", image: "/images/general-dentistry.png" },
  { id: 2, title: "Invisalign® & Braces", image: "/images/invisalign.png" },
  { id: 3, title: "Oral Surgery", image: "/images/oral-surgery.png" },
  { id: 4, title: "Teeth Whitening", image: "/images/teeth-whitening.png" },
  { id: 5, title: "Cosmetic Veneers", image: "/images/veneers.png" },
  { id: 6, title: "Sedation Dentistry", image: "/images/sedation-dentistry.png" },
  { id: 7, title: "Emergency Care", image: "/images/blog-main.png" },
  { id: 8, title: "Periodontal Therapy", image: "/images/blog-secondary-2.png" },
  { id: 9, title: "Preventive Care", image: "/images/blog-secondary-1.png" },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Our <span className="text-mint italic">MINT Care</span> Services
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto" />
          <p className="text-gray-500 font-sans tracking-widest uppercase text-xs">
            Excellence in every treatment
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl h-[340px] shadow-sm transition-all duration-500">
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-[2px] bg-mint transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide italic">
                    {service.title}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/80 text-[10px] uppercase tracking-[0.3em] font-sans transition-all duration-500">
                    Explore Treatment
                  </p>
                </div>
              </div>

              {/* Hover Border Border Accent */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-2xl m-4"></div>
            </div>
          ))}
        </div>

        {/* Center Booking CTA */}
        <div className="flex justify-center pt-8">
          <Link 
            href="/book"
            className="bg-mint text-white px-12 py-5 rounded-full text-lg font-serif font-bold italic tracking-wide hover:bg-mint-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Book Your <span className="text-white/90 group-hover:text-white transition-colors">MINT Care</span> Experience
          </Link>
        </div>

      </div>
    </section>
  );
}
