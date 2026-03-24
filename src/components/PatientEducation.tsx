import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "Oral Health",
    title: "The Art of the MINT Care Routine",
    date: "March 2026",
    image: "/images/blog-main.png"
  },
  {
    category: "Lifestyle",
    title: "Why Boutique Dentistry is the New Standard",
    date: "Feb 2026",
    image: "/images/blog-secondary-1.png"
  },
  {
    category: "Technology",
    title: "Digital Precision: The Future of Your Smile",
    date: "Jan 2026",
    image: "/images/blog-secondary-2.png"
  }
];

export default function PatientEducation() {
  return (
    <section className="py-24 bg-snow relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6 max-w-3xl mx-auto">
          <p className="text-xs font-bold text-mint uppercase tracking-[0.5em]">The Journal</p>
          <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight">
            Patient <span className="text-mint font-light italic">Education</span>.
          </h2>
          <div className="w-16 h-1 bg-mint mx-auto" />
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article, index) => (
            <Link 
              key={article.title} 
              href="#" 
              className="group flex flex-col space-y-8 animate-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-elite border border-white transition-all duration-700 group-hover:shadow-mint/10 group-hover:-translate-y-2">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 30vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Glass Category Badge */}
                <div className="absolute top-6 left-6 px-6 py-2 rounded-full glass-effect text-[10px] uppercase font-bold text-gray-900 tracking-widest shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em]">
                   <span>{article.date}</span>
                   <span className="w-4 h-[1px] bg-gray-200" />
                   <span className="text-mint">Read Journal</span>
                </div>
                <h3 className="text-3xl font-serif text-gray-900 group-hover:text-mint transition-colors leading-snug">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Brand Footer CTA */}
        <div className="mt-24 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div className="space-y-2">
              <h4 className="text-2xl font-serif text-gray-900 italic">Stay in MINT Condition.</h4>
              <p className="text-gray-500 font-sans font-light text-sm">Join our newsletter for concierge health tips and elite smile advice.</p>
           </div>
           <div className="flex w-full md:w-auto gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 md:w-80 bg-white border border-gray-100 rounded-full px-8 py-4 text-sm focus:ring-2 focus:ring-mint transition-all outline-none"
              />
              <button className="bg-mint text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-mint-dark transition-all">
                Join
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
