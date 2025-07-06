import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-700">Desa Tianyar</h1>
              <p className="text-sm text-gray-600">Kabupaten Karangasem, Bali</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Beranda
              </Link>
              <Link href="/profil" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Profil Desa
              </Link>
              <Link href="/budaya" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Budaya & Tradisi
              </Link>
              <Link href="/wisata" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Wisata
              </Link>
              <Link href="/umkm" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                UMKM
              </Link>
              <Link href="/berita" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Berita
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
                Beranda
              </Link>
              <Link href="/profil" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
                Profil Desa
              </Link>
              <Link href="/budaya" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
                Budaya & Tradisi
              </Link>
              <Link href="/wisata" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
                Wisata
              </Link>
              <Link href="/umkm" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
                UMKM
              </Link>
              <Link href="/berita" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
                Berita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}