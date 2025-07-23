import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProfileSection() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.profile.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.profile.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Profil Utama */}
          <AnimatedCard delay={0.02}>
            <div className="bg-gradient-to-br from-[#204357]/10 to-blue-100 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#204357] mb-6">{t.profile.geography.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t.profile.geography.description}
              </p>
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-[#204357] mb-6 text-center">Peta Desa Tianyar</h3>
                <div className="w-full aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63181.88474249753!2d115.44755515629734!3d-8.216047854879521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1fa10fc6d3ea3%3A0x5030bfbca8316c0!2sTianyar%2C%20Kubu%2C%20Karangasem%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1753261072289!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-md"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#204357]">20,349.70</div>
                  <div className="text-sm text-gray-600">{t.profile.geography.areaUnit}</div>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  {t.profile.geography.areaDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#204357] mb-3">{t.profile.geography.bordersTitle}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-blue-600 font-semibold mb-1">{t.profile.geography.borders.north.direction}</div>
                    <div className="text-sm text-gray-600">{t.profile.geography.borders.north.area}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-green-600 font-semibold mb-1">{t.profile.geography.borders.south.direction}</div>
                    <div className="text-sm text-gray-600">{t.profile.geography.borders.south.area}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-amber-600 font-semibold mb-1">{t.profile.geography.borders.east.direction}</div>
                    <div className="text-sm text-gray-600">{t.profile.geography.borders.east.area}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-red-600 font-semibold mb-1">{t.profile.geography.borders.west.direction}</div>
                    <div className="text-sm text-gray-600">{t.profile.geography.borders.west.area}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t.profile.geography.potential}
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Pembagian Wilayah */}
          <AnimatedCard delay={0.05}>
            <div className="space-y-6 h-full flex flex-col">
              {/* Wilayah Administratif */}
              <div className="bg-white rounded-xl shadow-sm p-8 flex-1">
                <h3 className="text-2xl font-bold text-[#204357] mb-6">{t.profile.administrative.title}</h3>
                <p className="text-gray-600 mb-6">
                  {t.profile.administrative.description}
                </p>

                <div className="space-y-3">
                  {t.profile.administrative.banjars.map((banjar: string, index: number) => {
                    const colors = ['blue', 'green', 'amber', 'red'];
                    const color = colors[index];
                    return (
                      <div key={index} className={`flex items-center p-3 bg-gradient-to-r from-${color}-50 to-${color}-100 rounded-lg`}>
                        <div className={`w-3 h-3 bg-${color}-600 rounded-full mr-3`}></div>
                        <span className="font-medium text-gray-800">{banjar}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                  {t.profile.administrative.note}
                </p>
              </div>

              {/* Wilayah Adat */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-amber-700 mb-6">{t.profile.traditional.title}</h3>
                <p className="text-gray-700 mb-6">
                  {t.profile.traditional.description}
                </p>

                <div className="space-y-3 mb-6">
                  {t.profile.traditional.pakramans.map((pakraman: string, index: number) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="font-medium text-gray-800">{pakraman}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.profile.traditional.note}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}