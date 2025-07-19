'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoProfile from '@/components/VideoProfile';
import HistorySection from '@/components/HistorySection';
import ProfileSection from '@/components/ProfileSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Desa Tianyar',
    description: 'Desa wisata di Karangasem, Bali dengan keindahan alam, budaya tradisional, dan UMKM lokal',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tianyar',
      addressRegion: 'Karangasem',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.21605,
      longitude: 115.48875
    },
    url: 'https://desatianyar.id',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
    touristType: ['Wisatawan domestik', 'Wisatawan mancanegara', 'Backpacker', 'Keluarga'],
    hasMap: 'https://maps.app.goo.gl/btxcEquRA1ghxYfe7'
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
      <Header />
      <Hero />
      <VideoProfile />
      <HistorySection />
      <ProfileSection />
      <NewsSection />
      <Footer />
    </div>
  );
}