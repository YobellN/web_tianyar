'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { wisataData } from '@/data/wisataData';
import JsonLd from '@/components/JsonLd';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WisataPage() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'id' ? 'Destinasi Wisata | Desa Tianyar' : 'Tourism Destinations | Tianyar Village';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        language === 'id'
          ? 'Jelajahi destinasi wisata terbaik di Desa Tianyar: pantai, savana, budaya, dan edukasi. Temukan keindahan tersembunyi Bali Timur.'
          : 'Explore the best tourist destinations in Tianyar Village: beaches, savannas, culture, and education. Discover the hidden beauty of East Bali.'
      );
    }
  }, [language]);

  const [filterKategori, setFilterKategori] = useState('Semua');

  const kategoriList = language === 'id'
    ? ['Semua', 'Alam', 'Budaya', 'Pantai', 'Edukasi', 'Spiritual']
    : ['All', 'Nature', 'Culture', 'Beach', 'Education', 'Spiritual'];

  const destinasiFiltered = filterKategori === 'Semua' || filterKategori === 'All'
    ? wisataData
    : wisataData.filter(item =>
      language === 'id' ? item.kategori === filterKategori :
        (filterKategori === 'Nature' && item.kategori === 'Alam') ||
        (filterKategori === 'Culture' && item.kategori === 'Budaya') ||
        (filterKategori === 'Beach' && item.kategori === 'Pantai') ||
        (filterKategori === 'Education' && item.kategori === 'Edukasi') ||
        (filterKategori === 'Spiritual' && item.kategori === 'Spiritual')
    );

  const aktivitas = language === 'id' ? [
    { nama: "Trekking", icon: "🥾", deskripsi: "Jelajahi jalur pendakian menuju air terjun dan puncak bukit" },
    { nama: "Snorkeling", icon: "🤿", deskripsi: "Nikmati keindahan bawah laut dengan terumbu karang yang indah" },
    { nama: "Fotografi", icon: "📸", deskripsi: "Abadikan momen indah di spot-spot fotogenik" },
    { nama: "Kuliner", icon: "🍽️", deskripsi: "Cicipi makanan tradisional Bali yang autentik" }
  ] : [
    { nama: "Trekking", icon: "🥾", deskripsi: "Explore hiking trails to waterfalls and hilltops" },
    { nama: "Snorkeling", icon: "🤿", deskripsi: "Enjoy underwater beauty with beautiful coral reefs" },
    { nama: "Photography", icon: "📸", deskripsi: "Capture beautiful moments at photogenic spots" },
    { nama: "Culinary", icon: "🍽️", deskripsi: "Taste authentic traditional Balinese food" }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Destinasi Wisata Desa Tianyar',
    description: 'Kumpulan destinasi wisata alam, budaya, dan edukasi di Desa Tianyar, Karangasem, Bali',
    url: 'https://desatianyar.id/wisata',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tianyar',
      addressRegion: 'Karangasem',
      addressCountry: 'ID'
    },
    touristType: ['Wisatawan alam', 'Wisatawan budaya', 'Fotografer', 'Backpacker'],
    includesAttraction: wisataData.map(wisata => ({
      '@type': 'TouristAttraction',
      name: wisata.nama,
      description: wisata.deskripsi,
      image: wisata.gambar
    }))
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white">
        <div
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {language === 'id' ? 'Destinasi Wisata' : 'Tourism Destinations'}
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              {language === 'id'
                ? 'Jelajahi Keindahan Alam dan Budaya Desa Tianyar'
                : 'Explore the Natural Beauty and Culture of Tianyar Village'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {kategoriList.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setFilterKategori(kategori)}
                className={`px-6 py-2 rounded-full transition-colors ${filterKategori === kategori
                  ? 'bg-[#204357] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
                  }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinasi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'Destinasi Wisata' : 'Tourism Destinations'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'id'
                ? 'Jelajahi keindahan alam dan budaya Desa Tianyar'
                : 'Explore the natural beauty and culture of Tianyar Village'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinasiFiltered.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.gambar}
                    alt={item.nama}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#204357] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.kategori}
                    </span>
                  </div>
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.nama}</h3>

                  <p className="text-gray-600 mb-2 text-sm">{item.deskripsi}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>
                      📍{'Lokasi: '}
                      <Link
                        href={item.lokasi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {item.nama}
                      </Link>
                    </p>
                  </div>
                  <Link
                    href={`/wisata/${item.id}`}
                    className="block w-full bg-[#204357] text-white py-2 rounded-lg hover:bg-[#1a3a4a] transition-colors text-center"
                  >
                    {language === 'id' ? 'Lihat Detail' : 'View Details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktivitas Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'Aktivitas di Tianyar' : 'Activities in Tianyar'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'id'
                ? 'Kegiatan yang bisa dilakukan di desa'
                : 'Activities you can do in the village'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aktivitas.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center animate-slide-up">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.nama}</h3>
                <p className="text-gray-600 text-sm">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'Tips Berkunjung' : 'Visiting Tips'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'id'
                ? 'Panduan praktis untuk wisata di Tianyar'
                : 'Practical guide for tourism in Tianyar'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-[#204357] mb-4">
                {language === 'id' ? 'Waktu Terbaik Berkunjung' : 'Best Time to Visit'}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {language === 'id' ? (
                  <>
                    <li>• Pagi hari (06:00-10:00) untuk cuaca sejuk</li>
                    <li>• Sore hari (16:00-18:00) untuk sunset</li>
                    <li>• Musim kemarau (April-Oktober) lebih nyaman</li>
                    <li>• Hari kerja lebih sepi pengunjung</li>
                  </>
                ) : (
                  <>
                    <li>• Morning (06:00-10:00) for cool weather</li>
                    <li>• Evening (16:00-18:00) for sunset</li>
                    <li>• Dry season (April-October) more comfortable</li>
                    <li>• Weekdays are less crowded</li>
                  </>
                )}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-amber-700 mb-4">
                {language === 'id' ? 'Yang Perlu Dibawa' : 'What to Bring'}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {language === 'id' ? (
                  <>
                    <li>• Kamera untuk mengabadikan momen</li>
                    <li>• Sunscreen dan topi</li>
                    <li>• Air minum yang cukup</li>
                    <li>• Sepatu yang nyaman</li>
                  </>
                ) : (
                  <>
                    <li>• Camera to capture moments</li>
                    <li>• Sunscreen and hat</li>
                    <li>• Enough drinking water</li>
                    <li>• Comfortable shoes</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}