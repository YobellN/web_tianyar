import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white">
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-[#204357]/70"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t.hero.welcome}
            <span className="block text-amber-300 mt-2">{t.hero.village}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href={"https://maps.app.goo.gl/btxcEquRA1ghxYfe7"} className="bg-white text-[#204357] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              {t.hero.exploreVillage}
            </Link>
            <Link href="/wisata" className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200">
              {t.hero.seeTourism}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}