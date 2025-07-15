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
    id: "air-terjun-sekumpul",
    nama: "Air Terjun Sekumpul",
    deskripsi: "Air terjun tertinggi di Bali dengan ketinggian 80 meter, dikelilingi hutan tropis yang asri",
    deskripsiLengkap: "Air Terjun Sekumpul merupakan salah satu air terjun terindah di Bali yang terletak di Desa Sekumpul, Kecamatan Sawan, Kabupaten Buleleng. Air terjun ini memiliki ketinggian sekitar 80 meter dan terdiri dari beberapa tingkatan. Untuk mencapai air terjun ini, pengunjung harus berjalan kaki sekitar 20-30 menit melalui jalan setapak yang menantang namun dikelilingi pemandangan alam yang indah.",
    gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Alam",
    rating: 4.8,
    lokasi: "Desa Sekumpul, Sawan, Buleleng",
    jamBuka: "06:00 - 18:00 WITA",
    tiketMasuk: "Rp 20.000/orang",
    fasilitas: ["Parkir", "Warung", "Toilet", "Gazebo"],
    tips: [
      "Gunakan sepatu yang tidak licin",
      "Bawa air minum yang cukup",
      "Datang pagi hari untuk cahaya terbaik",
      "Hati-hati saat turun ke air terjun"
    ]
  },
  {
    id: "pura-lempuyang",
    nama: "Pura Lempuyang Luhur",
    deskripsi: "Pura tertua di Bali dengan pemandangan Gunung Agung yang spektakuler",
    deskripsiLengkap: "Pura Lempuyang Luhur adalah salah satu pura tertua dan tersuci di Bali yang terletak di lereng Gunung Lempuyang. Pura ini terkenal dengan 'Gates of Heaven' yang menawarkan pemandangan Gunung Agung yang menakjubkan. Untuk mencapai pura utama, pengunjung harus menaiki sekitar 1.700 anak tangga melalui 7 pura yang berbeda.",
    gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Budaya",
    rating: 4.9,
    lokasi: "Desa Tri Buana, Abang, Karangasem",
    jamBuka: "06:00 - 19:00 WITA",
    tiketMasuk: "Rp 30.000/orang",
    fasilitas: ["Parkir", "Toilet", "Warung", "Area Istirahat"],
    tips: [
      "Datang pagi untuk menghindari keramaian",
      "Kenakan pakaian sopan dan sarung",
      "Siapkan stamina untuk mendaki",
      "Bawa kamera untuk foto Gates of Heaven"
    ]
  },
  {
    id: "pantai-virgin",
    nama: "Pantai Virgin Karangasem",
    deskripsi: "Pantai tersembunyi dengan pasir putih dan air laut jernih yang masih alami",
    deskripsiLengkap: "Pantai Virgin atau Pantai Perasi adalah pantai tersembunyi yang terletak di Desa Perasi, Karangasem. Pantai ini masih sangat alami dengan pasir putih yang bersih dan air laut yang jernih berwarna biru kehijauan. Pantai ini cocok untuk berenang, snorkeling, dan menikmati sunset yang indah.",
    gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Pantai",
    rating: 4.7,
    lokasi: "Desa Perasi, Karangasem",
    jamBuka: "24 jam",
    tiketMasuk: "Rp 10.000/orang",
    fasilitas: ["Parkir", "Warung", "Penyewaan Alat Snorkeling"],
    tips: [
      "Bawa perlengkapan snorkeling sendiri",
      "Datang sore untuk menikmati sunset",
      "Hati-hati dengan ombak saat berenang",
      "Jaga kebersihan pantai"
    ]
  },
  {
    id: "taman-ujung",
    nama: "Taman Ujung Karangasem",
    deskripsi: "Istana air dengan arsitektur yang memadukan gaya Bali, Jawa, dan Eropa",
    deskripsiLengkap: "Taman Ujung atau Taman Sukasada adalah bekas istana air yang dibangun pada tahun 1909 oleh Raja Karangasem. Taman ini memiliki arsitektur yang unik memadukan gaya Bali, Jawa, dan Eropa. Terdapat kolam-kolam besar, jembatan, dan paviliun yang sangat indah untuk berfoto.",
    gambar: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Sejarah",
    rating: 4.6,
    lokasi: "Desa Tumbu, Karangasem",
    jamBuka: "08:00 - 18:00 WITA",
    tiketMasuk: "Rp 30.000/orang",
    fasilitas: ["Parkir", "Toilet", "Warung", "Gazebo"],
    tips: [
      "Datang pagi atau sore untuk foto terbaik",
      "Kenakan alas kaki yang nyaman",
      "Bawa topi dan sunscreen",
      "Jelajahi semua area taman"
    ]
  },
  {
    id: "bukit-asah",
    nama: "Bukit Asah",
    deskripsi: "Spot sunrise terbaik dengan pemandangan laut dan pulau-pulau kecil",
    deskripsiLengkap: "Bukit Asah adalah salah satu spot terbaik untuk menikmati sunrise di Bali Timur. Dari atas bukit, pengunjung dapat melihat pemandangan laut lepas, Pulau Nusa Penida, dan deretan pulau-pulau kecil lainnya. Tempat ini juga populer untuk camping dan fotografi landscape.",
    gambar: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Alam",
    rating: 4.5,
    lokasi: "Desa Bugbug, Karangasem",
    jamBuka: "24 jam",
    tiketMasuk: "Rp 15.000/orang",
    fasilitas: ["Parkir", "Area Camping", "Warung"],
    tips: [
      "Datang sebelum jam 5 pagi untuk sunrise",
      "Bawa jaket karena udara dingin",
      "Hati-hati saat berkendara di malam hari",
      "Bawa bekal dan air minum"
    ]
  },
  {
    id: "desa-tenganan",
    nama: "Desa Tenganan Pegringsingan",
    deskripsi: "Desa tradisional Bali Aga dengan budaya dan tradisi yang masih asli",
    deskripsiLengkap: "Desa Tenganan Pegringsingan adalah salah satu desa Bali Aga (Bali asli) yang masih mempertahankan tradisi dan budaya leluhur. Desa ini terkenal dengan kain tenun gringsing yang hanya diproduksi di sini. Pengunjung dapat melihat langsung proses pembuatan kain tradisional dan arsitektur rumah adat yang unik.",
    gambar: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    kategori: "Budaya",
    rating: 4.4,
    lokasi: "Desa Tenganan, Manggis, Karangasem",
    jamBuka: "08:00 - 17:00 WITA",
    tiketMasuk: "Rp 15.000/orang",
    fasilitas: ["Parkir", "Toilet", "Toko Souvenir"],
    tips: [
      "Hormati adat dan tradisi setempat",
      "Jangan sembarangan mengambil foto",
      "Beli kain gringsing sebagai oleh-oleh",
      "Ikuti tur dengan guide lokal"
    ]
  }
];