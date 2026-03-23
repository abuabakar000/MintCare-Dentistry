import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold tracking-tight text-mint">MINT</span>
              <span className="text-xs font-sans tracking-widest text-gray-900 uppercase mt-1">Dentistry</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-mint transition-colors tracking-wide uppercase">Services</Link>
            <Link href="#why-us" className="text-sm font-medium text-gray-600 hover:text-mint transition-colors tracking-wide uppercase">Why Us</Link>
            <Link href="#locations" className="text-sm font-medium text-gray-600 hover:text-mint transition-colors tracking-wide uppercase">Locations</Link>
            <Link href="tel:888-612-6468" className="text-sm font-bold text-gray-900 tracking-wide">888-612-MINT</Link>
            <button className="bg-mint hover:bg-mint-dark text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
