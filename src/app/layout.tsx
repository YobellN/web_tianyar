import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desa Tianyar - Digitalisasi Desa Wisata Bali",
  description: "Website resmi Desa Tianyar, Karangasem, Bali. Jelajahi keindahan alam, budaya tradisional, wisata, dan UMKM lokal yang autentik.",
  keywords: "Desa Tianyar, Karangasem, Bali, wisata, budaya, UMKM, tradisi, digitalisasi desa",
  authors: [{ name: "Desa Tianyar" }],
  openGraph: {
    title: "Desa Tianyar - Digitalisasi Desa Wisata Bali",
    description: "Jelajahi keindahan alam, budaya tradisional, wisata, dan UMKM lokal Desa Tianyar, Karangasem, Bali",
    type: "website",
    locale: "id_ID",
  },
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