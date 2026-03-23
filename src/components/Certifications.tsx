import Image from "next/image";

export default function Certifications() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {/* Best of Dallas 1 */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/cert-best-dallas.png"
              alt="Best of Dallas 2025"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>

          {/* Top 100 Workplaces */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/cert-loved-workplace.png"
              alt="America's Top 100 Most Loved Workplaces 2025"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 192px"
            />
          </div>

          {/* Best of Dallas 2 (Replicated) */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/cert-best-dallas.png"
              alt="Best of Dallas 2025"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
