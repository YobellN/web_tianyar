'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { wisataData } from '@/data/wisataData';
import JsonLd from '@/components/JsonLd';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DetailWisataPage() {
  const { language } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  
  const wisata = wisataData.find(item => item.id === id);

  useEffect(() => {
    if (wisata) {
      document.title = language === 'id' 
        ? `${wisata.nama} | Desa Tianyar`
        : `${wisata.namaEn || wisata.nama} | Tianyar Village`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        const description = language === 'id' 
          ? wisata.deskripsiLengkap 
          : wisata.deskripsiLengkapEn || wisata.deskripsiLengkap;
        metaDescription.setAttribute('content', `${description.substring(0, 160)}...`);
      }
    }
  }, [wisata, language]);

  if (!wisata) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'id' ? 'Destinasi tidak ditemukan' : 'Destination not found'}
          </h1>
          <Link href="/wisata" className="text-[#204357] hover:underline">
            {language === 'id' ? 'Kembali ke halaman wisata' : 'Back to tourism page'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: language === 'id' ? wisata.nama : wisata.namaEn || wisata.nama,
    description: language === 'id' ? wisata.deskripsiLengkap : wisata.deskripsiLengkapEn || wisata.deskripsiLengkap,
    image: wisata.gambar,
    url: `https://desatianyar.id/wisata/${wisata.id}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: wisata.lokasi,
      addressLocality: 'Tianyar',
      addressRegion: 'Karangasem',
      addressCountry: 'ID'
    },
    openingHours: wisata.jamBuka,
    isAccessibleForFree: wisata.tiketMasuk === 'Gratis',
    aggregateRating: {
      '@type': 'AggregateRating',
      bestRating: 5,
      worstRating: 1
    },
    amenityFeature: wisata.fasilitas.map(fasilitas => ({
      '@type': 'LocationFeatureSpecification',
      name: fasilitas
    }))
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
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
                {language === 'id' ? wisata.kategori : wisata.kategoriEn || wisata.kategori}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">
              {language === 'id' ? wisata.nama : wisata.namaEn || wisata.nama}
            </h1>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'id' ? `Tentang ${wisata.nama}` : `About ${wisata.namaEn || wisata.nama}`}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'id' ? wisata.deskripsiLengkap : wisata.deskripsiLengkapEn || wisata.deskripsiLengkap}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'id' ? 'Fasilitas' : 'Facilities'}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {(language === 'id' ? wisata.fasilitas : wisata.fasilitasEn || wisata.fasilitas).map((fasilitas: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#204357] rounded-full mr-3"></span>
                      <span className="text-gray-600">{fasilitas}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'id' ? 'Tips Berkunjung' : 'Visiting Tips'}
                </h3>
                <div className="space-y-2">
                  {(language === 'id' ? wisata.tips : wisata.tipsEn || wisata.tips).map((tip: string, index: number) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'id' ? 'Informasi Kunjungan' : 'Visit Information'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      {language === 'id' ? 'Lokasi' : 'Location'}
                    </div>
                    <div className="text-blue-600">
                      <span className="mr-1">📍</span>
                      <Link href={wisata.lokasi}>
                        {language === 'id' ? wisata.nama : wisata.namaEn || wisata.nama}
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      {language === 'id' ? 'Jam Buka' : 'Opening Hours'}
                    </div>
                    <div className="text-gray-900">{wisata.jamBuka}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      {language === 'id' ? 'Tiket Masuk' : 'Entrance Fee'}
                    </div>
                    <div className="text-gray-900">{wisata.tiketMasuk}</div>
                  </div>
                  
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    href="/wisata"
                    className="block w-full text-center bg-[#204357] text-white py-3 rounded-lg font-medium hover:bg-[#1a3a4a] transition-colors mb-3"
                  >
                    {language === 'id' ? 'Kembali ke Wisata' : 'Back to Tourism'}
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