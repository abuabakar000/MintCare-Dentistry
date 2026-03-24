import Image from "next/image";

export default function Certifications() {
  const certs = [
    { name: "Best of Dallas", image: "/images/cert-best-dallas.png" },
    { name: "Most Loved Workplace", image: "/images/cert-loved-workplace.png" },
    { name: "Top Rated Dentist", image: "/images/cert-best-dallas.png" }, // Reusing for demo
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
          
          <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.5em] mb-4 md:mb-0">
             Accredited Excellence
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {certs.map((cert, index) => (
              <div key={index} className="relative h-12 w-32 md:h-16 md:w-40 transition-all hover:scale-110">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
