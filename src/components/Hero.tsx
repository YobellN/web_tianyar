import Link from "next/link";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white min-h-screen">
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-[#204357]/70 z-0"></div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t.hero.welcome}
            <motion.span 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block text-amber-300 mt-2"
            >
              {t.hero.village}
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={"https://maps.app.goo.gl/btxcEquRA1ghxYfe7"} className="block bg-white text-[#204357] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                {t.hero.exploreVillage}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/wisata" className="block bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200">
                {t.hero.seeTourism}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}