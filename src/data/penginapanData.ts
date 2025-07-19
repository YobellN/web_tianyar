export interface PenginapanItem {
  id: string;
  nama: string;
  tipe: string;
  deskripsi: string;
  gambar: string;
  harga: string;
  rating: number;
  alamat: string;
  kontak: string;
  fasilitas: string[];
  kapasitas: string;
}

export const penginapanData: PenginapanItem[] = [
  {
    id: "villa-tianyar-view",
    nama: "Villa Tianyar View",
    tipe: "Villa",
    deskripsi: "Villa mewah dengan pemandangan laut dan Gunung Agung, dilengkapi kolam renang pribadi",
    gambar: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 1.500.000 - 2.500.000/malam",
    rating: 4.8,
    alamat: "Banjar Dinas Eka Adnyana, Tianyar",
    kontak: "+62 812-3456-7890",
    fasilitas: ["Kolam Renang", "AC", "WiFi", "Dapur", "Parkir", "Pemandangan Laut"],
    kapasitas: "6-8 orang"
  },
  {
    id: "homestay-tianyar-asri",
    nama: "Homestay Tianyar Asri",
    tipe: "Homestay",
    deskripsi: "Penginapan keluarga dengan suasana tradisional Bali dan keramahan warga lokal",
    gambar: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 300.000 - 500.000/malam",
    rating: 4.5,
    alamat: "Banjar Dinas Tunas Sari, Tianyar",
    kontak: "+62 813-4567-8901",
    fasilitas: ["WiFi", "Sarapan", "Parkir", "Taman", "Ruang Keluarga"],
    kapasitas: "2-4 orang"
  },
  {
    id: "guesthouse-pantai-tianyar",
    nama: "Guesthouse Pantai Tianyar",
    tipe: "Guesthouse",
    deskripsi: "Penginapan sederhana dekat pantai, cocok untuk backpacker dan wisatawan budget",
    gambar: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 150.000 - 250.000/malam",
    rating: 4.2,
    alamat: "Dekat Pantai Tianyar, Banjar Paleg",
    kontak: "+62 814-5678-9012",
    fasilitas: ["WiFi", "Kipas Angin", "Kamar Mandi Bersama", "Dapur Bersama"],
    kapasitas: "1-2 orang"
  },
  {
    id: "lodge-savana-tianyar",
    nama: "Savana Lodge Tianyar",
    tipe: "Lodge",
    deskripsi: "Lodge eco-friendly di tengah savana dengan pengalaman camping mewah",
    gambar: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 800.000 - 1.200.000/malam",
    rating: 4.6,
    alamat: "Savana Tianyar, Banjar Dharma Winangun",
    kontak: "+62 815-6789-0123",
    fasilitas: ["Tenda Mewah", "Toilet Pribadi", "Pemandangan Savana", "BBQ Area", "Trekking Guide"],
    kapasitas: "2-3 orang"
  },
  {
    id: "camping-ground-tianyar",
    nama: "Camping Ground Tianyar",
    tipe: "Camping",
    deskripsi: "Area camping dengan fasilitas lengkap di bawah bintang-bintang",
    gambar: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 50.000 - 100.000/malam",
    rating: 4.3,
    alamat: "Bukit Tianyar, Banjar Paleg",
    kontak: "+62 816-7890-1234",
    fasilitas: ["Toilet Umum", "Tempat Api", "Parkir", "Warung", "Sewa Tenda"],
    kapasitas: "Unlimited"
  },
  {
    id: "rumah-tradisional-tianyar",
    nama: "Rumah Tradisional Tianyar",
    tipe: "Rumah Tradisional",
    deskripsi: "Pengalaman menginap di rumah tradisional Bali dengan arsitektur autentik",
    gambar: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 400.000 - 700.000/malam",
    rating: 4.7,
    alamat: "Banjar Dinas Dharma Winangun, Tianyar",
    kontak: "+62 817-8901-2345",
    fasilitas: ["Arsitektur Tradisional", "Taman Tropis", "Sarapan Tradisional", "WiFi", "Parkir"],
    kapasitas: "4-6 orang"
  },
  {
    id: "beach-bungalow-tianyar",
    nama: "Beach Bungalow Tianyar",
    tipe: "Bungalow",
    deskripsi: "Bungalow kayu di tepi pantai dengan suara ombak sebagai pengantar tidur",
    gambar: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 600.000 - 900.000/malam",
    rating: 4.4,
    alamat: "Pantai Tianyar, Banjar Eka Adnyana",
    kontak: "+62 818-9012-3456",
    fasilitas: ["Akses Pantai", "AC", "WiFi", "Teras Pribadi", "Parkir"],
    kapasitas: "2-4 orang"
  },
  {
    id: "resort-tianyar-hills",
    nama: "Tianyar Hills Resort",
    tipe: "Resort",
    deskripsi: "Resort mewah di perbukitan dengan spa dan restoran fine dining",
    gambar: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    harga: "Rp 2.000.000 - 3.500.000/malam",
    rating: 4.9,
    alamat: "Perbukitan Tianyar, Banjar Tunas Sari",
    kontak: "+62 819-0123-4567",
    fasilitas: ["Spa", "Restaurant", "Kolam Renang", "Gym", "WiFi", "Room Service", "Concierge"],
    kapasitas: "2-8 orang"
  }
];