'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { wisataData } from '@/data/wisataData';

export default function WisataPage() {
  const [filterKategori, setFilterKategori] = useState('Semua');
  
  const kategoriList = ['Semua', 'Alam', 'Budaya', 'Pantai', 'Sejarah'];
  
  const destinasiFiltered = filterKategori === 'Semua' 
    ? wisataData 
    : wisataData.filter(item => item.kategori === filterKategori);

  const aktivitas = [
    { nama: "Trekking", icon: "🥾", deskripsi: "Jelajahi jalur pendakian menuju air terjun dan puncak bukit" },
    { nama: "Snorkeling", icon: "🤿", deskripsi: "Nikmati keindahan bawah laut dengan terumbu karang yang indah" },
    { nama: "Fotografi", icon: "📸", deskripsi: "Abadikan momen indah di spot-spot fotogenik" },
    { nama: "Kuliner", icon: "🍽️", deskripsi: "Cicipi makanan tradisional Bali yang autentik" }
  ];

  return (
    <div className="min-h-screen">
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
              Destinasi Wisata
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              Jelajahi Keindahan Alam dan Budaya Desa Tianyar
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
                className={`px-6 py-2 rounded-full transition-colors ${
                  filterKategori === kategori
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Destinasi Wisata</h2>
            <p className="text-lg text-gray-600">Jelajahi keindahan alam dan budaya Desa Tianyar</p>
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
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1">
                    <span className="text-amber-500">⭐</span>
                    <span className="text-sm font-medium ml-1">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.nama}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.deskripsi}</p>
                  <Link 
                    href={`/wisata/${item.id}`}
                    className="block w-full bg-[#204357] text-white py-2 rounded-lg hover:bg-[#1a3a4a] transition-colors text-center"
                  >
                    Lihat Detail
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aktivitas di Tianyar</h2>
            <p className="text-lg text-gray-600">Kegiatan yang bisa dilakukan di desa</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tips Berkunjung</h2>
            <p className="text-lg text-gray-600">Panduan praktis untuk wisata di Tianyar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-[#204357] mb-4">Waktu Terbaik Berkunjung</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Pagi hari (06:00-10:00) untuk cuaca sejuk</li>
                <li>• Sore hari (16:00-18:00) untuk sunset</li>
                <li>• Musim kemarau (April-Oktober) lebih nyaman</li>
                <li>• Hari kerja lebih sepi pengunjung</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-amber-700 mb-4">Yang Perlu Dibawa</h3>
    </div>
  );
}