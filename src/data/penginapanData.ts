export interface PenginapanItem {
  id: string;
  nama: string;
  deskripsi: string;
  gambar: string;
  alamat: string;
}

export const penginapanData: PenginapanItem[] = [
  {
    id: "beach_villa_pantai_matanai",
    nama: "Beach Villa Pantai Matanai",
    deskripsi:
      "Villa tepi pantai dengan kolam renang pribadi, pemandangan laut langsung, balkon, dan 3 kamar tidur. Skor tamu 'Superb' (9.0) dengan fasilitas Wi‑Fi gratis, BBQ, dan free parking.",
    gambar: "/penginapan/penginapan_1.jpg",
    alamat: "https://maps.app.goo.gl/8GDxVbB1SudTLUfi8",
  },
  {
    id: "senang_resort_bali",
    nama: "Senang Resort Bali",
    deskripsi:
      "Resort bintang 4 di Jl Taman Cantik, Banjar Tirta Sari, Desa Tianyar Barat. Fasilitas termasuk restoran, fitness centre, Wi‑Fi gratis, dan parkir.",
    gambar: "/penginapan/penginapan_2.jpg",
    alamat: "https://maps.app.goo.gl/Abh8nrP92Fr33dN68",
  },
  {
    id: "tianyar_village_inn",
    nama: "Tianyar Village Inn",
    deskripsi:
      "Guesthouse sederhana dengan sarapan, antar‑jemput bandara, dan parkir gratis. Mendapat rating tinggi dari tamu Tripadvisor.",
    gambar: "/penginapan/penginapan_3.jpg",
    alamat: "https://maps.app.goo.gl/UrD7wDQuRwshuhjD8",
  },
  {
    id: "bali_umah_tinjung",
    nama: "Bali Umah Tinjung",
    deskripsi:
      "Penginapan budget populer di kawasan Tianyar yang terkenal memberikan sarapan dan lokasi nyaman.",
    gambar: "/penginapan/penginapan_4.jpg",
    alamat: "https://maps.app.goo.gl/JhqeEVNo7jjECxgi6",
  },
  {
    id: "kubu_indah_dive_spa",
    nama: "Kubu Indah Dive & Spa Resort",
    deskripsi:
      "Resort dive & spa di Desa Kubu dekat Tianyar, menawarkan paket diving, spa, dan fasilitas resor lengkap.",
    gambar: "/penginapan/penginapan_5.jpg",
    alamat: "https://maps.app.goo.gl/GtWW3WVR1xW67ozA6",
  },
];
