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
                Desa Tianyar terletak di Kabupaten Karangasem, Bali Timur, sekitar 77 km dari 
                Denpasar dengan waktu tempuh sekitar 2,5 jam. Desa ini dikenal dengan suasana 
                pedesaan yang asri dan masyarakat yang ramah.
              </p>
              
              <p className="leading-relaxed">
                Dengan luas wilayah 1.698 hektar dan jumlah penduduk sekitar 2.500 jiwa, 
                Desa Tianyar memiliki potensi wisata alam yang luar biasa, mulai dari pantai, 
                air terjun, hingga perbukitan yang menawan.
              </p>
              
              <p className="leading-relaxed">
                Masyarakat desa masih menjaga tradisi dan budaya Bali yang autentik, 
                menjadikan Tianyar sebagai destinasi wisata budaya yang menarik untuk dikunjungi.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">1.698</div>
                <div className="text-sm text-gray-600">Hektar Luas Wilayah</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">2.500</div>
                <div className="text-sm text-gray-600">Jiwa Penduduk</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">77 KM</div>
                <div className="text-sm text-gray-600">Dari Denpasar</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">15+</div>
                <div className="text-sm text-gray-600">Destinasi Wisata</div>
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