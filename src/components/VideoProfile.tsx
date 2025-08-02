import AnimatedSection from './AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VideoProfile() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-white min-h-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <AnimatedSection>
            <div className="video-container shadow-xl rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/bJfUpcEj3Tc?si=JxWeg44nsA73pFOh"
                title="Video Profile Desa Tianyar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Content Section */}
          <AnimatedSection delay={0.1}>
            <div className="mb-6">
              <span className="bg-[#204357] text-white px-4 py-2 rounded-full text-sm font-medium">
                {language === 'id' ? 'Video Profile' : 'Village Profile'}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.videoProfile.title}
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed">
                {t.videoProfile.description1}
              </p>

              <p className="leading-relaxed">
                {t.videoProfile.description2}
              </p>

              <p className="leading-relaxed">
                {t.videoProfile.description3}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">847</div>
                <div className="text-sm text-gray-600">{t.videoProfile.stats.area}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">4</div>
                <div className="text-sm text-gray-600">{t.videoProfile.stats.banjars}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">14865</div>
                <div className="text-sm text-gray-600">{t.videoProfile.stats.population}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#204357] mb-1">3775</div>
                <div className="text-sm text-gray-600">{t.videoProfile.stats.families}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}