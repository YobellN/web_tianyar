export interface BanjarItem {
  id: string;
  nama: string;
  deskripsi: string;
  jumlahPenduduk: number;
  jumlahKeluarga: number;
  wilayah: string;
  kegiatan: string[];
  peta: string;
  koordinat: {
    lat: number;
    lng: number;
  };
}

export const banjarData: BanjarItem[] = [
  {
    id: "paleg",
    nama: "Banjar Dinas Paleg",
    deskripsi: "Banjar yang terletak di bagian utara desa dengan mayoritas penduduk bekerja sebagai petani dan nelayan",
    jumlahPenduduk: 812,
    jumlahKeluarga: 203,
    wilayah: "Bagian Utara Desa Tianyar",
    kegiatan: ["Gotong royong mingguan", "Kegiatan adat", "Pelatihan pertanian", "Kelompok nelayan"],
    peta: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    koordinat: {
      lat: -8.3405,
      lng: 115.6442
    }
  },
  {
    id: "tunas-sari",
    nama: "Banjar Dinas Tunas Sari",
    deskripsi: "Banjar yang aktif dalam kegiatan seni dan budaya, terletak di bagian tengah desa",
    jumlahPenduduk: 798,
    jumlahKeluarga: 199,
    wilayah: "Bagian Tengah Desa Tianyar",
    kegiatan: ["Sanggar seni", "Pertunjukan budaya", "Pelatihan kerajinan", "Posyandu"],
    peta: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800",
    koordinat: {
      lat: -8.3425,
      lng: 115.6452
    }
  },
  {
    id: "eka-adnyana",
    nama: "Banjar Dinas Eka Adnyana",
    deskripsi: "Banjar yang fokus pada pengembangan UMKM dan ekonomi kreatif",
    jumlahPenduduk: 823,
    jumlahKeluarga: 206,
    wilayah: "Bagian Timur Desa Tianyar",
    kegiatan: ["Pelatihan UMKM", "Pasar mingguan", "Koperasi simpan pinjam", "Kelompok tani"],
    peta: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    koordinat: {
      lat: -8.3415,
      lng: 115.6472
    }
  },
  {
    id: "dharma-winangun",
    nama: "Banjar Dinas Dharma Winangun",
    deskripsi: "Banjar yang terletak dekat pantai dengan fokus pada pengembangan wisata",
    jumlahPenduduk: 814,
    jumlahKeluarga: 204,
    wilayah: "Bagian Selatan Desa Tianyar",
    kegiatan: ["Kelompok sadar wisata", "Pelatihan guide", "Pengelolaan pantai", "Homestay"],
    peta: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800",
    koordinat: {
      lat: -8.3445,
      lng: 115.6462
    }
  }
];