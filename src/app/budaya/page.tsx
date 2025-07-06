'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BudayaPage() {
  const tradisi = [
    {
      nama: "Upacara Melasti",
      deskripsi: "Upacara penyucian yang dilakukan menjelang Hari Raya Nyepi",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      nama: "Tari Kecak",
      deskripsi: "Pertunjukan tari tradisional yang menceritakan kisah Ramayana",
      gambar: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      nama: "Pesta Panen",
      deskripsi: "Perayaan syukur atas hasil panen yang melimpah",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const kesenian = [
    {
      nama: "Gamelan Gong Kebyar",
      deskripsi: "Ensemble musik tradisional Bali yang energik dan dinamis"
    },
    {
      nama: "Tari Legong",
      deskripsi: "Tarian klasik Bali yang anggun dan penuh makna"
    },
    {
      nama: "Wayang Kulit",
      deskripsi: "Pertunjukan boneka kulit dengan cerita epik Hindu"
    },
    {
      nama: "Seni Ukir Kayu",
      deskripsi: "Kerajinan ukiran kayu dengan motif tradisional Bali"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Budaya & Tradisi</h1>
          <p className="text-xl opacity-90">Melestarikan Warisan Leluhur untuk Generasi Mendatang</p>
        </div>
      </section>

      {/* Tradisi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tradisi Desa</h2>
            <p className="text-lg text-gray-600">Upacara dan ritual yang masih terjaga hingga saat ini</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tradisi.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.gambar} 
                    alt={item.nama}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.nama}</h3>
                  <p className="text-gray-600">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kesenian Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kesenian Tradisional</h2>
            <p className="text-lg text-gray-600">Seni dan budaya yang menjadi identitas desa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kesenian.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🎭</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nama}</h3>
                    <p className="text-gray-600">{item.deskripsi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofi Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Filosofi Tri Hita Karana</h2>
            <p className="text-lg text-gray-600">Tiga penyebab kebahagiaan dalam kehidupan masyarakat Bali</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-4">Parahyangan</h3>
              <p className="text-gray-600">
                Hubungan harmonis antara manusia dengan Tuhan Yang Maha Esa melalui upacara keagamaan dan spiritual
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-4">Pawongan</h3>
              <p className="text-gray-600">
                Hubungan harmonis antar sesama manusia dalam kehidupan bermasyarakat yang saling menghormati
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-4">Palemahan</h3>
              <p className="text-gray-600">
                Hubungan harmonis antara manusia dengan alam lingkungan untuk menjaga kelestarian bumi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kalender Budaya Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kalender Budaya</h2>
            <p className="text-lg text-gray-600">Jadwal upacara dan perayaan sepanjang tahun</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700 mb-2">Maret</div>
                <div className="text-sm text-gray-700">Hari Raya Nyepi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700 mb-2">Juni</div>
                <div className="text-sm text-gray-700">Pesta Panen Raya</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700 mb-2">September</div>
                <div className="text-sm text-gray-700">Festival Budaya</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700 mb-2">Desember</div>
                <div className="text-sm text-gray-700">Upacara Odalan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}