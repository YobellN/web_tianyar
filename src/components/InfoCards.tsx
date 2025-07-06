export default function InfoCards() {
  const cards = [
    {
      title: "Destinasi Wisata",
      description: "Tempat-tempat indah dan menarik yang wajib dikunjungi",
      icon: "🏞️",
      link: "/wisata"
    },
    {
      title: "UMKM Lokal",
      description: "Produk dan layanan dari usaha mikro kecil menengah setempat",
      icon: "🏪",
      link: "/umkm"
    },
    {
      title: "Berita & Kegiatan",
      description: "Informasi terkini dan kegiatan yang sedang berlangsung di desa",
      icon: "📰",
      link: "/berita"
    },
    {
      title: "Budaya & Tradisi",
      description: "Kekayaan budaya dan tradisi yang masih terjaga hingga saat ini",
      icon: "🎭",
      link: "#budaya"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jelajahi Desa Tianyar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai informasi menarik tentang desa kami
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 group cursor-pointer animate-slide-up"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#204357] transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="flex items-center text-[#204357] font-medium text-sm">
                Pelajari Lebih Lanjut
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}