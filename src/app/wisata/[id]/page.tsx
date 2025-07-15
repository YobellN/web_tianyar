'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { wisataData } from '@/data/wisataData';

export default function DetailWisataPage() {
  const params = useParams();
  const id = params.id as string;
  
  const wisata = wisataData.find(item => item.id === id);

  if (!wisata) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Destinasi tidak ditemukan</h1>
          <Link href="/wisata" className="text-[#204357] hover:underline">
            Kembali ke halaman wisata
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        <div className="relative h-96 overflow-hidden">
          <Image
            src={wisata.gambar}
            alt={wisata.nama}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-8 left-4 sm:left-8 text-white">
            <div className="mb-2">
              <span className="bg-[#204357] px-3 py-1 rounded-full text-sm font-medium">
                {wisata.kategori}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">{wisata.nama}</h1>
            <div className="flex items-center">
              <span className="text-amber-400">⭐</span>
              <span className="ml-1 font-medium">{wisata.rating}</span>
              <span className="mx-2">•</span>
              <span className="text-sm sm:text-base">{wisata.lokasi}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang {wisata.nama}</h2>
                <p className="text-gray-600 leading-relaxed">{wisata.deskripsiLengkap}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fasilitas</h3>
                <div className="grid grid-cols-1 gap-3">
                  {wisata.fasilitas.map((fasilitas, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#204357] rounded-full mr-3"></span>
                      <span className="text-gray-600">{fasilitas}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips Berkunjung</h3>
                <div className="space-y-2">
                  {wisata.tips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">💡</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Kunjungan</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Lokasi</div>
                    <div className="text-gray-900">{wisata.lokasi}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Jam Buka</div>
                    <div className="text-gray-900">{wisata.jamBuka}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Tiket Masuk</div>
                    <div className="text-gray-900">{wisata.tiketMasuk}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Rating</div>
                    <div className="flex items-center">
                      <span className="text-amber-500">⭐</span>
                      <span className="ml-1 font-medium">{wisata.rating}</span>
                      <span className="text-gray-500 ml-1">/5</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    href="/wisata"
                    className="block w-full text-center bg-[#204357] text-white py-3 rounded-lg font-medium hover:bg-[#1a3a4a] transition-colors mb-3"
                  >
                    Kembali ke Wisata
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}