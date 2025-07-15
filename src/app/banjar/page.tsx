'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
      <Footer />
    </div>
  );
}