import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Desa Tianyar - Digitalisasi Desa Wisata Bali",
    template: "%s | Desa Tianyar"
  },
  description: "Website resmi Desa Tianyar, Karangasem, Bali. Jelajahi keindahan alam, budaya tradisional, wisata pantai, savana, dan UMKM lokal yang autentik. Destinasi wisata tersembunyi di Bali Timur.",
  keywords: [
    "Desa Tianyar",
    "Karangasem Bali", 
    "wisata Bali timur",
    "pantai Tianyar",
    "savana Tianyar",
    "UMKM Bali",
    "budaya Bali",
    "digitalisasi desa",
    "konservasi terumbu karang",
    "kampung inggris Bali",
    "wisata edukasi Bali",
    "homestay Bali",
    "kuliner tradisional Bali"
  ],
  authors: [{ name: "Desa Tianyar" }],
  creator: "Desa Tianyar",
  publisher: "Pemerintah Desa Tianyar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://desatianyar.id',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    title: "Desa Tianyar - Digitalisasi Desa Wisata Bali",
    description: "Jelajahi keindahan alam, budaya tradisional, wisata pantai, savana, dan UMKM lokal Desa Tianyar, Karangasem, Bali",
    type: "website",
    url: 'https://desatianyar.id',
    siteName: 'Desa Tianyar',
    locale: "id_ID",
    images: [
      {
        url: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Pemandangan Desa Tianyar, Karangasem, Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desa Tianyar - Digitalisasi Desa Wisata Bali',
    description: 'Jelajahi keindahan alam, budaya tradisional, wisata, dan UMKM lokal Desa Tianyar, Karangasem, Bali',
    images: ['https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'],
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}