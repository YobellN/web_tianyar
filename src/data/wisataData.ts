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
      "Pantai berpasir hitam vulkanik di dekat Pura Candi Gora, cocok untuk menikmati sunrise dan ketenangan.",
    deskripsiLengkap:
      "Pantai Candi Gora menawarkan hamparan pasir hitam vulkanik khas kawasan utara‑timur Bali, berada di Desa Tianyar, Kecamatan Kubu. Tempat ini populer untuk menyaksikan matahari terbit dengan latar Gunung Agung dan perahu nelayan tradisional. Suasana tenang ideal untuk healing, fotografi pagi, atau meditasi. Tersedia warung lokal dan area duduk sederhana, serta akses jalan sudah memadai untuk kendaraan pribadi.",
    gambar: "/wisata/pantai_candi_gora.JPG",
    kategori: "Pantai",
    lokasi: "https://maps.app.goo.gl/p8VEhdfotrBQURB27",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis",
    fasilitas: ["Parkir kendaraan", "Warung lokal", "Area duduk santai"],
    tips: [
      "Datang saat sunrise untuk cuaca sejuk dan cahaya optimal",
      "Bawa topi / sunblock karena area minim pepohonan",
      "Pakailah alas kaki nyaman, beberapa area berbatu",
    ],
  },
  {
    id: "savana-tianyar",
    nama: "Savana Tianyar",
    deskripsi:
      "Padang rumput luas berlatar Gunung Agung, cocok untuk camping, piknik, dan fotografi alam.",
    deskripsiLengkap:
      "Savana Tianyar adalah padang rumput alami hasil aliran lahar Gunung Agung, menyerupai lanskap savana dengan bukit bergelombang dan pohon kecil. Musim kemarau (Apr–Okt): rumput menguning; musim hujan (Nov–Mar): hijau segar. Pengunjung dapat camping, trekking, piknik, dan berinteraksi dengan sapi/kerbau. Lokasi sekitar 2–3 jam dari Denpasar, akses kendaraan pribadi cukup baik kecuali jalan terakhir berbatu.",
    gambar: "/wisata/savana_tianyar.JPG",
    kategori: "Alam",
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
    tips: [
      "Kunjungi pagi atau sore untuk udara nyaman & cahaya terbaik",
      "Bawa topi, sunblock & air minum",
      "Gunakan kendaraan ber-ground‑clearance tinggi untuk jalan berbatu",
      "Hormati hewan ternak; jangan memberi makan sembarangan",
    ],
  },
  {
    id: "kampung-inggris-tianyar",
    nama: "Kampung Inggris Tianyar",
    deskripsi:
      "Wisata edukasi belajar bahasa Inggris informal oleh komunitas lokal di Tianyar.",
    deskripsiLengkap:
      "Kampung Inggris Tianyar adalah pusat belajar bahasa Inggris yang digagas pemuda lokal untuk memberdayakan warga melalui kelas santai dan interaksi langsung, mirip konsep Kampung Inggris Pare sejak 1976 :contentReference[oaicite:1]{index=1}. Tersedia program untuk berbagai usia, relawan asing sering hadir sebagai pengajar informal. Sejumlah ruang kelas outdoor, pustaka mini, dan beberapa kafe/warung mendukung atmosfer belajar.",
    gambar: "/wisata/kampung_inggris.JPG",
    kategori: "Edukasi",
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
    tips: [
      "Daftar kelas atau donasikan lebih awal via kontak sosial media lokal",
      "Cocok untuk pelajar, relawan, atau family learning",
      "Cobalah homestay untuk praktik bahasa sehari‑hari",
      "Gunakan sepeda/scooter untuk mobilitas antar kelas dan warung",
    ],
  },
  {
    id: "konservasi-terumbu-karang",
    nama: "North Bali Reef Conservation",
    deskripsi:
      "NGO konservasi terumbu karang & pendidikan lingkungan di pesisir Tianyar.",
    deskripsiLengkap:
      "North Bali Reef Conservation adalah proyek lingkungan yang memulai sejak 2017 dari inisiatif lokal, bekerja sama dengan nelayan untuk membangun & menanam >7.000 struktur terumbu buatan, juga mengelola hatchery tukik, pendidikan tentang plastik & pembersihan pantai mingguan :contentReference[oaicite:2]{index=2}. Pengunjung dapat snorkel/diving (PADI), mengikuti program edukasi, dan observasi kegiatan konservasi.",
    gambar: "/wisata/north_bali_reef_conservation.JPG",
    kategori: "Alam",
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
    tips: [
      "Hubungi via website untuk booking snorkel/diving atau volunter",
      "Jika ingin diverifikasi PADI, siapkan sertifikasi sebelumnya atau pakai paket",
      "Bawa alas kaki anti-selip untuk taman terumbu & pantai berbatu",
      "Siapkan penitipan donasi atau pakaian bekas plastik untuk daur ulang",
    ],
  },
  {
    id: "pura-puseh-tianyar",
    nama: "Pura Puseh Tianyar",
    deskripsi:
      "Pura Desa Pakraman Tianyar, pusat kegiatan religi masyarakat lokal.",
    deskripsiLengkap:
      "Pura Puseh Tianyar adalah pura desa utama di Pakraman Tianyar, digunakan untuk upacara adat dan odalan secara rutin oleh warga Hindu Bali. Lingkungannya asri dengan taman terbuka, gapura tradisional, dan area teduh untuk bersembahyang atau refleksi.",
    gambar: "/wisata/pura_puseh.JPG",
    kategori: "Budaya",
    lokasi: "https://maps.app.goo.gl/E4D598ewNH4eJPhy7",
    jamBuka: "06:00–18:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: ["Pura dan taman", "Area parkir di dekat pura"],
    tips: [
      "Kenakan sarung/kain kamben dan selendang saat memasuki pura",
      "Hormat pada jadwal upacara—hindari menjepret foto saat sedang ibadah",
      "Gunakan sepatu yang mudah dilepas saat memasuki area suci",
    ],
  },
  {
    id: "pantai-ketapang-mas-tianyar",
    nama: "Pantai Ketapang Mas",
    deskripsi:
      "Pantai berpasir gelap dengan latar jembatan kayu & perahu nelayan.",
    deskripsiLengkap:
      "Pantai Ketapang Mas di Desa Tianyar menawarkan pasir gelap yang kontras dengan air bening dan jembatan kayu panjang yang sering jadi spot foto. Ombaknya tenang sehingga cocok untuk berenang ringan dan sunset watching. Akses mudah dari jalan raya, dengan beberapa warung lokal di sekitar.",
    gambar: "/wisata/pantai_ketapang_mas.JPG",
    kategori: "Pantai",
    lokasi: "https://maps.app.goo.gl/b72jTovgKtxuzCEs7",
    jamBuka: "24 jam",
    tiketMasuk: "Gratis (beberapa warung bisa perkenakan biaya parkir kecil)",
    fasilitas: ["Parkir", "Warung lokal", "Jembatan kayu dan tempat duduk"],
    tips: [
      "Datang sore hari untuk menikmati sunset dan suasana tenang",
      "Bawa handuk/kain untuk duduk di pantai",
      "Hormati perahu dan nelayan lokal—jangan ganggu aktivitasnya",
    ],
  },
  {
    id: "embung-tianyar",
    nama: "Embung Tianyar",
    deskripsi:
      "Waduk kecil untuk irigasi dan edukasi pertanian, cocok untuk rekreasi keluarga.",
    deskripsiLengkap:
      "Embung Tianyar adalah bendungan kecil yang dibangun sebagai cadangan air untuk irigasi sawah dan kebun warga Desa Tianyar. Letaknya cukup terpadu dengan alam sekitar, memberikan suasana tenang, dan sering dijadikan lokasi edukasi pertanian, rekreasi sore, serta spot fotografi alam. Area sekitar embung cocok untuk piknik keluarga dan observasi burung lokal saat musim migrasi.",
    gambar: "/wisata/embung_tianyar.jpg",
    kategori: "Alam",
    lokasi: "https://maps.app.goo.gl/Yym6z6QHfDEb2LKL7",
    jamBuka: "08:00 – 17:00 WITA",
    tiketMasuk: "Gratis",
    fasilitas: [
      "Area duduk dan gazebo sederhana",
      "Papan informasi edukasi pertanian",
      "Parkir kendaraan",
      "Jalur setapak jalan kaki",
    ],
    tips: [
      "Bawa topi dan sunblock untuk siang hari",
      "Cocok untuk foto saat sore hari dan golden hour",
      "Hindari membuang sampah sembarangan",
    ],
  },
];
