import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Invisalign®: Is it the Right Choice for Your Orthodontic Needs?",
  },
  {
    id: 2,
    title: "The Veneer Process Explained: What to Expect During Your Consult",
  },
  {
    id: 3,
    title: "The Importance of Regular Dental Check-Ups: How Prevention Saves Your Smile",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column: Large Image */}
          <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden group shadow-sm transition-all duration-700 hover:scale-[1.01]">
            <Image
              src="/images/blog-main.png"
              alt="MINT Blog"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Middle Column: Two Stacked Images */}
          <div className="lg:w-1/4 flex flex-col gap-6 w-full h-[500px]">
            <div className="relative h-1/2 w-full rounded-2xl overflow-hidden group shadow-sm transition-all duration-700 hover:scale-[1.01]">
              <Image
                src="/images/blog-secondary-1.png"
                alt="MINT Lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative h-1/2 w-full rounded-2xl overflow-hidden group shadow-sm transition-all duration-700 hover:scale-[1.01]">
              <Image
                src="/images/blog-secondary-2.png"
                alt="MINT Professional"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Blog List */}
          <div className="lg:w-1/4 space-y-8">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="text-3xl font-serif text-gray-900">
                The <span className="text-mint italic">MINT</span>
              </h2>
              <Link
                href="#"
                className="bg-[#788a64] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-md hover:bg-[#637253] transition-colors"
              >
                All Blogs
              </Link>
            </div>
            
            <div className="space-y-2 mb-8">
              <p className="text-xs font-sans tracking-widest text-gray-500 uppercase leading-relaxed">
                Your source for all things dentistry and orthodontics.
              </p>
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Read one of our trending blogs:
              </p>
            </div>

            <div className="space-y-8 divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href="#"
                  className="block pt-8 first:pt-0 group"
                >
                  <h3 className="text-lg font-sans text-gray-700 group-hover:text-mint transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
