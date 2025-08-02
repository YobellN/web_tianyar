export interface WisataItem {
  id: string;
  nama: string;
  namaEn?: string;
  deskripsi: string;
  deskripsiEn?: string;
  deskripsiLengkap: string;
  deskripsiLengkapEn?: string;
  gambar: string;
  kategori: string;
  kategoriEn?: string;
  lokasi: string;
  jamBuka: string;
  tiketMasuk: string;
  fasilitas: string[];
  fasilitasEn?: string[];
  tips: string[];
  tipsEn?: string[];
}

export const wisataData: WisataItem[] = [
  {
    id: "pantai-candi-gora",
    nama: "Pantai Candi Gora",
    namaEn: "Candi Gora Beach",
    deskripsi:
      "Pantai berpasir hitam vulkanik di dekat Pura Candi Gora, cocok untuk menikmati sunrise dan ketenangan.",
    deskripsiEn:
      "Volcanic black sand beach near Candi Gora Temple, perfect for enjoying sunrise and tranquility.",
    deskripsiLengkap:
      "Pantai Candi Gora menawarkan hamparan pasir hitam vulkanik khas kawasan utara‑timur Bali, berada di Desa Tianyar, Kecamatan Kubu. Tempat ini populer untuk menyaksikan matahari terbit dengan latar Gunung Agung dan perahu nelayan tradisional. Suasana tenang ideal untuk healing, fotografi pagi, atau meditasi. Tersedia warung lokal dan area duduk sederhana, serta akses jalan sudah memadai untuk kendaraan pribadi.",
    deskripsiLengkapEn:
      "Candi Gora Beach offers volcanic black sand typical of northeast Bali, located in Tianyar Village, Kubu District. This place is popular for watching sunrise with Mount Agung backdrop and traditional fishing boats. The peaceful atmosphere is ideal for healing, morning photography, or meditation. Local warungs and simple seating areas are available, with adequate road access for private vehicles.",
    gambar: "/wisata/pantai_candi_gora.JPG",
    kategori: "Pantai",
    kategoriEn: "Beach",
    lokasi: "https://maps.app.goo.gl/p8VEhdfotrBQURB27",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis",
    fasilitas: ["Parkir kendaraan", "Warung lokal", "Area duduk santai"],
    fasilitasEn: ["Vehicle parking", "Local warungs", "Relaxing seating area"],
    tips: [
      "Datang saat sunrise untuk cuaca sejuk dan cahaya optimal",
      "Bawa topi / sunblock karena area minim pepohonan",
      "Pakailah alas kaki nyaman, beberapa area berbatu",
    ],
    tipsEn: [
      "Come during sunrise for cool weather and optimal lighting",
      "Bring hat/sunblock as the area has minimal trees",
      "Wear comfortable footwear, some areas are rocky",
    ],
  },
  {
    id: "savana-tianyar",
    nama: "Savana Tianyar",
    namaEn: "Tianyar Savanna",
    deskripsi:
      "Padang rumput luas berlatar Gunung Agung, cocok untuk camping, piknik, dan fotografi alam.",
    deskripsiEn:
      "Vast grassland with Mount Agung backdrop, perfect for camping, picnicking, and nature photography.",
    deskripsiLengkap:
      "Savana Tianyar adalah padang rumput alami hasil aliran lahar Gunung Agung, menyerupai lanskap savana dengan bukit bergelombang dan pohon kecil. Musim kemarau (Apr–Okt): rumput menguning; musim hujan (Nov–Mar): hijau segar. Pengunjung dapat camping, trekking, piknik, dan berinteraksi dengan sapi/kerbau. Lokasi sekitar 2–3 jam dari Denpasar, akses kendaraan pribadi cukup baik kecuali jalan terakhir berbatu.",
    deskripsiLengkapEn:
      "Tianyar Savanna is a natural grassland formed by Mount Agung's lava flow, resembling savanna landscape with rolling hills and small trees. Dry season (Apr–Oct): grass turns yellow; rainy season (Nov–Mar): fresh green. Visitors can camp, trek, picnic, and interact with cattle/buffalo. Location is about 2–3 hours from Denpasar, private vehicle access is quite good except for the rocky final road.",
    gambar: "/wisata/savana_tianyar.JPG",
    kategori: "Alam",
    kategoriEn: "Nature",
    lokasi: "https://maps.app.goo.gl/T3CuvZtxRfMXjwxx6",
    jamBuka: "Selasa–Minggu 07:15–18:00 WITA; Senin buka 24 jam",
    tiketMasuk: "Rp 10.000/orang (dewasa domestik)",
    fasilitas: [
      "Area parkir",
      "Gazebo & tempat duduk",
      "Toilet sederhana",
      "Area camping",
      "Warung lokal",
    ],
    fasilitasEn: [
      "Parking area",
      "Gazebo & seating",
      "Simple toilet",
      "Camping area",
      "Local warungs",
    ],
    tips: [
      "Kunjungi pagi atau sore untuk udara nyaman & cahaya terbaik",
      "Bawa topi, sunblock & air minum",
      "Gunakan kendaraan ber-ground‑clearance tinggi untuk jalan berbatu",
      "Hormati hewan ternak; jangan memberi makan sembarangan",
    ],
    tipsEn: [
      "Visit morning or evening for comfortable air & best lighting",
      "Bring hat, sunblock & drinking water",
      "Use high ground-clearance vehicle for rocky roads",
      "Respect livestock; don't feed randomly",
    ],
  },
  {
    id: "kampung-inggris-tianyar",
    nama: "Kampung Inggris Tianyar",
    namaEn: "Tianyar English Village",
    deskripsi:
      "Wisata edukasi belajar bahasa Inggris informal oleh komunitas lokal di Tianyar.",
    deskripsiEn:
      "Educational tourism for informal English learning by local community in Tianyar.",
    deskripsiLengkap:
      "Kampung Inggris Tianyar adalah pusat belajar bahasa Inggris yang digagas pemuda lokal untuk memberdayakan warga melalui kelas santai dan interaksi langsung, mirip konsep Kampung Inggris Pare sejak 1976 :contentReference[oaicite:1]{index=1}. Tersedia program untuk berbagai usia, relawan asing sering hadir sebagai pengajar informal. Sejumlah ruang kelas outdoor, pustaka mini, dan beberapa kafe/warung mendukung atmosfer belajar.",
    deskripsiLengkapEn:
      "Tianyar English Village is an English learning center initiated by local youth to empower residents through casual classes and direct interaction, similar to the Pare English Village concept since 1976. Programs are available for various ages, foreign volunteers often present as informal teachers. Several outdoor classrooms, mini library, and some cafes/warungs support the learning atmosphere.",
    gambar: "/wisata/kampung_inggris.JPG",
    kategori: "Edukasi",
    kategoriEn: "Education",
    lokasi: "https://maps.app.goo.gl/iX57ueuwwUM7uDsu5",
    jamBuka: "Senin–Sabtu 09:00–18:00 WITA; Minggu tutup/bergantung kegiatan",
    tiketMasuk: "Gratis (donasi opsional), biaya kursus sesuai lembaga pilihan",
    fasilitas: [
      "Ruang kelas terbuka",
      "Pustaka mini",
      "Wi‑Fi terbatas",
      "Warung & kafe lokal",
      "Penginapan homestay/dekat kelas",
    ],
    fasilitasEn: [
      "Open classrooms",
      "Mini library",
      "Limited Wi-Fi",
      "Local warungs & cafes",
      "Homestay accommodation/near classes",
    ],
    tips: [
      "Daftar kelas atau donasikan lebih awal via kontak sosial media lokal",
      "Cocok untuk pelajar, relawan, atau family learning",
      "Cobalah homestay untuk praktik bahasa sehari‑hari",
      "Gunakan sepeda/scooter untuk mobilitas antar kelas dan warung",
    ],
    tipsEn: [
      "Register for classes or donate early via local social media contacts",
      "Suitable for students, volunteers, or family learning",
      "Try homestay for daily language practice",
      "Use bicycle/scooter for mobility between classes and warungs",
    ],
  },
  {
    id: "konservasi-terumbu-karang",
    nama: "North Bali Reef Conservation",
    namaEn: "North Bali Reef Conservation",
    deskripsi:
      "NGO konservasi terumbu karang & pendidikan lingkungan di pesisir Tianyar.",
    deskripsiEn:
      "Coral reef conservation NGO & environmental education on Tianyar coast.",
    deskripsiLengkap:
      "North Bali Reef Conservation adalah proyek lingkungan yang memulai sejak 2017 dari inisiatif lokal, bekerja sama dengan nelayan untuk membangun & menanam >7.000 struktur terumbu buatan, juga mengelola hatchery tukik, pendidikan tentang plastik & pembersihan pantai mingguan :contentReference[oaicite:2]{index=2}. Pengunjung dapat snorkel/diving (PADI), mengikuti program edukasi, dan observasi kegiatan konservasi.",
    deskripsiLengkapEn:
      "North Bali Reef Conservation is an environmental project that started in 2017 from local initiative, working with fishermen to build & plant >7,000 artificial reef structures, also managing turtle hatchery, plastic education & weekly beach cleanups. Visitors can snorkel/dive (PADI), join educational programs, and observe conservation activities.",
    gambar: "/wisata/north_bali_reef_conservation.JPG",
    kategori: "Alam",
    kategoriEn: "Nature",
    lokasi: "https://maps.app.goo.gl/jhXLDTVsd5qzbZbY9",
    jamBuka: "09:00–17:00 WITA (tur & volunteer by appointment)",
    tiketMasuk:
      "Gratis; sumbangan disarankan. Paket diving/volunteer mulai ~IDR 3–5 jt/minggu",
    fasilitas: [
      "Pusat informasi & akomodasi sederhana",
      "Peralatan selam/snorkel",
      "Program PADI diving (opsional)",
      "Tur edukasi & relawan",
    ],
    fasilitasEn: [
      "Information center & simple accommodation",
      "Diving/snorkeling equipment",
      "PADI diving program (optional)",
      "Educational tours & volunteer",
    ],
    tips: [
      "Hubungi via website untuk booking snorkel/diving atau volunter",
      "Jika ingin diverifikasi PADI, siapkan sertifikasi sebelumnya atau pakai paket",
      "Bawa alas kaki anti-selip untuk taman terumbu & pantai berbatu",
      "Siapkan penitipan donasi atau pakaian bekas plastik untuk daur ulang",
    ],
    tipsEn: [
      "Contact via website for snorkel/diving booking or volunteer",
      "If you want PADI verification, prepare previous certification or use package",
      "Bring non-slip footwear for reef garden & rocky beach",
      "Prepare donation or used plastic clothes for recycling",
    ],
  },
  {
    id: "pura-puseh-tianyar",
    nama: "Pura Puseh Tianyar",
    namaEn: "Puseh Tianyar Temple",
    deskripsi:
      "Pura Desa Pakraman Tianyar, pusat kegiatan religi masyarakat lokal.",
    deskripsiEn:
      "Pakraman Tianyar Village Temple, center of local community religious activities.",
    deskripsiLengkap:
      "Pura Puseh Tianyar adalah pura desa utama di Pakraman Tianyar, digunakan untuk upacara adat dan odalan secara rutin oleh warga Hindu Bali. Lingkungannya asri dengan taman terbuka, gapura tradisional, dan area teduh untuk bersembahyang atau refleksi.",
    deskripsiLengkapEn:
      "Puseh Tianyar Temple is the main village temple in Pakraman Tianyar, used for traditional ceremonies and odalan regularly by Balinese Hindu residents. The environment is beautiful with open gardens, traditional gates, and shaded areas for prayer or reflection.",
    gambar: "/wisata/pura_puseh.JPG",
    kategori: "Budaya",
    kategoriEn: "Culture",
    lokasi: "https://maps.app.goo.gl/E4D598ewNH4eJPhy7",
    jamBuka: "06:00–18:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: ["Pura dan taman", "Area parkir di dekat pura"],
    fasilitasEn: ["Temple and garden", "Parking area near temple"],
    tips: [
      "Kenakan sarung/kain kamben dan selendang saat memasuki pura",
      "Hormat pada jadwal upacara—hindari menjepret foto saat sedang ibadah",
      "Gunakan sepatu yang mudah dilepas saat memasuki area suci",
    ],
    tipsEn: [
      "Wear sarong/kamben cloth and sash when entering temple",
      "Respect ceremony schedule—avoid taking photos during worship",
      "Use shoes that are easy to remove when entering sacred areas",
    ],
  },
  {
    id: "pantai-ketapang-mas-tianyar",
    nama: "Pantai Ketapang Mas",
    namaEn: "Ketapang Mas Beach",
    deskripsi:
      "Pantai berpasir gelap dengan latar jembatan kayu & perahu nelayan.",
    deskripsiEn:
      "Dark sand beach with wooden bridge backdrop & fishing boats.",
    deskripsiLengkap:
      "Pantai Ketapang Mas di Desa Tianyar menawarkan pasir gelap yang kontras dengan air bening dan jembatan kayu panjang yang sering jadi spot foto. Ombaknya tenang sehingga cocok untuk berenang ringan dan sunset watching. Akses mudah dari jalan raya, dengan beberapa warung lokal di sekitar.",
    deskripsiLengkapEn:
      "Ketapang Mas Beach in Tianyar Village offers dark sand that contrasts with clear water and a long wooden bridge that often becomes a photo spot. The waves are calm making it suitable for light swimming and sunset watching. Easy access from the main road, with several local warungs around.",
    gambar: "/wisata/pantai_ketapang_mas.JPG",
    kategori: "Pantai",
    kategoriEn: "Beach",
    lokasi: "https://maps.app.goo.gl/b72jTovgKtxuzCEs7",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis (beberapa warung bisa perkenakan biaya parkir kecil)",
    fasilitas: ["Parkir", "Warung lokal", "Jembatan kayu dan tempat duduk"],
    fasilitasEn: ["Parking", "Local warungs", "Wooden bridge and seating"],
    tips: [
      "Datang sore hari untuk menikmati sunset dan suasana tenang",
      "Bawa handuk/kain untuk duduk di pantai",
      "Hormati perahu dan nelayan lokal—jangan ganggu aktivitasnya",
    ],
    tipsEn: [
      "Come in the evening to enjoy sunset and peaceful atmosphere",
      "Bring towel/cloth to sit on the beach",
      "Respect boats and local fishermen—don't disturb their activities",
    ],
  },
  {
    id: "embung-tianyar",
    nama: "Embung Tianyar",
    namaEn: "Tianyar Reservoir",
    deskripsi:
      "Waduk kecil untuk irigasi dan edukasi pertanian, cocok untuk rekreasi keluarga.",
    deskripsiEn:
      "Small reservoir for irrigation and agricultural education, suitable for family recreation.",
    deskripsiLengkap:
      "Embung Tianyar adalah bendungan kecil yang dibangun sebagai cadangan air untuk irigasi sawah dan kebun warga Desa Tianyar. Letaknya cukup terpadu dengan alam sekitar, memberikan suasana tenang, dan sering dijadikan lokasi edukasi pertanian, rekreasi sore, serta spot fotografi alam. Area sekitar embung cocok untuk piknik keluarga dan observasi burung lokal saat musim migrasi.",
    deskripsiLengkapEn:
      "Tianyar Reservoir is a small dam built as water reserve for rice field and garden irrigation for Tianyar Village residents. Its location is quite integrated with surrounding nature, providing peaceful atmosphere, and often used as agricultural education location, evening recreation, and nature photography spot. The area around the reservoir is suitable for family picnics and local bird observation during migration season.",
    gambar: "/wisata/embung_tianyar.jpg",
    kategori: "Alam",
    kategoriEn: "Nature",
    lokasi: "https://maps.app.goo.gl/Yym6z6QHfDEb2LKL7",
    jamBuka: "08:00 – 17:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: [
      "Area duduk dan gazebo sederhana",
      "Papan informasi edukasi pertanian",
      "Parkir kendaraan",
      "Jalur setapak jalan kaki",
    ],
    fasilitasEn: [
      "Simple seating area and gazebo",
      "Agricultural education information board",
      "Vehicle parking",
      "Walking trail",
    ],
    tips: [
      "Bawa topi dan sunblock untuk siang hari",
      "Cocok untuk foto saat sore hari dan golden hour",
      "Hindari membuang sampah sembarangan",
    ],
    tipsEn: [
      "Bring hat and sunblock for daytime",
      "Great for photos during evening and golden hour",
      "Avoid littering",
    ],
  },
];
