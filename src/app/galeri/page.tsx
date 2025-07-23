'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import JsonLd from '@/components/JsonLd';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "pantai-tianyar-1",
    title: "Pantai Tianyar",
    titleEn: "Tianyar Beach",
    image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Pantai",
    categoryEn: "Beach",
    description: "Pantai dengan pasir hitam vulkanik yang eksotis",
    descriptionEn: "Exotic beach with volcanic black sand"
  },
  {
    id: "savana-tianyar-1",
    title: "Savana Tianyar",
    titleEn: "Tianyar Savanna",
    image: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Alam",
    categoryEn: "Nature",
    description: "Padang savana luas dengan pemandangan menakjubkan",
    descriptionEn: "Vast savanna with stunning views"
  },
  {
    id: "budaya-tianyar-1",
    title: "Upacara Adat",
    titleEn: "Traditional Ceremony",
    image: "https://images.pexels.com/photos/4473493/pexels-photo-4473493.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Budaya",
    categoryEn: "Culture",
    description: "Upacara adat tradisional Bali di Pura Tianyar",
    descriptionEn: "Traditional Balinese ceremony at Tianyar Temple"
  },
  {
    id: "nelayan-tianyar-1",
    title: "Aktivitas Nelayan",
    titleEn: "Fishermen Activities",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Kehidupan",
    categoryEn: "Life",
    description: "Kehidupan sehari-hari nelayan di pesisir Tianyar",
    descriptionEn: "Daily life of fishermen on Tianyar coast"
  },
  {
    id: "sunrise-tianyar-1",
    title: "Sunrise di Tianyar",
    titleEn: "Sunrise in Tianyar",
    image: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Alam",
    categoryEn: "Nature",
    description: "Matahari terbit yang memukau di perbukitan Tianyar",
    descriptionEn: "Stunning sunrise in Tianyar hills"
  },
  {
    id: "kuliner-tianyar-1",
    title: "Kuliner Tradisional",
    titleEn: "Traditional Cuisine",
    image: "https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Kuliner",
    categoryEn: "Culinary",
    description: "Sate lilit ikan khas Desa Tianyar",
    descriptionEn: "Traditional fish sate lilit from Tianyar Village"
  },
  {
    id: "pemandangan-tianyar-1",
    title: "Pemandangan Desa",
    titleEn: "Village View",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Alam",
    categoryEn: "Nature",
    description: "Pemandangan indah Desa Tianyar dari ketinggian",
    descriptionEn: "Beautiful view of Tianyar Village from above"
  },
  {
    id: "konservasi-tianyar-1",
    title: "Konservasi Laut",
    titleEn: "Marine Conservation",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Lingkungan",
    categoryEn: "Environment",
    description: "Program konservasi terumbu karang di pesisir Tianyar",
    descriptionEn: "Coral reef conservation program on Tianyar coast"
  }
];

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

  const [filterKategori, setFilterKategori] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const kategoriList = language === 'id' 
    ? ['Semua', 'Alam', 'Budaya', 'Pantai', 'Kehidupan', 'UMKM', 'Kuliner', 'Lingkungan']
    : ['All', 'Nature', 'Culture', 'Beach', 'Life', 'Local Business', 'Culinary', 'Environment'];
  
  const galleryFiltered = filterKategori === 'Semua' || filterKategori === 'All'
    ? galleryData 
    : galleryData.filter(item => 
        language === 'id' ? item.category === filterKategori : item.categoryEn === filterKategori
      );

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

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {kategoriList.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setFilterKategori(kategori)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filterKategori === kategori
                    ? 'bg-[#204357] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryFiltered.map((item, index) => (
              <AnimatedCard
                key={index} 
                delay={index * 0.04}
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
                    <p className="text-sm opacity-90">
                      {language === 'id' ? item.category : item.categoryEn}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
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
              <div className="relative aspect-video bg-white rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={language === 'id' ? selectedImage.title : selectedImage.titleEn}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'id' ? selectedImage.title : selectedImage.titleEn}
                </h3>
                <p className="text-gray-300">
                  {language === 'id' ? selectedImage.description : selectedImage.descriptionEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}