import { statistikData } from '@/data/statistikData';

export default function Statistics() {
  const stats = [
    { number: statistikData.penduduk, label: "Penduduk", icon: "👥" },
    { number: statistikData.keluarga, label: "Keluarga", icon: "🏠" },
    { number: statistikData.destinasiWisata, label: "Tempat Wisata", icon: "🏞️" },
    { number: statistikData.umkmAktif, label: "UMKM Aktif", icon: "🏪" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data Desa Tianyar</h2>
          <p className="text-lg text-gray-600">
            Informasi terbaru tentang desa
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-slide-up">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-[#204357] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}