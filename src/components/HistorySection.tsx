import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HistorySection() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.history.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.history.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Sejarah Utama */}
          <AnimatedCard delay={0.1}>
            <div className="bg-white rounded-xl shadow-sm p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#204357] mb-6">{t.history.origin.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {t.history.origin.description}
              </p>

              <div className="bg-gradient-to-r from-[#204357]/10 to-blue-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-[#204357] mb-4">{t.history.nameOrigin.title}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t.history.nameOrigin.story1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t.history.nameOrigin.story2}
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-amber-700 mb-3">{t.history.lake.title}</h4>
                <p className="text-gray-700 text-sm mb-2">
                  {t.history.lake.meaning}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t.history.lake.evolution}
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Timeline Pemerintahan */}
          <AnimatedCard delay={0.2}>
            <div className="bg-white rounded-xl shadow-sm p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#204357] mb-6">{t.history.government.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{t.history.government.eraTitle}</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#204357] pl-4">
                    <h5 className="font-medium text-gray-800">{t.history.government.kelodan.title}</h5>
                    <p className="text-sm text-gray-600">{t.history.government.kelodan.leader}</p>
                    <p className="text-sm text-gray-500">{t.history.government.kelodan.areas}</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-gray-800">{t.history.government.kaleran.title}</h5>
                    <p className="text-sm text-gray-600">{t.history.government.kaleran.leader}</p>
                    <p className="text-sm text-gray-500">{t.history.government.kaleran.areas}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{t.history.government.leadersTitle}</h4>
                <div className="space-y-2 text-sm">
                  {t.history.government.leaders.map(
                    (leader: { name: string; period: string }, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-700">{leader.name}</span>
                        <span className="text-gray-500">{leader.period}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                {t.history.government.expansion.villages.map(
                  (village: { name: string; areas: string }, index: number) => (
                    <div key={index}>
                      <h5 className="font-medium text-gray-800">{village.name}</h5>
                      <p className="text-gray-600">{village.areas}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}