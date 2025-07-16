'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BanjarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white">
        <div
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Banjar Dinas</h1>
            <p className="text-xl opacity-90 animate-slide-up">Empat Banjar Dinas di Desa Tianyar</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Peta Wilayah Desa</h2>
            <p className="text-lg text-gray-600">Pembagian wilayah banjar dinas di Desa Tianyar</p>
          </div>
          <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-8 mb-12 animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
                <div className="mt-6 p-4 bg-white rounded-lg shadow">
                  <div className="text-sm text-gray-600">
                    <p><strong>Luas Total:</strong> 847 hektar</p>
                    <p><strong>Total Penduduk:</strong> 3.247 jiwa</p>
                    <p><strong>Total Keluarga:</strong> 812 KK</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Peta Desa Tianyar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31590.942204454754!2d115.48875499999998!3d-8.21604995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1fa10fc6d3ea3%3A0x5030bfbca8316c0!2sTianyar%2C%20Kubu%2C%20Karangasem%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1752664832372!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
