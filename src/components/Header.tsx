import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg animate-header-appear' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#204357]' : 'text-white'
              }`}>
                Desa Tianyar
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                Karangasem, Bali
              </p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Beranda
              </Link>
              <Link href="/wisata" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Wisata
              </Link>
              <Link href="/umkm" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                UMKM
              </Link>
              <Link href="/berita" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Berita
              </Link>
              <Link href="/banjar" className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Banjar
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none p-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300 ${
              isScrolled 
                ? 'bg-white border-gray-100' 
                : 'bg-black/20 backdrop-blur-sm border-white/20'
            }`}>
              <Link href="/" className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Beranda
              </Link>
              <Link href="/wisata" className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Wisata
              </Link>
              <Link href="/umkm" className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                UMKM
              </Link>
              <Link href="/berita" className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Berita
              </Link>
              <Link href="/banjar" className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#204357]' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Banjar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}