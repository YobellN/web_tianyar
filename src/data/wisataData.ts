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
    deskripsi: "Pantai dengan pasir hitam vulkanik dan pemandangan laut yang indah",
    deskripsiLengkap: "Pantai Tianyar adalah pantai dengan karakteristik pasir hitam vulkanik yang khas Bali Timur. Pantai ini menawarkan pemandangan laut lepas yang luas dengan ombak yang cukup tenang. Cocok untuk bersantai, menikmati sunset, dan aktivitas memancing. Pantai ini masih alami dan belum terlalu ramai pengunjung.",
    gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Pantai",
    rating: 4.3,
    lokasi: "Desa Tianyar, Kubu, Karangasem",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis",
    fasilitas: ["Parkir", "Warung lokal", "Toilet umum"],
    tips: [
      "Datang sore hari untuk menikmati sunset",
      "Bawa alas kaki yang kuat karena pasir vulkanik",
      "Hati-hati dengan ombak saat berenang"
    ]
  },
  {
    id: "bukit-asah",
    nama: "Bukit Asah",
    deskripsi: "Spot terbaik untuk melihat sunrise dengan pemandangan laut dan pulau",
    deskripsiLengkap: "Bukit Asah terletak di sebelah timur Desa Tianyar dan merupakan spot favorit untuk menyaksikan matahari terbit. Dari atas bukit, pengunjung dapat melihat pemandangan laut lepas, Pulau Nusa Penida di kejauhan, dan aktivitas nelayan di pagi hari. Tempat ini juga populer untuk camping dan fotografi.",
    gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Alam",
    rating: 4.5,
    lokasi: "Bukit Asah, Desa Tianyar",
    jamBuka: "24 jam",
    tiketMasuk: "Rp 5.000/orang",
    fasilitas: ["Area parkir", "Spot camping", "Warung kopi"],
    tips: [
      "Datang jam 5 pagi untuk sunrise terbaik",
      "Bawa jaket karena udara dingin di pagi hari",
      "Berhati-hati saat berkendara di malam hari"
    ]
  },
  {
    id: "pura-goa-lawah",
    nama: "Pura Goa Lawah",
    deskripsi: "Pura suci dengan goa yang dihuni ribuan kelelawar",
    deskripsiLengkap: "Pura Goa Lawah adalah salah satu pura penting di Bali yang terletak tidak jauh dari Desa Tianyar. Pura ini terkenal karena memiliki goa yang dihuni oleh ribuan kelelawar. Tempat ini memiliki nilai spiritual tinggi bagi umat Hindu dan menawarkan arsitektur pura yang indah dengan latar belakang laut.",
    gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Budaya",
    rating: 4.6,
    lokasi: "Pesinggahan, Klungkung (dekat Tianyar)",
    jamBuka: "06:00 - 18:00 WITA",
    tiketMasuk: "Rp 15.000/orang",
    fasilitas: ["Parkir", "Toilet", "Warung", "Pemandu lokal"],
    tips: [
      "Kenakan pakaian sopan dan sarung",
      "Hormati aturan dan tradisi setempat",
      "Jangan gunakan flash saat foto di area goa"
    ]
  },
  {
    id: "taman-ujung",
    nama: "Taman Ujung",
    deskripsi: "Bekas istana air dengan arsitektur yang memadukan gaya Bali dan Eropa",
    deskripsiLengkap: "Taman Ujung atau Taman Sukasada adalah bekas istana air yang dibangun oleh Raja Karangasem pada tahun 1909. Taman ini memiliki arsitektur unik yang memadukan gaya Bali, Jawa, dan Eropa. Terdapat kolam-kolam besar, jembatan, dan bangunan yang sangat fotogenik dengan latar belakang pemandangan laut.",
    gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Sejarah",
    rating: 4.7,
    lokasi: "Tumbu, Karangasem (15 menit dari Tianyar)",
    jamBuka: "08:00 - 18:00 WITA",
    tiketMasuk: "Rp 20.000/orang",
    fasilitas: ["Parkir luas", "Toilet", "Warung", "Area foto"],
    tips: [
      "Datang pagi atau sore untuk foto terbaik",
      "Jelajahi semua area taman",
      "Bawa kamera untuk spot foto menarik"
    ]
  },
  {
    id: "pantai-virgin",
    nama: "Pantai Virgin (Perasi)",
    deskripsi: "Pantai tersembunyi dengan pasir putih dan air jernih",
    deskripsiLengkap: "Pantai Virgin atau Pantai Perasi adalah pantai tersembunyi yang masih alami dengan pasir putih bersih dan air laut jernih. Pantai ini cocok untuk berenang, snorkeling, dan bersantai. Lokasinya yang agak tersembunyi membuat pantai ini tidak terlalu ramai dan masih mempertahankan keindahan alamnya.",
    gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Pantai",
    rating: 4.4,
    lokasi: "Perasi, Karangasem (20 menit dari Tianyar)",
    jamBuka: "24 jam",
    tiketMasuk: "Rp 10.000/orang",
    fasilitas: ["Parkir", "Warung sederhana", "Penyewaan alat snorkeling"],
    tips: [
      "Bawa perlengkapan snorkeling sendiri",
      "Datang pagi untuk air yang lebih jernih",
      "Jaga kebersihan pantai"
    ]
  },
  {
    id: "desa-tenganan",
    nama: "Desa Tenganan",
    deskripsi: "Desa tradisional Bali Aga dengan budaya yang masih asli",
    deskripsiLengkap: "Desa Tenganan adalah salah satu desa Bali Aga (Bali asli) yang masih mempertahankan tradisi leluhur. Desa ini terkenal dengan kain tenun gringsing yang hanya diproduksi di sini. Pengunjung dapat melihat kehidupan masyarakat tradisional, arsitektur rumah adat, dan proses pembuatan kerajinan lokal.",
    gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Budaya",
    rating: 4.2,
    lokasi: "Tenganan, Manggis, Karangasem",
    jamBuka: "08:00 - 17:00 WITA",
    tiketMasuk: "Rp 10.000/orang",
    fasilitas: ["Parkir", "Toilet", "Toko kerajinan"],
    tips: [
      "Hormati adat dan tradisi setempat",
      "Jangan sembarangan mengambil foto",
      "Beli kerajinan langsung dari pengrajin"
    ]
  }
];