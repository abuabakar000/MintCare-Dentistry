import Image from "next/image";

const servicesTop = [
  { id: 1, title: "General Dentistry", image: "/images/general-dentistry.png" },
  { id: 2, title: "Invisalign® & Braces", image: "/images/invisalign.png" },
  { id: 3, title: "Oral Surgery", image: "/images/oral-surgery.png" },
];

const servicesBottom = [
  { id: 4, title: "Teeth Whitening", image: "/images/teeth-whitening.png" },
  { id: 5, title: "Cosmetic Veneers", image: "/images/veneers.png" },
  { id: 6, title: "What We Do", image: "/images/hero-bg.png" }, // Reusing hero-bg for "What We Do"
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Grid (img 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px] md:h-auto">
          {servicesTop.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl h-[400px] shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
              <div className="absolute bottom-10 left-0 right-0 text-center">
                <h3 className="text-3xl font-serif text-gray-900 tracking-wide transition-all group-hover:mb-2 italic">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid (img 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesBottom.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl h-[400px] shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
              {service.id === 5 && (
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <span className="text-mint text-3xl font-serif">M</span>
                   </div>
                </div>
              )}
              <div className="absolute bottom-10 left-0 right-0 text-center">
                <h3 className="text-3xl font-serif text-gray-900 tracking-wide italic">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
