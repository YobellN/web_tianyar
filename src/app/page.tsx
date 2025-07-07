'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoProfile from '@/components/VideoProfile';
import InfoCards from '@/components/InfoCards';
import Statistics from '@/components/Statistics';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoProfile />
      <InfoCards />
      <Statistics />
      <NewsSection />
      <Footer />
    </div>
  );
}