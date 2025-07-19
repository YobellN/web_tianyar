export default function ProfileSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profil Wilayah Desa Tianyar
          </h2>
          <p className="text-lg text-gray-600">
            Pintu Gerbang Barat Kabupaten Karangasem
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profil Utama */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#204357] mb-6">Luas Wilayah dan Letak Geografis</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Desa Tianyar merupakan salah satu dari 68 desa dan 4 kelurahan yang ada di wilayah Kabupaten Karangasem, 
                Provinsi Bali. Desa ini memiliki peran strategis sebagai pintu gerbang paling barat Kabupaten Karangasem, 
                sekaligus sebagai wilayah yang kaya akan potensi alam, budaya, dan sejarah.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#204357]">20.349,70</div>
                  <div className="text-sm text-gray-600">Hektar Luas Wilayah</div>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  Membentang dari arah selatan ke utara dengan berbagai karakteristik topografi, 
                  mulai dari perbukitan hingga kawasan pesisir.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#204357] mb-3">Batas Wilayah Desa Tianyar:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-blue-600 font-semibold mb-1">Utara</div>
                    <div className="text-sm text-gray-600">Laut Jawa</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-green-600 font-semibold mb-1">Selatan</div>
                    <div className="text-sm text-gray-600">Desa Ban & Kab. Bangli</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-amber-600 font-semibold mb-1">Timur</div>
                    <div className="text-sm text-gray-600">Desa Sukadana</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-red-600 font-semibold mb-1">Barat</div>
                    <div className="text-sm text-gray-600">Desa Tianyar Tengah</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Letak geografis ini menjadikan Desa Tianyar sebagai kawasan dengan potensi kelautan dan perikanan 
                  di sisi utara serta potensi pertanian dan pariwisata di wilayah selatan.
                </p>
              </div>
            </div>
          </div>

          {/* Pembagian Wilayah */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              {/* Wilayah Administratif */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold text-[#204357] mb-6">Pembagian Wilayah Administratif</h3>
                <p className="text-gray-600 mb-6">
                  Secara administratif, Desa Tianyar terbagi ke dalam 4 (empat) Banjar Dinas:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800">Banjar Dinas Dharma Winangun</span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800">Banjar Dinas Eka Adnyana</span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800">Banjar Dinas Tunas Sari</span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800">Banjar Dinas Paleg</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                  Masing-masing Banjar Dinas memiliki karakteristik dan potensi tersendiri, baik dari segi sosial, 
                  ekonomi, maupun budaya. Pembagian ini memudahkan pemerintahan desa dalam mengelola pelayanan publik 
                  serta melaksanakan pembangunan secara merata.
                </p>
              </div>

              {/* Wilayah Adat */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-700 mb-6">Pembagian Wilayah Adat</h3>
                <p className="text-gray-700 mb-6">
                  Selain secara administratif, Desa Tianyar juga dibagi berdasarkan struktur adat ke dalam 
                  3 (tiga) Desa Pakraman:
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="font-medium text-gray-800">Desa Pakraman Tianyar</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="font-medium text-gray-800">Desa Pakraman Paleg Kaja</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="font-medium text-gray-800">Desa Pakraman Paleg Kelod</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Desa Pakraman (Desa Adat) berperan penting dalam menjaga kearifan lokal, tata upacara adat, 
                    dan pelestarian budaya Bali yang telah diwariskan secara turun-temurun. Fungsi adat ini bersinergi 
                    dengan pemerintahan desa dalam menjaga keharmonisan dan ketertiban masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}