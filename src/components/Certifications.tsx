import Image from "next/image";

export default function Certifications() {
  const certs = [
    { name: "Best of Dallas", image: "/images/cert-best-dallas.png" },
    { name: "Most Loved Workplace", image: "/images/cert-loved-workplace.png" },
    { name: "Top Rated Dentist", image: "/images/cert-best-dallas.png" },
  ];

  return (
    <section className="bg-background py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 opacity-50 hover:opacity-90 transition-opacity duration-700 grayscale hover:grayscale-0">
          
          <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 uppercase tracking-[0.4em] mb-2 md:mb-0 whitespace-nowrap">
             Accredited Excellence
          </p>

          <div className="w-[1px] h-6 bg-gray-200 hidden md:block" />

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {certs.map((cert, index) => (
              <div key={index} className="relative h-10 w-28 md:h-14 md:w-36 transition-all duration-500 hover:scale-105">
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
