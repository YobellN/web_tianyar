import Image from "next/image";
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

export default function NewsSection() {
  const layanan = [
    {
      title: "Pelayanan Administrasi",
      excerpt: "Layanan surat-menyurat dan administrasi kependudukan untuk warga",
      icon: "📋",
      waktu: "Senin - Jumat, 08:00 - 15:00 WITA"
    },
    {
      title: "Posyandu & Kesehatan",
      excerpt: "Pelayanan kesehatan dasar dan pemeriksaan rutin untuk ibu dan anak",
      icon: "🏥",
      waktu: "Setiap Rabu, 09:00 - 12:00 WITA"
    },
    {
      title: "Pemberdayaan UMKM",
      excerpt: "Program pelatihan dan bantuan modal untuk pengembangan usaha lokal",
      icon: "💼",
      waktu: "Setiap bulan"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Desa
          </h2>
          <p className="text-lg text-gray-600">
            Pelayanan yang tersedia untuk warga Desa Tianyar
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layanan.map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.08} className="bg-amber-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{item.excerpt}</p>
              <div className="text-sm text-[#204357] font-medium">
                {item.waktu}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}