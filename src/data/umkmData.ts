export interface UMKMItem {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  gambar: string;
  kontak: string;
  rating: number;
  alamat: string;
  jamBuka: string;
}

export const umkmData: UMKMItem[] = [
  {
    id: "warung-sate-lilit-wayan",
    nama: "Warung Sate Lilit Pak Wayan",
    kategori: "Kuliner",
    deskripsi: "Sate lilit ikan dengan bumbu khas Bali, dibuat dari ikan segar hasil tangkapan lokal",
    gambar: "https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 812-3456-7890",
    rating: 4.5,
    alamat: "Jl. Raya Tianyar, Banjar Tianyar Tengah",
    jamBuka: "08:00 - 20:00 WITA"
  },
  {
    id: "kerajinan-anyaman-made",
    nama: "Kerajinan Anyaman Bu Made",
    kategori: "Kerajinan",
    deskripsi: "Tas, topi, dan dekorasi dari anyaman bambu dan pandan berkualitas",
    gambar: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 813-4567-8901",
    rating: 4.3,
    alamat: "Banjar Tianyar Kaja",
    jamBuka: "07:00 - 17:00 WITA"
  },
  {
    id: "warung-nasi-ayam-ketut",
    nama: "Warung Nasi Ayam Bu Ketut",
    kategori: "Kuliner",
    deskripsi: "Nasi ayam dengan lauk tradisional Bali, menu favorit warga lokal",
    gambar: "https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 814-5678-9012",
    rating: 4.4,
    alamat: "Jl. Raya Tianyar",
    jamBuka: "06:00 - 14:00 WITA"
  },
  {
    id: "kopi-robusta-tianyar",
    nama: "Kopi Robusta Tianyar",
    kategori: "Minuman",
    deskripsi: "Kopi robusta dari kebun lokal dengan cita rasa khas pegunungan Karangasem",
    gambar: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 815-6789-0123",
    rating: 4.2,
    alamat: "Banjar Tianyar Kangin",
    jamBuka: "06:00 - 18:00 WITA"
  },
  {
    id: "homestay-tianyar-asri",
    nama: "Homestay Tianyar Asri",
    kategori: "Akomodasi",
    deskripsi: "Penginapan sederhana dengan suasana desa dan pemandangan laut",
    gambar: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 816-7890-1234",
    rating: 4.1,
    alamat: "Banjar Tianyar Kelod",
    jamBuka: "24 jam"
  },
  {
    id: "jamu-tradisional-nyoman",
    nama: "Jamu Tradisional Pak Nyoman",
    kategori: "Kesehatan",
    deskripsi: "Jamu dan obat herbal tradisional untuk kesehatan keluarga",
    gambar: "https://images.pexels.com/photos/6627946/pexels-photo-6627946.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 817-8901-2345",
    rating: 4.0,
    alamat: "Banjar Tianyar Tengah",
    jamBuka: "07:00 - 16:00 WITA"
  },
  {
    id: "kerajinan-kayu-komang",
    nama: "Kerajinan Kayu Pak Komang",
    kategori: "Kerajinan",
    deskripsi: "Ukiran kayu dan patung dengan motif tradisional Bali",
    gambar: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 818-9012-3456",
    rating: 4.3,
    alamat: "Banjar Tianyar Kaja",
    jamBuka: "08:00 - 17:00 WITA"
  },
  {
    id: "warung-es-kelapa-luh",
    nama: "Warung Es Kelapa Ni Luh",
    kategori: "Minuman",
    deskripsi: "Es kelapa muda segar dan minuman tradisional lainnya",
    gambar: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800",
    kontak: "+62 819-0123-4567",
    rating: 4.2,
    alamat: "Dekat Pantai Tianyar",
    jamBuka: "09:00 - 19:00 WITA"
  }
];