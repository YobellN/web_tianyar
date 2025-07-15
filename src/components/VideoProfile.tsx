export default function VideoProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="animate-fade-in">
            <div className="video-container shadow-xl rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Profile Desa Tianyar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="bg-[#204357] text-white px-4 py-2 rounded-full text-sm font-medium">
                Video Profile
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mengenal Lebih Dekat Desa Tianyar
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed">
                Desa Tianyar terletak di Kecamatan Kubu, Kabupaten Karangasem, Bali Timur. 
                Desa ini memiliki potensi wisata alam yang indah dengan pantai, bukit, dan 
                pemandangan laut yang menawan.
              </p>
              
              <p className="leading-relaxed">
                Dengan luas wilayah 847 hektar dan penduduk 3.247 jiwa, desa ini terbagi 
                menjadi 5 banjar dinas. Masyarakat bermata pencaharian utama sebagai petani, 
                nelayan, dan pelaku UMKM.
              </p>
              
              <p className="leading-relaxed">
                Desa Tianyar terus mengembangkan potensi wisata dan ekonomi kreatif untuk 
                meningkatkan kesejahteraan masyarakat dengan tetap menjaga kelestarian alam 
                dan budaya lokal.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">847</div>
                <div className="text-sm text-gray-600">Hektar Luas Wilayah</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">3.247</div>
                <div className="text-sm text-gray-600">Jiwa Penduduk</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">5</div>
                <div className="text-sm text-gray-600">Banjar Dinas</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">156</div>
                <div className="text-sm text-gray-600">UMKM Aktif</div>
              </div>
            </div>

            <button className="bg-[#204357] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3a4a] transition-colors duration-200">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}