import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Desa Tianyar</h1>
              <p className="text-sm text-blue-600">Kabupaten Karangasem, Bali</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                Beranda
              </Link>
              <Link href="/profil" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                Profil Desa
              </Link>
              <Link href="/wisata" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                Wisata
              </Link>
              <Link href="/umkm" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                UMKM
              </Link>
              <Link href="/berita" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                Berita
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-blue-100 rounded-b-lg">
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 transition-colors">
                Beranda
              </Link>
              <Link href="/profil" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 transition-colors">
                Profil Desa
              </Link>
              <Link href="/wisata" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 transition-colors">
                Wisata
              </Link>
              <Link href="/umkm" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 transition-colors">
                UMKM
              </Link>
              <Link href="/berita" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 transition-colors">
                Berita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}