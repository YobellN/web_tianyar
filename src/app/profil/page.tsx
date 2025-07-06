'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Desa Tianyar</h1>
          <p className="text-xl opacity-90">Mengenal Lebih Dekat Desa Tianyar, Karangasem, Bali</p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Desa</h2>
              <p className="text-gray-600 mb-4">
                Desa Tianyar memiliki sejarah panjang yang dimulai dari abad ke-15. Nama "Tianyar" berasal dari bahasa Bali kuno yang berarti "air jernih", merujuk pada sumber mata air alami yang melimpah di desa ini.
              </p>
              <p className="text-gray-600 mb-4">
                Desa ini didirikan oleh para leluhur yang berasal dari Kerajaan Karangasem dan telah berkembang menjadi komunitas yang harmonis dengan mempertahankan nilai-nilai tradisional Bali.
              </p>
              <p className="text-gray-600">
                Hingga saat ini, Desa Tianyar tetap menjaga kelestarian budaya dan tradisi leluhur sambil beradaptasi dengan perkembangan zaman modern.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Sejarah Desa Tianyar"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geografis Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kondisi Geografis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-3">Lokasi</h3>
              <p className="text-gray-600">
                Terletak di Kabupaten Karangasem, Provinsi Bali, dengan koordinat 8°20'S 115°35'E
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📏</div>
              <h3 className="text-xl font-semibold mb-3">Luas Wilayah</h3>
              <p className="text-gray-600">
                Total luas wilayah 15,5 km² dengan ketinggian 200-800 meter di atas permukaan laut
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold mb-3">Iklim</h3>
              <p className="text-gray-600">
                Iklim tropis dengan suhu rata-rata 24-28°C dan curah hujan 1.500-2.000 mm/tahun
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demografis Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Demografis</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Komposisi Penduduk</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Total Penduduk</span>
                  <span className="text-green-700 font-bold">2.500 jiwa</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Laki-laki</span>
                  <span className="text-blue-700 font-bold">1.280 jiwa</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Perempuan</span>
                  <span className="text-pink-700 font-bold">1.220 jiwa</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Kepala Keluarga</span>
                  <span className="text-purple-700 font-bold">450 KK</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Mata Pencaharian</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Petani</span>
                  <span className="text-green-700 font-bold">45%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Pedagang/UMKM</span>
                  <span className="text-blue-700 font-bold">25%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Pariwisata</span>
                  <span className="text-yellow-700 font-bold">20%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Lainnya</span>
                  <span className="text-gray-700 font-bold">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Visi Desa</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Mewujudkan Desa Tianyar sebagai desa wisata yang mandiri, sejahtera, dan berkelanjutan dengan tetap melestarikan budaya dan tradisi Bali yang autentik."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Misi Desa</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  Mengembangkan potensi wisata alam dan budaya
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  Memberdayakan masyarakat melalui UMKM
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  Melestarikan budaya dan tradisi leluhur
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  Meningkatkan kualitas infrastruktur desa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}