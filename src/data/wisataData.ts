export interface WisataItem {
  id: string;
  nama: string;
  deskripsi: string;
  deskripsiLengkap: string;
  gambar: string;
  kategori: string;
  lokasi: string;
  jamBuka: string;
  tiketMasuk: string;
  fasilitas: string[];
  tips: string[];
}

export const wisataData: WisataItem[] = [
  {
    id: "pantai-candi-gora",
    nama: "Pantai Candi Gora",
    deskripsi:
      "Pantai dengan pasir hitam vulkanik berdekatan dengan Pura Candi Gora",
    deskripsiLengkap:
      "Pantai Candi Gora merupakan salah satu destinasi wisata alam yang terletak di Desa Tianyar, Kubu, Karangasem. Dikenal dengan hamparan pasir hitam vulkaniknya yang khas, pantai ini berada di dekat Pura Candi Gora, sebuah pura yang menjadi tempat ibadah masyarakat sekitar. Suasana pantai yang tenang dan masih alami menjadikannya tempat ideal untuk melepas penat, meditasi ringan, atau sekadar menikmati pemandangan laut. Pengunjung dapat menikmati suasana yang sejuk di pagi hari sambil berjalan santai di sepanjang bibir pantai. Tersedia beberapa warung lokal serta tempat duduk sederhana yang membuat pengalaman berkunjung semakin nyaman. Pantai ini cocok untuk keluarga, wisatawan lokal, maupun pengunjung yang mencari ketenangan dan suasana khas pesisir Bali Timur.",
    gambar: "/wisata/pantai_candi_gora.JPG",
    kategori: "Pantai",
    lokasi: "https://maps.app.goo.gl/p8VEhdfotrBQURB27",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis",
    fasilitas: ["Parkir", "Warung lokal", "Tempat duduk"],
    tips: [
      "Bawa topi atau payung karena area cukup terbuka",
      "Datang pagi hari untuk cuaca sejuk",
      "Cocok untuk healing dan jalan santai",
    ],
  },
  {
    id: "savana-tianyar",
    nama: "Savana Tianyar",
    deskripsi: "Padang savana luas dengan pemandangan ke Laut Bali",
    deskripsiLengkap:
      "Savana Tianyar adalah padang rumput luas yang terletak di kaki Gunung Agung, cocok untuk camping, bersepeda motor trail, atau sekadar menikmati pemandangan alam terbuka. Tempat ini populer di kalangan fotografer dan pencinta alam karena pemandangan sunrise dan sunset-nya yang memukau.",
    gambar: "/wisata/savana_tianyar.JPG",
    kategori: "Alam",
    lokasi: "https://maps.app.goo.gl/T3CuvZtxRfMXjwxx6",
    jamBuka: "24 jam",
    tiketMasuk: "Rp. 20.000 / Rp. 10.000 (domestik)",
    fasilitas: ["Area camping", "Tempat parkir terbuka"],
    tips: [
      "Gunakan kendaraan yang kuat untuk menuju lokasi",
      "Bawa jaket karena angin cukup kencang",
      "Jaga kebersihan dan jangan membuang sampah sembarangan",
    ],
  },
  {
    id: "kampung-inggris-tianyar",
    nama: "Kampung Inggris Tianyar",
    deskripsi: "Tempat belajar bahasa Inggris dan pengembangan pemuda",
    deskripsiLengkap:
      "Kampung Inggris Tianyar adalah pusat belajar informal yang digagas oleh pemuda desa untuk meningkatkan kemampuan bahasa Inggris warga lokal. Program ini terbuka untuk semua usia dan sering dikunjungi oleh relawan asing. Suasananya santai, edukatif, dan mendorong kepercayaan diri dalam berbicara.",
    gambar: "/wisata/kampung_inggris.JPG",
    kategori: "Edukasi",
    lokasi: "https://maps.app.goo.gl/iX57ueuwwUM7uDsu5",
    jamBuka: "Senin - Sabtu, 09:00 - 18:00 WITA",
    tiketMasuk: "Gratis (donasi opsional)",
    fasilitas: ["Ruang kelas terbuka", "Pustaka mini", "Wi-Fi terbatas"],
    tips: [
      "Datang dengan niat belajar dan terbuka berkomunikasi",
      "Cocok untuk relawan atau pelajar lokal",
      "Tanyakan jadwal kelas melalui sosial media mereka",
    ],
  },
  {
    id: "konservasi-terumbu-karang",
    nama: "North Bali Reef Conservation",
    deskripsi: "Program konservasi terumbu karang di pesisir Tianyar",
    deskripsiLengkap:
      "North Bali Reef Conservation adalah proyek lingkungan yang berbasis di Desa Tianyar. Program ini melibatkan relawan dari seluruh dunia untuk membangun struktur terumbu buatan dan mengedukasi masyarakat lokal tentang pentingnya menjaga ekosistem laut. Pengunjung bisa belajar langsung tentang konservasi dan melihat aktivitas penyelaman.",
    gambar: "/wisata/north_bali_reef_conservation.JPG",
    kategori: "Alam",
    lokasi: "https://maps.app.goo.gl/jhXLDTVsd5qzbZbY9",
    jamBuka: "09:00 - 17:00 WITA",
    tiketMasuk: "Gratis (Donasi disarankan)",
    fasilitas: ["Pusat informasi", "Relawan lokal", "Alat selam"],
    tips: [
      "Hubungi pengelola terlebih dahulu jika ingin tur edukasi",
      "Gunakan alas kaki anti selip jika menyusuri pantai berbatu",
      "Ikut serta dalam kegiatan relawan jika memungkinkan",
    ],
  },
  // {
  //   id: "pura-segara-tianyar",
  //   nama: "Pura Segara Tianyar",
  //   deskripsi: "Pura laut di pesisir Tianyar dengan nuansa spiritual",
  //   deskripsiLengkap:
  //     "Pura Segara Tianyar adalah tempat ibadah umat Hindu yang terletak di pinggir pantai Tianyar. Selain digunakan untuk upacara Melasti, pura ini juga memiliki pemandangan laut yang indah, menjadikannya tempat spiritual dan wisata religi yang menarik.",
  //   gambar:
  //     "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   kategori: "Spiritual",
  //   lokasi: "Pesisir Desa Tianyar, Kubu, Karangasem",
  //   jamBuka: "06:00 - 18:00 WITA",
  //   tiketMasuk: "Gratis",
  //   fasilitas: ["Parkir", "Tempat duduk", "Toilet"],
  //   tips: [
  //     "Kenakan pakaian adat atau pakaian sopan",
  //     "Waktu terbaik: pagi atau sore",
  //     "Jangan ganggu umat yang bersembahyang",
  //   ],
  // },
  // {
  //   id: "embung-tianyar",
  //   nama: "Embung Tianyar",
  //   deskripsi: "Waduk buatan untuk irigasi, cocok untuk wisata edukasi",
  //   deskripsiLengkap:
  //     "Embung Tianyar merupakan waduk kecil yang berfungsi sebagai cadangan air untuk irigasi sawah dan kebun warga. Tempat ini juga sering digunakan untuk edukasi pertanian, kegiatan Pramuka, dan rekreasi keluarga pada sore hari.",
  //   gambar:
  //     "https://images.pexels.com/photos/666839/pexels-photo-666839.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   kategori: "Edukasi",
  //   lokasi: "Desa Tianyar Barat, Karangasem",
  //   jamBuka: "08:00 - 17:00 WITA",
  //   tiketMasuk: "Gratis",
  //   fasilitas: ["Area duduk", "Papan edukasi", "Parkir"],
  //   tips: [
  //     "Bawa topi/sunblock jika siang hari",
  //     "Cocok untuk kegiatan edukatif anak-anak",
  //     "Bisa dijadikan tempat observasi burung lokal",
  //   ],
  // },
];
