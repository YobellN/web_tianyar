export default function CultureSection() {
  const tradisi = [
    {
      nama: "Upacara Melasti",
      deskripsi: "Upacara penyucian yang dilakukan menjelang Hari Raya Nyepi",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      nama: "Tari Kecak",
      deskripsi: "Pertunjukan tari tradisional yang menceritakan kisah Ramayana",
      gambar: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      nama: "Pesta Panen",
      deskripsi: "Perayaan syukur atas hasil panen yang melimpah",
      gambar: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const filosofi = [
    {
      nama: "Parahyangan",
      deskripsi: "Hubungan harmonis dengan Tuhan Yang Maha Esa",
      icon: "🙏"
    },
    {
      nama: "Pawongan", 
      deskripsi: "Hubungan harmonis antar sesama manusia",
      icon: "👥"
    },
    {
      nama: "Palemahan",
      deskripsi: "Hubungan harmonis dengan alam lingkungan",
      icon: "🌿"
    }
  ];

  return (
    <section id="budaya" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Budaya & Tradisi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Melestarikan warisan leluhur yang menjadi identitas Desa Tianyar
          </p>
        </div>

        {/* Tradisi Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Tradisi Desa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradisi.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.gambar} 
                    alt={item.nama}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.nama}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filosofi Tri Hita Karana */}
        <div className="bg-[#204357] rounded-2xl p-8 text-white animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Filosofi Tri Hita Karana</h3>
            <p className="text-blue-100">
              Tiga penyebab kebahagiaan dalam kehidupan masyarakat Bali
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filosofi.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.nama}</h4>
                <p className="text-blue-100 text-sm">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}