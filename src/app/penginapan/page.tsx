'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { penginapanData } from '@/data/penginapanData';
import JsonLd from '@/components/JsonLd';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

export default function PenginapanPage() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'id' ? 'Penginapan | Desa Tianyar' : 'Accommodation | Tianyar Village';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        language === 'id'
          ? 'Temukan berbagai pilihan penginapan di Desa Tianyar: villa, homestay, lodge, camping, dan akomodasi tradisional dengan pemandangan alam yang menakjubkan.'
          : 'Find various accommodation options in Tianyar Village: villas, homestays, lodges, camping, and traditional accommodations with stunning natural views.'
      );
    }
  }, [language]);

  const [filterTipe, setFilterTipe] = useState('Semua');

  const tipeList = language === 'id'
    ? ['Semua', 'Villa', 'Homestay', 'Guesthouse', 'Lodge', 'Camping', 'Resort', 'Bungalow', 'Rumah Tradisional']
    : ['All', 'Villa', 'Homestay', 'Guesthouse', 'Lodge', 'Camping', 'Resort', 'Bungalow', 'Traditional House'];

  const penginapanFiltered = filterTipe === 'Semua' || filterTipe === 'All'
    ? penginapanData
    : penginapanData.filter(item =>
      language === 'id' ? item.tipe === filterTipe :
        (filterTipe === 'Traditional House' && item.tipe === 'Rumah Tradisional') ||
        (filterTipe !== 'Traditional House' && item.tipe === filterTipe)
    );

  const handleKontak = (kontak: string) => {
    window.open(`https://wa.me/${kontak.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Penginapan Desa Tianyar',
    description: 'Berbagai pilihan akomodasi di Desa Tianyar mulai dari villa mewah hingga camping ground',
    url: 'https://desatianyar.id/penginapan',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tianyar',
      addressRegion: 'Karangasem',
      addressCountry: 'ID'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Penginapan Tianyar',
      itemListElement: penginapanData.map((penginapan, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'LodgingBusiness',
          name: penginapan.nama,
          description: penginapan.deskripsi,
          priceRange: penginapan.harga,
          image: penginapan.gambar
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
            backgroundImage: "url('https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {language === 'id' ? 'Penginapan di Tianyar' : 'Accommodation in Tianyar'}
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              {language === 'id'
                ? 'Temukan Akomodasi Terbaik untuk Pengalaman Menginap yang Berkesan'
                : 'Find the Best Accommodation for a Memorable Stay Experience'
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'Pilihan Penginapan' : 'Accommodation Options'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'id'
                ? 'Akomodasi berkualitas dengan pemandangan alam yang menakjubkan'
                : 'Quality accommodation with stunning natural views'
              }
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {penginapanFiltered.map((penginapan, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={penginapan.gambar}
                    alt={penginapan.nama}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{penginapan.nama}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{penginapan.deskripsi}</p>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">
                      <p>
                        📍{'Lokasi: '}
                        <Link
                          href={penginapan.alamat}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {penginapan.nama}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'id' ? 'Tips Menginap di Tianyar' : 'Tips for Staying in Tianyar'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'id'
                ? 'Panduan untuk pengalaman menginap yang nyaman'
                : 'Guide for a comfortable stay experience'
              }
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard delay={0.1} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'id' ? 'Booking Lebih Awal' : 'Book in Advance'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'id'
                  ? 'Reservasi minimal 3 hari sebelumnya, terutama saat musim liburan dan akhir pekan'
                  : 'Make reservations at least 3 days in advance, especially during holidays and weekends'
                }
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'id' ? 'Persiapan' : 'Preparation'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'id'
                  ? 'Bawa jaket untuk malam hari, sunscreen, dan obat-obatan pribadi'
                  : 'Bring a jacket for the night, sunscreen, and personal medications'
                }
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'id' ? 'Hormati Budaya' : 'Respect Culture'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'id'
                  ? 'Jaga kebersihan, hormati adat istiadat lokal, dan berinteraksi dengan ramah'
                  : 'Keep clean, respect local customs, and interact friendly'
                }
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}