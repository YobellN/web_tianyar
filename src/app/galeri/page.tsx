'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import JsonLd from '@/components/JsonLd';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, GalleryItem } from '@/data/galeriData';

export default function GaleriPage() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'id' ? 'Galeri | Desa Tianyar' : 'Gallery | Tianyar Village';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        language === 'id' 
          ? 'Galeri foto Desa Tianyar menampilkan keindahan alam, budaya, dan kehidupan masyarakat lokal.'
          : 'Photo gallery of Tianyar Village showcasing natural beauty, culture, and local community life.'
      );
    }
  }, [language]);

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: language === 'id' ? 'Galeri Desa Tianyar' : 'Tianyar Village Gallery',
    description: language === 'id' 
      ? 'Koleksi foto yang menampilkan keindahan alam, budaya, dan kehidupan di Desa Tianyar'
      : 'Photo collection showcasing natural beauty, culture, and life in Tianyar Village',
    url: 'https://desatianyar.id/galeri',
    image: galleryData.map(item => item.image)
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#204357] to-blue-800 text-white">
        <div
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#204357]/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {language === 'id' ? 'Galeri Desa Tianyar' : 'Tianyar Village Gallery'}
            </h1>
            <p className="text-xl opacity-90 animate-slide-up">
              {language === 'id' 
                ? 'Jelajahi Keindahan Melalui Lensa Kamera'
                : 'Explore Beauty Through Camera Lens'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item, index) => (
              <div
                key={index} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={language === 'id' ? item.title : item.titleEn}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">
                      {language === 'id' ? item.title : item.titleEn}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
                <div className="relative w-[90vw] max-w-2xl h-[60vw] max-h-[70vh] bg-white rounded-lg overflow-hidden mx-auto">
                <Image
                  src={selectedImage.image}
                  alt={language === 'id' ? selectedImage.title : selectedImage.titleEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 700px"
                />
                </div>
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'id' ? selectedImage.title : selectedImage.titleEn}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}