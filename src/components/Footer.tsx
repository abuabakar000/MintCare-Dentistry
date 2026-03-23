import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="relative h-10 md:h-14 w-40 md:w-56">
              <Image 
                src="/images/logo.png" 
                alt="MINT Care Dentistry" 
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-500 font-sans leading-relaxed text-sm max-w-sm">
              Experience the "MINT Care" difference. Boutique dentistry designed around your comfort, using state-of-the-art technology and a passion for perfect smiles.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-serif font-bold italic text-xl tracking-tight">Get in Touch</h4>
            <div className="space-y-4 font-sans text-sm tracking-wide">
              <p className="flex items-center gap-3 text-gray-500 hover:text-mint transition-colors cursor-pointer">
                <span className="w-5 text-mint font-bold italic">P:</span> 888-612-MINT (6468)
              </p>
              <p className="flex items-center gap-3 text-gray-500 hover:text-mint transition-colors cursor-pointer">
                <span className="w-5 text-mint font-bold italic">E:</span> info@mintdentistry.com
              </p>
              <div className="pt-2">
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Emergency Care Available 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Action Column */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="space-y-2">
              <h4 className="text-gray-900 font-serif font-bold italic text-xl md:text-right tracking-tight">Ready for MINT?</h4>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold md:text-right">
                #17th Most Loved Workplace®
              </p>
            </div>
            <Link 
              href="/book"
              className="group relative bg-mint text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-mint/20 hover:bg-mint-dark transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 font-sans tracking-wide text-[10px] uppercase font-bold">
            © 2026 MINT Care Dentistry. Boutique Care, Elite Results.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest text-gray-300 hover:text-mint cursor-pointer transition-colors">Instagram</span>
             <span className="text-[10px] uppercase tracking-widest text-gray-300 hover:text-mint cursor-pointer transition-colors">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
