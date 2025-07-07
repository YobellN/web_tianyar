'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function UMKMPage() {
  const umkmData = [
    {
      nama: "Warung Sate Lilit Bu Made",
      kategori: "Kuliner",
      deskripsi: "Sate lilit ikan dengan bumbu tradisional Bali yang autentik",
      gambar: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      kontak: "+62 812-3456-7890",
      rating: 4.8
    },
    {
      nama: "Kerajinan Anyaman Pak Wayan",
      kategori: "Kerajinan",
      deskripsi: "Tas, topi, dan dekorasi dari anyaman bambu dan pandan",
      gambar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      kontak: "+62 813-4567-8901",
      rating: 4.7
    },
    {
      nama: "Toko Kain Endek Ibu Ketut",
      kategori: "Fashion",
      deskripsi: "Kain endek dan pakaian tradisional Bali berkualitas tinggi",
      gambar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      kontak: "+62 814-5678-9012",
      rating: 4.9
    },
    {
      nama: "Kopi Robusta Tianyar",
      kategori: "Minuman",
      deskripsi: "Kopi robusta premium dari kebun sendiri dengan cita rasa khas",
      gambar: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      kontak: "+62 815-6789-0123",
      rating: 4.6
    },
    {
      nama: "Homestay Desa Asri",
      kategori: "Akomodasi",
      deskripsi: "Penginapan dengan suasana desa yang nyaman dan ramah",
      gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      kontak: "+62 816-7890-1234",
      rating: 4.5
    },
    {
      nama: "Jamu Tradisional Ni Luh",
      kategori: "Kesehatan",
      deskripsi: "Jamu dan obat herbal tradisional untuk kesehatan keluarga",
      gambar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      kontak: "+62 817-8901-2345",
      rating: 4.4
    }
  ];

  // const kategoriUMKM = [
  //   { nama: "Kuliner", jumlah: 25, icon: "🍽️" },
  //   { nama: "Kerajinan", jumlah: 20, icon: "🎨" },
  //   { nama: "Fashion", jumlah: 15, icon: "👗" },
  //   { nama: "Akomodasi", jumlah: 10, icon: "🏠" },
  //   { nama: "Kesehatan", jumlah: 8, icon: "🌿" },
  //   { nama: "Lainnya", jumlah: 12, icon: "🛍️" }
  // ];

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
            <button className="bg-[#204357] text-white px-6 py-2 rounded-full hover:bg-[#1a3a4a] transition-colors">
              Semua
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Kuliner
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Kerajinan
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Fashion
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors border">
              Akomodasi
            </button>
          </div>
        </div>
      </section>

      {/* Daftar UMKM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Direktori UMKM</h2>
            <p className="text-lg text-gray-600">Temukan produk dan layanan terbaik dari masyarakat lokal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmData.map((umkm, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={umkm.gambar}
                    alt={umkm.nama}
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">📞 {umkm.kontak}</span>
                    <button className="bg-[#204357] text-white px-4 py-2 rounded-lg hover:bg-[#1a3a4a] transition-colors text-sm">
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
      <section className="py-16 bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#204357] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabung dengan Komunitas UMKM</h2>
          <p className="text-xl mb-8 opacity-90">Daftarkan usaha Anda dan dapatkan dukungan untuk berkembang</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#204357] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Daftar UMKM
            </button>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}