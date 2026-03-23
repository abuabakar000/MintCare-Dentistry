import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import FounderSection from "@/components/FounderSection";
import WhyUs from "@/components/WhyUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import SmileTransformations from "@/components/SmileTransformations";
import ExpandingGallery from "@/components/ExpandingGallery";
import FAQSection from "@/components/FAQSection";
import PatientEducation from "@/components/PatientEducation";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

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
      <SmileTransformations />
      <ExpandingGallery />
      <FAQSection />
      <PatientEducation />
      <Footer />
    </main>
  );
}
