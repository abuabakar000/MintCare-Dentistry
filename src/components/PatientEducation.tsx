import Image from "next/image";
import Link from "next/link";

const educationalTips = [
  {
    id: 1,
    title: "Brushing Technique",
    content: "Brush for 2 full minutes, twice a day, using a soft-bristled brush to protect your enamel.",
  },
  {
    id: 2,
    title: "The Power of Flossing",
    content: "Daily flossing removes up to 40% of plaque from between-teeth areas brushes cannot reach.",
  },
  {
    id: 3,
    title: "Hydration Matters",
    content: "Water rinses away food particles and maintains a healthy pH balance in your mouth.",
  },
  {
    id: 4,
    title: "Toothbrush Renewal",
    content: "Replace your toothbrush every 3 months to ensure effective cleaning and hygiene.",
  },
];

export default function PatientEducation() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Patient <span className="text-mint italic font-light">Education</span>
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto" />
          <p className="text-sm font-sans tracking-[0.3em] text-gray-500 uppercase">
            Your daily guide to a MINT Care smile
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column: Large Image */}
          <div className="lg:w-1/2 relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden group shadow-sm transition-all duration-700 hover:scale-[1.01]">
            <Image
              src="/images/blog-main.png"
              alt="Patient Education"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Middle Column: Two Stacked Images */}
          <div className="lg:w-1/4 flex flex-col md:flex-row lg:flex-col gap-6 w-full md:h-[250px] lg:h-[500px]">
            <div className="relative h-[200px] md:h-full lg:h-1/2 w-full rounded-2xl overflow-hidden group shadow-sm transition-all duration-700 hover:scale-[1.01]">
              <Image
                src="/images/blog-secondary-1.png"
                alt="Healthy Lifestyle"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[200px] md:h-full lg:h-1/2 w-full rounded-2xl overflow-hidden group shadow-sm transition-all duration-700 hover:scale-[1.01]">
              <Image
                src="/images/blog-secondary-2.png"
                alt="Professional Care"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Education List */}
          <div className="lg:w-1/4 space-y-8">
            <div className="space-y-2 mb-8">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Daily Care Essentials:
              </p>
            </div>

            <div className="space-y-6 divide-y divide-gray-100">
              {educationalTips.map((tip) => (
                <div
                  key={tip.id}
                  className="pt-6 first:pt-0"
                >
                  <h3 className="text-sm font-bold text-mint uppercase tracking-wider mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100">
              <Link 
                href="/book"
                className="inline-block w-full text-center bg-mint text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-mint-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
