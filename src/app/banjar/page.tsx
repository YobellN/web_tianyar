'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { banjarData } from '@/data/banjarData';

export default function BanjarPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white">
        <div
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Banjar Dinas
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              Empat Banjar Dinas di Desa Tianyar
            </p>
          </div>
        </div>
      </section>

      {/* Peta Wilayah */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Peta Wilayah Desa</h2>
            <p className="text-lg text-gray-600">Pembagian wilayah banjar dinas di Desa Tianyar</p>
          </div>

          <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-8 mb-12 animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#204357] mb-4">Wilayah Desa Tianyar</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Banjar Dinas Paleg (Utara)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Banjar Dinas Tunas Sari (Tengah)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Banjar Dinas Eka Adnyana (Timur)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Banjar Dinas Dharma Winangun (Selatan)</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="text-sm text-gray-600">
                    <p><strong>Luas Total:</strong> 847 hektar</p>
                    <p><strong>Total Penduduk:</strong> 3.247 jiwa</p>
                    <p><strong>Total Keluarga:</strong> 812 KK</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Peta Wilayah Desa Tianyar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-2">🗺️</div>
                    <p className="text-sm">Peta Wilayah Desa Tianyar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Banjar */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Banjar Dinas</h2>
            <p className="text-lg text-gray-600">Empat banjar dinas yang membentuk Desa Tianyar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {banjarData.map((banjar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={banjar.peta}
                    alt={banjar.nama}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#204357] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Banjar Dinas
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{banjar.nama}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{banjar.deskripsi}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-[#204357]">{banjar.jumlahPenduduk}</div>
                      <div className="text-xs text-gray-600">Penduduk</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-[#204357]">{banjar.jumlahKeluarga}</div>
                      <div className="text-xs text-gray-600">Keluarga</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Wilayah:</div>
                    <div className="text-sm text-gray-700">{banjar.wilayah}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Kegiatan Utama:</div>
                    <div className="flex flex-wrap gap-1">
                      {banjar.kegiatan.slice(0, 2).map((kegiatan, idx) => (
                        <span key={idx} className="bg-[#204357]/10 text-[#204357] px-2 py-1 rounded text-xs">
                          {kegiatan}
                        </span>
                      ))}
                      {banjar.kegiatan.length > 2 && (
                        <span className="text-xs text-gray-500">+{banjar.kegiatan.length - 2} lainnya</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik Gabungan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data Keseluruhan</h2>
            <p className="text-lg text-gray-600">Statistik gabungan dari semua banjar dinas</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl mb-3">🏘️</div>
              <div className="text-3xl md:text-4xl font-bold text-[#204357] mb-2">4</div>
              <div className="text-gray-600">Banjar Dinas</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl mb-3">👥</div>
              <div className="text-3xl md:text-4xl font-bold text-[#204357] mb-2">3.247</div>
              <div className="text-gray-600">Total Penduduk</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl mb-3">🏠</div>
              <div className="text-3xl md:text-4xl font-bold text-[#204357] mb-2">812</div>
              <div className="text-gray-600">Total Keluarga</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl mb-3">📏</div>
              <div className="text-3xl md:text-4xl font-bold text-[#204357] mb-2">847</div>
              <div className="text-gray-600">Hektar</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#204357] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Tahu Lebih Lanjut?</h2>
          <p className="text-xl mb-8 opacity-90">Hubungi kepala banjar untuk informasi lebih detail</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#204357] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Kontak Banjar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}