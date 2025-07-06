'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WisataPage() {
  const destinasi = [
    {
      nama: "Air Terjun Sekumpul",
      deskripsi: "Air terjun spektakuler dengan ketinggian 80 meter yang dikelilingi hutan tropis",
      gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      kategori: "Alam",
      rating: 4.8
    },
    {
      nama: "Pura Lempuyang",
      deskripsi: "Pura kuno dengan pemandangan Gunung Agung yang menakjubkan",
      gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      kategori: "Budaya",
      rating: 4.9
    },
    {
      nama: "Pantai Virgin",
      deskripsi: "Pantai tersembunyi dengan pasir putih dan air laut yang jernih",
      gambar: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      kategori: "Pantai",
      rating: 4.7
    },
    {
      nama: "Desa Wisata Tenganan",
      deskripsi: "Desa tradisional Bali Aga dengan budaya dan arsitektur unik",
      gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      kategori: "Budaya",
      rating: 4.6
    },
    {
      nama: "Taman Ujung",
      deskripsi: "Istana air dengan arsitektur yang memadukan gaya Bali dan Eropa",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      kategori: "Sejarah",
      rating: 4.5
    },
    {
      nama: "Bukit Asah",
      deskripsi: "Spot sunrise terbaik dengan pemandangan laut dan pulau-pulau kecil",
      gambar: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      kategori: "Alam",
      rating: 4.4
    }
  ];

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
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Destinasi Wisata</h1>
          <p className="text-xl opacity-90">Jelajahi Keindahan Alam dan Budaya Desa Tianyar</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Semua
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Alam
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Budaya
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Pantai
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Sejarah
            </button>
          </div>
        </div>
      </section>

      {/* Destinasi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Destinasi Populer</h2>
            <p className="text-lg text-gray-600">Tempat-tempat menakjubkan yang wajib dikunjungi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinasi.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.gambar} 
                    alt={item.nama}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.kategori}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium ml-1">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.nama}</h3>
                  <p className="text-gray-600 mb-4">{item.deskripsi}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktivitas Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aktivitas Wisata</h2>
            <p className="text-lg text-gray-600">Berbagai kegiatan menarik yang bisa dilakukan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aktivitas.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.nama}</h3>
                <p className="text-gray-600">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tips Berwisata</h2>
            <p className="text-lg text-gray-600">Panduan untuk pengalaman wisata yang optimal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Waktu Terbaik Berkunjung</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• April - Oktober: Musim kemarau, cuaca cerah</li>
                <li>• Pagi hari (06:00-10:00): Suhu sejuk, cahaya bagus</li>
                <li>• Hindari musim hujan (November-Maret)</li>
                <li>• Weekday lebih sepi dibanding weekend</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Yang Perlu Dibawa</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kamera untuk mengabadikan momen</li>
                <li>• Sunscreen dan topi pelindung</li>
                <li>• Sepatu yang nyaman untuk trekking</li>
                <li>• Air minum dan snack secukupnya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Menjelajahi Desa Tianyar?</h2>
          <p className="text-xl mb-8 opacity-90">Hubungi guide lokal kami untuk pengalaman wisata yang tak terlupakan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Hubungi Guide
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Download Peta
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}