export default function NewsSection() {
  const news = [
    {
      title: "Festival Budaya Tianyar 2025",
      excerpt: "Perayaan tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Bali",
      date: "15 Januari 2025",
      image: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Pembangunan Infrastruktur Jalan Desa",
      excerpt: "Proyek perbaikan jalan utama desa untuk meningkatkan aksesibilitas wisatawan",
      date: "10 Januari 2025",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Pelatihan UMKM Digital Marketing",
      excerpt: "Program pelatihan untuk meningkatkan kemampuan pemasaran digital pelaku UMKM",
      date: "5 Januari 2025",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berita & Kegiatan Terbaru
          </h2>
          <p className="text-lg text-gray-600">
            Ikuti perkembangan dan kegiatan terbaru di Desa Tianyar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-green-700 font-medium mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-green-700 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-green-700 font-medium hover:text-green-800 flex items-center">
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
          <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  );
}