import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-gray-500 pt-16 pb-10 md:pt-24 md:pb-12 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sage to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="relative h-10 md:h-12 w-40 md:w-48">
              <Image 
                src="/images/logo.png" 
                alt="MINT Care Dentistry" 
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-400 font-sans leading-relaxed text-sm max-w-xs font-light">
              Experience the &ldquo;MINT Care&rdquo; difference. Boutique dentistry designed around your comfort, using state-of-the-art technology and a passion for perfect smiles.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="text-foreground font-serif text-lg tracking-tight">Get in Touch</h4>
            <div className="space-y-3.5 font-sans text-sm">
              <a href="tel:8886126468" className="flex items-center gap-3 text-gray-400 hover:text-mint transition-colors duration-300">
                <span className="w-5 text-mint font-semibold text-xs">P:</span> 888-612-MINT (6468)
              </a>
              <a href="mailto:info@mintdentistry.com" className="flex items-center gap-3 text-gray-400 hover:text-mint transition-colors duration-300">
                <span className="w-5 text-mint font-semibold text-xs">E:</span> info@mintdentistry.com
              </a>
              <div className="pt-2">
                <p className="text-gray-300 text-[9px] uppercase tracking-[0.15em] font-semibold">
                  Emergency Care Available 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Action Column */}
          <div className="flex flex-col items-start md:items-end gap-5">
            <div className="space-y-1.5">
              <h4 className="text-foreground font-serif text-lg md:text-right tracking-tight">Ready for MINT?</h4>
              <p className="text-gray-300 text-[9px] uppercase tracking-[0.15em] font-semibold md:text-right">
                #17th Most Loved Workplace®
              </p>
            </div>
            <Link 
              href="/book"
              className="group relative bg-mint text-white px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-card hover:shadow-xl hover:bg-mint-dark active:scale-[0.97] whitespace-nowrap overflow-hidden"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mint-dark to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-7 border-t border-gray-100/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 font-sans tracking-wide text-[9px] uppercase font-semibold">
            © 2026 MINT Care Dentistry. Boutique Care, Elite Results.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-[9px] uppercase tracking-[0.15em] text-gray-300 hover:text-mint cursor-pointer transition-colors duration-300 font-semibold">Instagram</a>
             <a href="#" className="text-[9px] uppercase tracking-[0.15em] text-gray-300 hover:text-mint cursor-pointer transition-colors duration-300 font-semibold">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
