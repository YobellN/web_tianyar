'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoCards from '@/components/InfoCards';
import CultureSection from '@/components/CultureSection';
import Statistics from '@/components/Statistics';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfoCards />
      <CultureSection />
      <Statistics />
      <NewsSection />
      <Footer />
    </div>
  );
}