import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";

const serviceData: Record<string, any> = {
  "general": {
    title: "General Dentistry",
    description: "The foundation of a perfect smile. Comprehensive care with a boutique touch.",
    longDescription: "Our general dentistry practice is designed to be the ultimate foundation for your oral health. We don't just 'check' your teeth; we curate a life-long health plan using the most advanced diagnostic tools and a passion for preventative care. From deep cleanings to comprehensive exams, every moment is tailored to your comfort.",
    image: "/images/general-dentistry.png",
    benefits: [
      { title: "Digital X-Rays", desc: "90% less radiation for your safety." },
      { title: "Boutique Comfort", desc: "Netflix, warm blankets, and massage chairs." },
      { title: "Expert Cleaning", desc: "Gentle yet thorough care from top hygienists." }
    ]
  },
  "invisalign": {
    title: "Invisalign®",
    description: "Straighten your teeth with the world's most advanced clear aligner system.",
    longDescription: "Discover the clear alternative to braces. Invisalign® at MINT Care uses proprietary SmartTrack material to move your teeth more comfortably and predictably. Our digital scanning process means no messy impressions—just a precise, high-tech map to your perfect smile.",
    image: "/images/invisalign.png",
    benefits: [
      { title: "Virtually Invisible", desc: "Straighten your teeth without anyone noticing." },
      { title: "Removable", desc: "Eat what you want and brush with ease." },
      { title: "Faster Results", desc: "See your new smile in as little as 6 months." }
    ]
  },
  "veneers": {
    title: "Veneers",
    description: "Transform your appearance with custom-crafted, ultra-thin porcelain veneers.",
    longDescription: "MINT Veneers are the ultimate statement in cosmetic excellence. Our master ceramists hand-craft ultra-thin porcelain shells that bond to your teeth, correcting gaps, chips, or deep staining. This is the 'Hollywood Smile' refined for the MINT Care boutique experience.",
    image: "/images/veneers.png",
    benefits: [
      { title: "Custom Artistry", desc: "Bespoke design for a natural, elite look." },
      { title: "Durable Beauty", desc: "Stain-resistant porcelain that lasts for years." },
      { title: "Instant Perfection", desc: "A total smile transformation in just two visits." }
    ]
  },
  "whitening": {
    title: "Teeth Whitening",
    description: "Professional brightening that delivers immediate, stunning results.",
    longDescription: "Don't settle for drugstore strips. MINT Care professional whitening penetrates deep into the enamel to remove years of staining from coffee, tea, and age. Our formula is specifically designed to minimize sensitivity while maximizing that brilliant 'MINT' glow.",
    image: "/images/general-dentistry.png", 
    benefits: [
      { title: "Fast Results", desc: "Up to 8 shades whiter in a single hour." },
      { title: "Safe Formula", desc: "pH-balanced to protect your enamel." },
      { title: "Long-lasting", desc: "Professional strength for a glow that stays." }
    ]
  },
  "surgery": {
    title: "Oral Surgery",
    description: "Expert surgical care in a calming, state-of-the-art environment.",
    longDescription: "Precision meets compassion in our oral surgery suite. Whether you require wisdom tooth removal or dental implants, our surgeons utilize 3D imaging and advanced sedation techniques to ensure your procedure is as swift and painless as possible.",
    image: "/images/oral-surgery.png",
    benefits: [
      { title: "3D Guided Surgery", desc: "Ultimate precision for complex procedures." },
      { title: "Expert Surgeons", desc: "The nation's top-tier oral health specialists." },
      { title: "Rapid Recovery", desc: "Advanced protocols to get you back to life faster." }
    ]
  },
  "sedation": {
    title: "Sedation Dentistry",
    description: "Maximum comfort for a completely stress-free dental experience.",
    longDescription: "Dental anxiety is real, and at MINT Care, we've solved it. Our sedation options allow you to drift through your appointment in a state of 'twilight' relaxation. You'll remain responsive but completely calm, often remembering little of the procedure itself.",
    image: "/images/sedation-dentistry.png",
    benefits: [
      { title: "Anxiety Relief", desc: "Perfect for patients with dental phobias." },
      { title: "Time Efficiency", desc: "Complete multiple procedures in one visit." },
      { title: "Dreamy Comfort", desc: "Relaxation that feels like a boutique spa." }
    ]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Service Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            priority
            className="object-cover transition-transform duration-[10s] hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center space-y-4 px-4 animate-reveal">
           <p className="text-xs font-bold text-mint uppercase tracking-[0.5em] drop-shadow-lg">Boutique Specialty</p>
           <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight drop-shadow-2xl">
              {service.title}
           </h1>
           <div className="w-24 h-1 bg-mint mx-auto mt-8" />
        </div>
      </section>

      {/* Service Insight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/2 space-y-8 animate-reveal">
                 <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight italic">
                    The <span className="text-mint font-light">MINT Care</span> <br />Perspective.
                 </h2>
                 <p className="text-xl text-gray-600 font-sans font-light leading-relaxed">
                    {service.longDescription}
                 </p>
              </div>
              <div className="lg:w-1/2 bg-snow rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-elite animate-reveal">
                 <h3 className="text-2xl font-serif text-gray-900 mb-8 italic">Boutique Benefits</h3>
                 <div className="space-y-10">
                    {service.benefits.map((benefit: any) => (
                      <div key={benefit.title} className="flex gap-6 items-start group">
                         <div className="w-12 h-12 rounded-full bg-white border border-mint/20 flex items-center justify-center text-mint font-serif font-bold italic transition-all group-hover:bg-mint group-hover:text-white shadow-sm">
                            M
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-lg font-bold text-gray-900 tracking-tight font-sans">{benefit.title}</h4>
                            <p className="text-gray-500 font-sans font-light">{benefit.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Secondary Insight: The Boutique Experience */}
      <section className="py-24 bg-snow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-xs font-bold text-mint uppercase tracking-[0.4em]">Why Us?</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 italic">Expertise in Every Detail.</h2>
              <p className="text-lg text-gray-600 font-sans font-light leading-relaxed">
                 We believe that luxury and health are not mutually exclusive. Our {service.title} specialized care 
                 is delivered by the nation's top 1% of dental professionals, supported by a concierge team 
                 dedicated to your comfort.
              </p>
              <div className="pt-8 flex flex-wrap justify-center gap-12">
                 <div className="space-y-2">
                    <p className="text-3xl font-serif text-gray-900">99%</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Client Satisfaction</p>
                 </div>
                 <div className="w-[1px] h-12 bg-gray-200 hidden md:block" />
                 <div className="space-y-2">
                    <p className="text-3xl font-serif text-gray-900">Top 1%</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Industry Specialists</p>
                 </div>
                 <div className="w-[1px] h-12 bg-gray-200 hidden md:block" />
                 <div className="space-y-2">
                    <p className="text-3xl font-serif text-gray-900">2026</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Modern Methodology</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <BookingBar />
      <Footer />
    </main>
  );
}

// Generate static params for production builds
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}
