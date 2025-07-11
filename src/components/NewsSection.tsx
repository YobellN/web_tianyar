import Image from "next/image";

export default function NewsSection() {
  const news = [
    {
      title: "Festival Budaya Tianyar 2025",
      excerpt: "Perayaan tahunan yang menampilkan berbagai pertunjukan seni dan budaya tradisional Bali",
      date: "15 Januari 2025",
      image: "/wisata/savana.png"
    },
    {
      title: "Pembangunan Infrastruktur Jalan Desa",
      excerpt: "Proyek perbaikan jalan utama desa untuk meningkatkan aksesibilitas wisatawan",
      date: "10 Januari 2025",
      image: "/wisata/savana.png"
    },
    {
      title: "Pelatihan UMKM Digital Marketing",
      excerpt: "Program pelatihan untuk meningkatkan kemampuan pemasaran digital pelaku UMKM",
      date: "5 Januari 2025",
      image: "/wisata/savana.png"
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berita & Kegiatan Terbaru
          </h2>
          <p className="text-lg text-gray-600">
            Ikuti perkembangan dan kegiatan terbaru di Desa Tianyar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden animate-slide-up">
              <div className="h-48 overflow-hidden">
                <Image
                  width={400}
                  height={250}
                  src={item.image}
                  alt="/savana.png"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#204357] font-medium mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-[#204357] transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{item.excerpt}</p>
                <button className="text-[#204357] font-medium hover:text-[#1a3a4a] flex items-center text-sm">
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-[#204357] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a3a4a] transition-colors duration-200">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  );
}