import Image from "next/image";
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsSection() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.services.subtitle}
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.services.items.map((item: any, index: number) => (
            <AnimatedCard key={index} delay={index * 0.03} className="bg-amber-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
              <div className="text-sm text-[#204357] font-medium">
                {item.schedule}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}