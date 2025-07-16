export interface WisataItem {
  id: string;
  nama: string;
  deskripsi: string;
  deskripsiLengkap: string;
  gambar: string;
  kategori: string;
  rating: number;
  lokasi: string;
  jamBuka: string;
  tiketMasuk: string;
  fasilitas: string[];
  tips: string[];
}

export const wisataData: WisataItem[] = [
  {
    id: "pantai-tianyar",
    nama: "Pantai Tianyar",
    deskripsi: "Pantai dengan pasir hitam vulkanik dan pemandangan Gunung Agung",
    deskripsiLengkap:
      "Pantai Tianyar adalah destinasi wisata alam di pesisir utara Bali yang memiliki pasir hitam vulkanik, suasana tenang, dan pemandangan Gunung Agung yang megah. Pantai ini juga menjadi habitat konservasi terumbu karang dan tempat warga lokal beraktivitas seperti memancing dan mencari kerang.",
    gambar:
      "/wisata/pantai_tianyar.JPG",
    kategori: "Pantai",
    rating: 4.4,
    lokasi: "Desa Tianyar, Kubu, Karangasem",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis",
    fasilitas: ["Parkir", "Warung lokal", "Tempat duduk"],
    tips: [
      "Bawa topi atau payung karena area cukup terbuka",
      "Datang pagi hari untuk cuaca sejuk",
      "Cocok untuk healing dan jalan santai"
    ]
  },
  {
    id: "savana-tianyar",
    nama: "Savana Tianyar",
    deskripsi: "Padang savana luas dengan pemandangan ke Laut Bali",
    deskripsiLengkap:
      "Savana Tianyar adalah padang rumput luas yang terletak di kaki Gunung Agung, cocok untuk camping, bersepeda motor trail, atau sekadar menikmati pemandangan alam terbuka. Tempat ini populer di kalangan fotografer dan pencinta alam karena pemandangan sunrise dan sunset-nya yang memukau.",
    gambar:
      "/wisata/savana_tianyar.JPG",
    kategori: "Alam",
    rating: 4.6,
    lokasi: "Perbukitan Desa Tianyar, Kubu, Karangasem",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis / Donasi sukarela",
    fasilitas: ["Area camping", "Tempat parkir terbuka"],
    tips: [
      "Gunakan kendaraan yang kuat untuk menuju lokasi",
      "Bawa jaket karena angin cukup kencang",
      "Jaga kebersihan dan jangan membuang sampah sembarangan"
    ]
  },
    {
    id: "kampung-inggris-tianyar",
    nama: "Kampung Inggris Tianyar",
    deskripsi: "Tempat belajar bahasa Inggris dan pengembangan pemuda",
    deskripsiLengkap:
      "Kampung Inggris Tianyar adalah pusat belajar informal yang digagas oleh pemuda desa untuk meningkatkan kemampuan bahasa Inggris warga lokal. Program ini terbuka untuk semua usia dan sering dikunjungi oleh relawan asing. Suasananya santai, edukatif, dan mendorong kepercayaan diri dalam berbicara.",
    gambar: "/wisata/kampung_inggris.JPG",
    kategori: "Edukasi",
    rating: 4.9,
    lokasi: "Tianyar Timur, Karangasem",
    jamBuka: "Senin - Sabtu, 09:00 - 18:00 WITA",
    tiketMasuk: "Gratis (donasi opsional)",
    fasilitas: ["Ruang kelas terbuka", "Pustaka mini", "Wi-Fi terbatas"],
    tips: [
      "Datang dengan niat belajar dan terbuka berkomunikasi",
      "Cocok untuk relawan atau pelajar lokal",
      "Tanyakan jadwal kelas melalui sosial media mereka"
    ]
  },
  {
    id: "konservasi-terumbu-karang",
    nama: "North Bali Reef Conservation",
    deskripsi: "Program konservasi terumbu karang di pesisir Tianyar",
    deskripsiLengkap:
      "North Bali Reef Conservation adalah proyek lingkungan yang berbasis di Desa Tianyar. Program ini melibatkan relawan dari seluruh dunia untuk membangun struktur terumbu buatan dan mengedukasi masyarakat lokal tentang pentingnya menjaga ekosistem laut. Pengunjung bisa belajar langsung tentang konservasi dan melihat aktivitas penyelaman.",
    gambar:
      "/wisata/north_bali_reef_conservation.JPG",
    kategori: "Edukasi",
    rating: 4.8,
    lokasi: "Pantai Desa Tianyar, Kubu, Karangasem",
    jamBuka: "09:00 - 17:00 WITA",
    tiketMasuk: "Gratis (Donasi disarankan)",
    fasilitas: ["Pusat informasi", "Relawan lokal", "Alat selam"],
    tips: [
      "Hubungi pengelola terlebih dahulu jika ingin tur edukasi",
      "Gunakan alas kaki anti selip jika menyusuri pantai berbatu",
      "Ikut serta dalam kegiatan relawan jika memungkinkan"
    ]
  },
  {
    id: "pura-segara-tianyar",
    nama: "Pura Segara Tianyar",
    deskripsi: "Pura laut di pesisir Tianyar dengan nuansa spiritual",
    deskripsiLengkap:
      "Pura Segara Tianyar adalah tempat ibadah umat Hindu yang terletak di pinggir pantai Tianyar. Selain digunakan untuk upacara Melasti, pura ini juga memiliki pemandangan laut yang indah, menjadikannya tempat spiritual dan wisata religi yang menarik.",
    gambar: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Spiritual",
    rating: 4.3,
    lokasi: "Pesisir Desa Tianyar, Kubu, Karangasem",
    jamBuka: "06:00 - 18:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: ["Parkir", "Tempat duduk", "Toilet"],
    tips: [
      "Kenakan pakaian adat atau pakaian sopan",
      "Waktu terbaik: pagi atau sore",
      "Jangan ganggu umat yang bersembahyang"
    ]
  },
  {
    id: "embung-tianyar",
    nama: "Embung Tianyar",
    deskripsi: "Waduk buatan untuk irigasi, cocok untuk wisata edukasi",
    deskripsiLengkap:
      "Embung Tianyar merupakan waduk kecil yang berfungsi sebagai cadangan air untuk irigasi sawah dan kebun warga. Tempat ini juga sering digunakan untuk edukasi pertanian, kegiatan Pramuka, dan rekreasi keluarga pada sore hari.",
    gambar: "https://images.pexels.com/photos/666839/pexels-photo-666839.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Edukasi",
    rating: 4.2,
    lokasi: "Desa Tianyar Barat, Karangasem",
    jamBuka: "08:00 - 17:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: ["Area duduk", "Papan edukasi", "Parkir"],
    tips: [
      "Bawa topi/sunblock jika siang hari",
      "Cocok untuk kegiatan edukatif anak-anak",
      "Bisa dijadikan tempat observasi burung lokal"
    ]
  },
  {
    id: "bukit-batu-kursi-tianyar",
    nama: "Bukit Batu Kursi Tianyar",
    deskripsi: "Bukit dengan jalur trekking ringan dan pemandangan laut",
    deskripsiLengkap:
      "Bukit Batu Kursi menawarkan pengalaman mendaki ringan dengan jalur alami di atas perbukitan Tianyar. Dari puncaknya, pengunjung dapat melihat laut Bali, Gunung Agung, serta padang savana yang luas. Cocok untuk pecinta alam dan olahraga ringan.",
    gambar: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Alam",
    rating: 4.5,
    lokasi: "Tianyar Tengah, Karangasem",
    jamBuka: "05:00 - 18:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: ["Area parkir seadanya", "Batu duduk alami"],
    tips: [
      "Datang pagi hari agar tidak terlalu panas",
      "Gunakan sepatu trekking/sandal gunung",
      "Bawa air minum sendiri"
    ]
  },
  {
    id: "pusat-budaya-tianyar",
    nama: "Pusat Budaya Desa Tianyar",
    deskripsi: "Pusat pelestarian budaya lokal dan kerajinan tradisional",
    deskripsiLengkap:
      "Pusat Budaya Desa Tianyar adalah tempat pengembangan budaya dan seni tradisional seperti tari Bali, gamelan, dan kerajinan tangan. Di sini, pengunjung bisa belajar membuat anyaman, melihat pertunjukan tari, dan membeli produk lokal langsung dari warga.",
    gambar: "https://images.pexels.com/photos/4473493/pexels-photo-4473493.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Budaya",
    rating: 4.4,
    lokasi: "Tianyar Tengah, Karangasem",
    jamBuka: "08:00 - 17:00 WITA",
    tiketMasuk: "Gratis / Donasi sukarela",
    fasilitas: ["Pendopo budaya", "Pemandu lokal", "Toko kerajinan"],
    tips: [
      "Tanyakan jadwal pertunjukan kepada pengelola",
      "Beli langsung dari pengrajin untuk dukung ekonomi lokal",
      "Hormati proses pelatihan atau upacara adat"
    ]
  },
  {
    id: "spot-sunrise-seraya",
    nama: "Spot Sunrise Seraya Barat",
    deskripsi: "Spot puncak pegunungan untuk melihat matahari terbit",
    deskripsiLengkap:
      "Terletak di ketinggian barat daya Tianyar, spot ini menawarkan panorama menakjubkan saat matahari terbit, dengan latar Gunung Agung dan laut Bali. Jalur menuju lokasi cukup menantang, namun sebanding dengan keindahan alamnya.",
    gambar: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Alam",
    rating: 4.7,
    lokasi: "Seraya Barat, perbatasan Tianyar",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis",
    fasilitas: ["Tempat parkir alami", "Area tenda seadanya"],
    tips: [
      "Datang sebelum jam 5 pagi untuk sunrise",
      "Gunakan kendaraan off-road",
      "Bawa senter jika datang subuh"
    ]
  }
];
