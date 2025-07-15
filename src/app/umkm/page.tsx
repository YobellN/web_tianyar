'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { umkmData } from '@/data/umkmData';

export default function UMKMPage() {
  const [filterKategori, setFilterKategori] = useState('Semua');
  
  const kategoriList = ['Semua', 'Kuliner', 'Kerajinan', 'Fashion', 'Akomodasi', 'Kesehatan', 'Minuman'];
  
  const umkmFiltered = filterKategori === 'Semua' 
    ? umkmData 
    : umkmData.filter(item => item.kategori === filterKategori);

  const handleKontak = (kontak: string) => {
    window.open(`https://wa.me/${kontak.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen">
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
              UMKM Desa Tianyar
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              Dukung Produk Lokal, Majukan Ekonomi Desa
            </p>
          </div>
        </div>
      </section>

  
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

      {/* Daftar UMKM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">UMKM Desa Tianyar</h2>
            <p className="text-lg text-gray-600">Produk dan layanan berkualitas dari masyarakat lokal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmFiltered.map((umkm, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={umkm.gambar}
                    alt={umkm.nama}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#204357] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {umkm.kategori}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1">
                    <span className="text-amber-500">⭐</span>
                    <span className="text-sm font-medium ml-1">{umkm.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{umkm.nama}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{umkm.deskripsi}</p>
                  <div className="text-sm text-gray-500 mb-3">
                    <p>📍 {umkm.alamat}</p>
                    <p>🕒 {umkm.jamBuka}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-amber-500">⭐</span>
                      <span className="text-sm font-medium ml-1">{umkm.rating}</span>
                    </div>
                    <button 
                      onClick={() => handleKontak(umkm.kontak)}
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

      {/* Program Pemberdayaan */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Pemberdayaan</h2>
            <p className="text-lg text-gray-600">Inisiatif untuk mengembangkan UMKM lokal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center animate-slide-up">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pelatihan Bisnis</h3>
              <p className="text-gray-600 text-sm">Workshop manajemen usaha dan keuangan</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center animate-slide-up">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">Pelatihan pemasaran online dan media sosial</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center animate-slide-up">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Akses Permodalan</h3>
              <p className="text-gray-600 text-sm">Bantuan modal usaha dengan bunga rendah</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center animate-slide-up">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pasar Online</h3>
              <p className="text-gray-600 text-sm">Platform e-commerce untuk produk lokal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kisah Sukses</h2>
            <p className="text-lg text-gray-600">Inspirasi dari pelaku UMKM yang telah berkembang</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-8 animate-slide-up">
              <div className="flex items-center mb-4">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Bu Made"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bu Made</h3>
                  <p className="text-[#204357]">Warung Sate Lilit</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm">
                "Berkat pelatihan digital marketing, omzet warung saya meningkat 300% dalam 6 bulan.
                Sekarang pesanan datang dari berbagai daerah melalui media sosial."
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 animate-slide-up">
              <div className="flex items-center mb-4">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Pak Wayan"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Pak Wayan</h3>
                  <p className="text-amber-700">Kerajinan Anyaman</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm">
                "Dengan bantuan modal usaha, saya bisa membeli peralatan modern.
                Produksi meningkat dan kini produk saya dijual hingga ke luar negeri."
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-[#204357] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Bergabung?</h2>
          <p className="text-xl mb-8 opacity-90">Daftarkan UMKM Anda untuk mendapat dukungan pengembangan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#204357] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Daftar UMKM
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}