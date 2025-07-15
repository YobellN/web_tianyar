'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function BeritaPage() {
  const beritaUtama = {
    judul: "Program Bantuan UMKM Desa Tianyar Dimulai",
    excerpt: "Program baru untuk membantu UMKM lokal jualan online dan meningkatkan penjualan",
    tanggal: "20 Januari 2025",
    gambar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Ekonomi"
  };

  const beritaTerbaru = [
    {
      judul: "Jalan ke Tempat Wisata Diperbaiki",
      excerpt: "Pemerintah desa perbaiki jalan supaya wisatawan lebih mudah ke tempat wisata",
      tanggal: "18 Januari 2025",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400",
      kategori: "Pembangunan"
    },
    {
      judul: "Pelatihan untuk Pemuda Desa",
      excerpt: "Program pelatihan digital dan wirausaha untuk anak muda Desa Tianyar",
      tanggal: "15 Januari 2025",
      gambar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      kategori: "Pendidikan"
    },
    {
      judul: "Acara Budaya Desa Tianyar 2025",
      excerpt: "Acara budaya tahunan dengan pertunjukan seni dan pameran produk UMKM",
      tanggal: "12 Januari 2025",
      gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400",
      kategori: "Budaya"
    },
    {
      judul: "Bantuan Bibit untuk Petani",
      excerpt: "Pemerintah desa kasih bantuan bibit bagus untuk petani lokal",
      tanggal: "10 Januari 2025",
      gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400",
      kategori: "Pertanian"
    },
    {
      judul: "Gotong Royong Bersih Pantai",
      excerpt: "Warga bergotong royong bersih-bersih pantai untuk jaga lingkungan",
      tanggal: "8 Januari 2025",
      gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400",
      kategori: "Lingkungan"
    },
    {
      judul: "Kelompok Sadar Wisata Dibentuk",
      excerpt: "Dibentuk kelompok sadar wisata untuk kembangkan wisata desa",
      tanggal: "5 Januari 2025",
      gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400",
      kategori: "Pariwisata"
    }
  ];

  const kategoriBerita = ["Semua", "Ekonomi", "Pembangunan", "Pendidikan", "Budaya", "Pertanian", "Lingkungan", "Pariwisata"];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white">
        <div
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Berita & Kegiatan
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              Informasi Terkini dari Desa Tianyar
            </p>
          </div>
        </div>
      </section>

      {/* Berita Utama */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              BERITA UTAMA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-up">
              <Image
                width={500}
                height={500}
                src={beritaUtama.gambar}
                alt={beritaUtama.judul}
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#204357] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {beritaUtama.kategori}
                </span>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="text-sm text-[#204357] font-medium mb-2">{beritaUtama.tanggal}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{beritaUtama.judul}</h2>
              <p className="text-lg text-gray-600 mb-6">{beritaUtama.excerpt}</p>
              <button className="bg-[#204357] text-white px-8 py-3 rounded-lg hover:bg-[#1a3a4a] transition-colors font-medium">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Kategori */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {kategoriBerita.map((kategori, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${index === 0
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

      {/* Berita Terbaru */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
            <p className="text-lg text-gray-600">Kegiatan terbaru di Desa Tianyar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaTerbaru.map((berita, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    layout='fill'
                    src={berita.gambar}
                    alt={berita.judul}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#204357] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {berita.kategori}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#204357] font-medium mb-2">{berita.tanggal}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[#204357] transition-colors cursor-pointer">
                    {berita.judul}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{berita.excerpt}</p>
                  <button className="text-[#204357] font-medium hover:text-[#1a3a4a] flex items-center text-sm">
                    Selengkapnya
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#204357] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3a4a] transition-colors">
              Lihat Lainnya
            </button>
          </div>
        </div>
      </section>

      {/* Pengumuman */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pengumuman</h2>
            <p className="text-lg text-gray-600">Informasi penting untuk warga desa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-500 animate-slide-up">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📢</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pelayanan Kantor Desa</h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Kantor desa buka Senin-Jumat jam 08:00-15:00 WITA. 
                    Melayani urusan surat-menyurat dan administrasi.
                  </p>
                  <span className="text-sm text-amber-700 font-medium">Info: (0363) 123456</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500 animate-slide-up">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🌱</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Penghijauan</h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Program tanam pohon di desa untuk jaga lingkungan dan cegah longsor.
                  </p>
                  <span className="text-sm text-green-700 font-medium">Setiap hari Minggu pagi</span>
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