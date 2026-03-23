import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import FounderSection from "@/components/FounderSection";
import WhyUs from "@/components/WhyUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import ExpandingGallery from "@/components/ExpandingGallery";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <Certifications />
      <BookingBar />
      <FounderSection />
      <WhyUs />
      <ServicesShowcase />
      <ExpandingGallery />
      <FAQSection />
      <BlogSection />
      
      {/* Footer Placeholder for completeness */}
      <footer className="bg-white text-gray-600 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-3xl font-serif font-bold tracking-tight text-gray-900 mb-8">
            MINT <span className="text-xs uppercase font-sans font-normal tracking-[0.3em] ml-2">Dentistry</span>
          </div>
          <p className="text-gray-400 font-sans tracking-wide">© 2026 MINT Dentistry. All rights reserved.</p>
          <div className="flex justify-center gap-8 pt-8">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Privacy Policy</span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Terms of Service</span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Accessibility</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
