export default function InfoCards() {
  const cards = [
    {
      title: "Profil Desa",
      description: "Informasi lengkap tentang sejarah, geografis, dan demografis Desa Tianyar",
      icon: "🏛️",
      link: "/profil",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Destinasi Wisata",
      description: "Tempat-tempat indah dan menarik yang wajib dikunjungi",
      icon: "🏞️",
      link: "/wisata",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      title: "UMKM Lokal",
      description: "Produk dan layanan dari usaha mikro kecil menengah setempat",
      icon: "🏪",
      link: "/umkm",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Berita & Kegiatan",
      description: "Informasi terkini dan kegiatan yang sedang berlangsung di desa",
      icon: "📰",
      link: "/berita",
      gradient: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jelajahi Desa Tianyar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan berbagai informasi menarik tentang desa kami, mulai dari profil, wisata, hingga UMKM lokal yang berkembang pesat
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in-delay"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                  Pelajari Lebih Lanjut
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}