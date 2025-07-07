'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function BeritaPage() {
  const beritaUtama = {
    judul: "Festival Budaya Tianyar 2025 Sukses Digelar",
    excerpt: "Festival tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Bali berhasil menarik ribuan pengunjung dari berbagai daerah",
    tanggal: "20 Januari 2025",
    gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    kategori: "Budaya"
  };

  const beritaTerbaru = [
    {
      judul: "Pembangunan Infrastruktur Jalan Desa Tahap II Dimulai",
      excerpt: "Proyek lanjutan perbaikan jalan utama desa untuk meningkatkan aksesibilitas wisatawan dan masyarakat",
      tanggal: "18 Januari 2025",
      gambar: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      kategori: "Pembangunan"
    },
    {
      judul: "Pelatihan UMKM Digital Marketing Batch 3",
      excerpt: "Program pelatihan ketiga untuk meningkatkan kemampuan pemasaran digital pelaku UMKM lokal",
      tanggal: "15 Januari 2025",
      gambar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      kategori: "UMKM"
    },
    {
      judul: "Desa Tianyar Raih Penghargaan Desa Wisata Terbaik",
      excerpt: "Prestasi membanggakan atas upaya pengembangan pariwisata berkelanjutan dan pelestarian budaya",
      tanggal: "12 Januari 2025",
      gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      kategori: "Prestasi"
    },
    {
      judul: "Program Bantuan Bibit Tanaman untuk Petani",
      excerpt: "Distribusi bibit unggul untuk meningkatkan produktivitas pertanian dan ketahanan pangan desa",
      tanggal: "10 Januari 2025",
      gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      kategori: "Pertanian"
    },
    {
      judul: "Upacara Melasti Jelang Hari Raya Nyepi",
      excerpt: "Persiapan upacara penyucian tradisional yang akan digelar di pantai sebagai rangkaian Hari Raya Nyepi",
      tanggal: "8 Januari 2025",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      kategori: "Budaya"
    },
    {
      judul: "Kerjasama dengan Universitas untuk Penelitian Lingkungan",
      excerpt: "Kolaborasi penelitian tentang konservasi alam dan pengembangan ekowisata berkelanjutan",
      tanggal: "5 Januari 2025",
      gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      kategori: "Lingkungan"
    }
  ];

  const kategoriBerita = ["Semua", "Budaya", "Pembangunan", "UMKM", "Prestasi", "Pertanian", "Lingkungan"];

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
            <p className="text-lg text-gray-600">Ikuti perkembangan dan kegiatan terbaru di Desa Tianyar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaTerbaru.map((berita, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
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
                    Baca Selengkapnya
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
              Muat Berita Lainnya
            </button>
          </div>
        </div>
      </section>

      {/* Pengumuman */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pengumuman Penting</h2>
            <p className="text-lg text-gray-600">Informasi penting untuk masyarakat desa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-500 animate-slide-up">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📢</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jadwal Pelayanan Administrasi</h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Kantor desa buka setiap hari Senin-Jumat pukul 08:00-15:00 WITA.
                    Untuk pelayanan khusus dapat menghubungi nomor yang tersedia.
                  </p>
                  <span className="text-sm text-amber-700 font-medium">Berlaku mulai 1 Februari 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500 animate-slide-up">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🌱</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Penghijauan Desa</h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Ajakan kepada seluruh masyarakat untuk berpartisipasi dalam program penanaman 1000 pohon
                    di area desa dan sekitar sumber mata air.
                  </p>
                  <span className="text-sm text-green-700 font-medium">Pendaftaran dibuka hingga 28 Februari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-[#204357] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Berlangganan Newsletter</h2>
          <p className="text-xl mb-8 opacity-90">Dapatkan berita dan informasi terbaru langsung di email Anda</p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#204357] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Berlangganan
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              Kami menghormati privasi Anda. Berhenti berlangganan kapan saja.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}