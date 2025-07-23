import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[#204357]">Desa Tianyar</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {language === 'id'
                ? 'Desa Tianyar adalah sebuah desa yang terletak di Kabupaten Karangasem, Bali. Desa ini memiliki kekayaan budaya, tradisi, dan potensi wisata yang luar biasa.'
                : 'Tianyar Village is a village located in Karangasem Regency, Bali. This village has extraordinary cultural wealth, traditions, and tourism potential.'
              }
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'id' ? 'Navigasi' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">{t.nav.home}</Link></li>
              <li><Link href="/wisata" className="text-gray-300 hover:text-white transition-colors text-sm">{t.nav.tourism}</Link></li>
              <li><Link href="/umkm" className="text-gray-300 hover:text-white transition-colors text-sm">{t.nav.umkm}</Link></li>
              <li><Link href="/penginapan" className="text-gray-300 hover:text-white transition-colors text-sm">{t.nav.accommodation}</Link></li>
              <li><Link href="/galeri" className="text-gray-300 hover:text-white transition-colors text-sm">{t.nav.gallery}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'id' ? 'Kontak' : 'Contact'}
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📍 Desa Tianyar, Karangasem, Bali</p>
              <p>📞 +62 815-5874-0655 </p>
              <p>✉️ kkntianyar@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="text-sm">
            &copy; 2025 Desa Tianyar. {language === 'id'
              ? 'Semua hak cipta dilindungi.'
              : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}