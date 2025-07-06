export default function InfoCards() {
  const cards = [
    {
      title: "Profil Desa",
      description: "Informasi lengkap tentang sejarah, geografis, dan demografis Desa Tianyar",
      icon: "🏛️",
      link: "/profil"
    },
    {
      title: "Budaya & Tradisi",
      description: "Kekayaan budaya dan tradisi yang masih terjaga hingga saat ini",
      icon: "🎭",
      link: "/budaya"
    },
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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jelajahi Desa Tianyar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai informasi menarik tentang desa kami, mulai dari profil, budaya, wisata, hingga UMKM lokal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {card.description}
              </p>
              <div className="flex items-center text-green-700 font-medium group-hover:text-green-800">
                Pelajari Lebih Lanjut
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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