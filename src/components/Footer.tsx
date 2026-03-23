import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex justify-center mb-8">
          <div className="relative h-12 w-48">
            <Image 
              src="/images/logo.png" 
              alt="MINT Care Dentistry" 
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-gray-400 font-sans tracking-wide text-sm md:text-base">© 2026 MINT Care Dentistry. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold hover:text-mint transition-colors cursor-pointer">Privacy Policy</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold hover:text-mint transition-colors cursor-pointer">Terms of Service</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold hover:text-mint transition-colors cursor-pointer">Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
