import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function VideoProfile() {
  return (
    <section className="py-16 bg-white min-h-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <AnimatedSection direction="left">
            <div className="video-container shadow-xl rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Profile Desa Tianyar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Content Section */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="mb-6">
              <span className="bg-[#204357] text-white px-4 py-2 rounded-full text-sm font-medium">
                Video Profile
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Desa Tianyar
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed">
                Desa Tianyar terletak di Kecamatan Kubu, Kabupaten Karangasem.
                Desa ini punya pantai, bukit, dan pemandangan laut yang bagus untuk wisata.
              </p>

              <p className="leading-relaxed">
                Luas desa 847 hektar dengan 3.247 penduduk yang terbagi dalam 4 banjar.
                Warga bekerja sebagai petani, nelayan, dan punya usaha kecil.
              </p>

              <p className="leading-relaxed">
                Desa terus mengembangkan wisata dan usaha lokal untuk kesejahteraan warga
                sambil menjaga alam dan budaya setempat.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-[#204357] mb-1">847</div>
                <div className="text-sm text-gray-600">Hektar Luas Wilayah</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-[#204357] mb-1">4</div>
                <div className="text-sm text-gray-600">Banjar</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-[#204357] mb-1">14865</div>
                <div className="text-sm text-gray-600">Penduduk</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-[#204357] mb-1">3775</div>
                <div className="text-sm text-gray-600">Keluarga</div>
              </motion.div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#204357] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3a4a] transition-colors duration-200"
            >
              Selengkapnya
            </motion.button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}