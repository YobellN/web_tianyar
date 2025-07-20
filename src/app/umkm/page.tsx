'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { umkmData } from '@/data/umkmData';
import JsonLd from '@/components/JsonLd';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function UMKMPage() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'id' ? 'UMKM Desa Tianyar | Desa Tianyar' : 'Local Business | Tianyar Village';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        language === 'id'
          ? 'Dukung produk lokal UMKM Desa Tianyar: kuliner tradisional, kerajinan tangan, homestay, dan produk unggulan lainnya.'
          : 'Support local products from Tianyar Village: traditional cuisine, handicrafts, homestays, and other featured products.'
      );
    }
  }, [language]);

  const handleKontak = (kontak: string) => {
    window.open(`https://wa.me/${kontak.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'UMKM Desa Tianyar',
    description: 'Kumpulan usaha mikro kecil menengah di Desa Tianyar yang menyediakan produk lokal berkualitas',
    url: 'https://desatianyar.id/umkm',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tianyar',
      addressRegion: 'Karangasem',
      addressCountry: 'ID'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Produk UMKM Tianyar',
      itemListElement: umkmData.map((umkm, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Product',
          name: umkm.nama,
          description: umkm.deskripsi,
          image: umkm.gambar
        }
      }))
    }
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
            backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {language === 'id' ? 'UMKM Desa Tianyar' : 'Tianyar Village Local Business'}
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              {language === 'id'
                ? 'Dukung Produk Lokal, Majukan Ekonomi Desa'
                : 'Support Local Products, Advance Village Economy'
              }
            </p>
          </div>
        </div>
      </section>



      {/* Daftar UMKM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'UMKM Desa Tianyar' : 'Tianyar Village Local Business'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'id'
                ? 'Produk dan layanan berkualitas dari masyarakat lokal'
                : 'Quality products and services from local community'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmData.map((umkm, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={umkm.gambar}
                    alt={umkm.nama}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{umkm.nama}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{umkm.deskripsi}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>
                      📍{'Lokasi: '}
                      <Link
                        href={umkm.alamat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {umkm.nama}
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleKontak(umkm.kontak)}
                      className="bg-[#204357] text-white px-4 py-2 rounded-lg hover:bg-[#1a3a4a] transition-colors text-sm"
                    >
                      {language === 'id' ? 'Hubungi' : 'Contact'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}