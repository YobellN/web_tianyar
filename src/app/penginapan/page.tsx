'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { penginapanData } from '@/data/penginapanData';
import JsonLd from '@/components/JsonLd';

export default function PenginapanPage() {
  useEffect(() => {
    document.title = 'Penginapan | Desa Tianyar';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Temukan berbagai pilihan penginapan di Desa Tianyar: villa, homestay, lodge, camping, dan akomodasi tradisional dengan pemandangan alam yang menakjubkan.');
    }
  }, []);

  const [filterTipe, setFilterTipe] = useState('Semua');
  
  const tipeList = ['Semua', 'Villa', 'Homestay', 'Guesthouse', 'Lodge', 'Camping', 'Resort', 'Bungalow', 'Rumah Tradisional'];
  
  const penginapanFiltered = filterTipe === 'Semua' 
    ? penginapanData 
    : penginapanData.filter(item => item.tipe === filterTipe);

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
              Penginapan di Tianyar
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              Temukan Akomodasi Terbaik untuk Pengalaman Menginap yang Berkesan
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tipeList.map((tipe) => (
              <button
                key={tipe}
                onClick={() => setFilterTipe(tipe)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filterTipe === tipe
                    ? 'bg-[#204357] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {tipe}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Penginapan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilihan Penginapan</h2>
            <p className="text-lg text-gray-600">Akomodasi berkualitas dengan pemandangan alam yang menakjubkan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {penginapanFiltered.map((penginapan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={penginapan.gambar}
                    alt={penginapan.nama}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#204357] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {penginapan.tipe}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1">
                    <span className="text-amber-500">⭐</span>
                    <span className="text-sm font-medium ml-1">{penginapan.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{penginapan.nama}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{penginapan.deskripsi}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">
                      <p>📍 {penginapan.alamat}</p>
                      <p>👥 Kapasitas: {penginapan.kapasitas}</p>
                      <p className="font-medium text-[#204357]">💰 {penginapan.harga}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Fasilitas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {penginapan.fasilitas.slice(0, 3).map((fasilitas, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {fasilitas}
                        </span>
                      ))}
                      {penginapan.fasilitas.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{penginapan.fasilitas.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-amber-500">⭐</span>
                      <span className="text-sm font-medium ml-1">{penginapan.rating}</span>
                    </div>
                    <button 
                      onClick={() => handleKontak(penginapan.kontak)}
                      className="bg-[#204357] text-white px-4 py-2 rounded-lg hover:bg-[#1a3a4a] transition-colors text-sm"
                    >
                      Hubungi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tips Menginap di Tianyar</h2>
            <p className="text-lg text-gray-600">Panduan untuk pengalaman menginap yang nyaman</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center animate-slide-up">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Booking Lebih Awal</h3>
              <p className="text-gray-600 text-sm">Reservasi minimal 3 hari sebelumnya, terutama saat musim liburan dan akhir pekan</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center animate-slide-up">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Persiapan</h3>
              <p className="text-gray-600 text-sm">Bawa jaket untuk malam hari, sunscreen, dan obat-obatan pribadi</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center animate-slide-up">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hormati Budaya</h3>
              <p className="text-gray-600 text-sm">Jaga kebersihan, hormati adat istiadat lokal, dan berinteraksi dengan ramah</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}