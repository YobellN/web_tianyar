export default function HistorySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sejarah Desa Tianyar
          </h2>
          <p className="text-lg text-gray-600">
            Jejak Sejarah dan Warisan Budaya yang Terpelihara
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sejarah Utama */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-[#204357] mb-6">Asal-Usul Desa</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desa Tianyar merupakan salah satu desa tua yang terletak di ujung barat Kabupaten Karangasem, Bali. 
                Secara geografis, desa ini berbatasan langsung dengan Kabupaten Buleleng. Sebelum adanya pemekaran wilayah, 
                Desa Tianyar masih menjadi satu kesatuan administratif yang dikenal dengan nama Desa Tianyar.
              </p>

              <div className="bg-gradient-to-r from-[#204357]/10 to-blue-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-[#204357] mb-4">Asal-Usul Nama "Tianyar"</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Menurut penuturan para sesepuh atau pengelingsir desa, pada zaman dahulu kala — disebut juga 
                  <em> duk tan hana paran-paran</em> (belum ada peradaban) — datanglah seorang Maha Rsi sakti bernama 
                  <strong> Pedanda Sakti Bau Rauh</strong> (atau Wau Rauh). Beliau adalah seorang suci utusan dari 
                  Kerajaan Majapahit yang datang untuk melaksanakan tapa brata atau yoga samadhi.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Saat itu, Desa Tianyar mengalami kekeringan ekstrem dan kesulitan air. Maka, Maha Rsi Bau Rauh 
                  memohon kepada Ida Sanghyang Widhi Wasa (Tuhan Yang Maha Esa) agar dianugerahkan air suci yang bisa 
                  digunakan untuk melasti para dewa setelah upacara piodalan.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-amber-700 mb-3">Telaga Ngembeng atau Toya Anyar</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Toya</strong> = Air, <strong>Anyar</strong> = Baru/Suci
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Seiring waktu, nama "Toya Anyar" mengalami pelesapan bunyi dan berubah menjadi "Tianyar", 
                  nama yang dikenal hingga sekarang. Telaga tersebut kini telah tertutup pasir akibat letusan 
                  Gunung Agung tahun 1963, namun bekasnya masih ada di wilayah Banjar Dinas Taman Sari, Desa Tianyar Barat.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Pemerintahan */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-[#204357] mb-6">Sejarah Pemerintahan</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Era Perbekelan (1931-1942)</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#204357] pl-4">
                    <h5 className="font-medium text-gray-800">Perbekelan Tianyar Kelodan</h5>
                    <p className="text-sm text-gray-600">Perbekel: Jro Ketut Gunung</p>
                    <p className="text-sm text-gray-500">Banjar: Bila Kelodan, Bila Kaleran, Getas, Paleg, Munti Gunung</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-gray-800">Perbekelan Tianyar Kaleran</h5>
                    <p className="text-sm text-gray-600">Perbekel: Jro Mangku Rai</p>
                    <p className="text-sm text-gray-500">Banjar: Duran Pasar, Pedahan Kaja, Pedahan Kelod, Penginyahan, Culik, Pande</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Daftar Perbekel/Kepala Desa</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">I Made Cepug</span>
                    <span className="text-gray-500">s.d. 1972</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">I Ketut Mangun Seraya</span>
                    <span className="text-gray-500">1972–1982</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">I Gede Tantra (Pjs)</span>
                    <span className="text-gray-500">1982–1983</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">I Wayan Dora</span>
                    <span className="text-gray-500">1983–1985</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">I Ketut Alit</span>
                    <span className="text-gray-500">1985–1995</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Drs. I Made Sukarata</span>
                    <span className="text-gray-500">1995–2008</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">I Gede Suadi, SH</span>
                    <span className="text-gray-500">2008–2014</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Drs. I Ketut Wija</span>
                    <span className="text-gray-500">2016–sekarang</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-700 mb-3">Pemekaran Desa (1982)</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-800">Desa Tianyar (Induk)</h5>
                    <p className="text-gray-600">Dharma Winangun, Eka Adnyana, Tunas Sari, Paleg</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">Desa Tianyar Tengah</h5>
                    <p className="text-gray-600">Munti Desa, Penginyahan, Pedahan Kaja, Pedahan Kelod</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">Desa Tianyar Barat</h5>
                    <p className="text-gray-600">Kerta Buana, Taman Sari, Munti Gunung, Tegal Sari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}