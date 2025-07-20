export interface UMKMItem {
  id: string;
  nama: string;
  deskripsi: string;
  gambar: string;
  kontak: string;
  alamat: string;
}

export const umkmData: UMKMItem[] = [
  {
    id: "gula-aren-wayan-bakat",
    nama: "Gula Aren Wayan Bakat",
    deskripsi: "Gula aren berkualitas dengan cita rasa khas Bali",
    gambar: "/umkm/gula_aren_wayan_bakat.jpg",
    kontak: "+62 857-0603-6341",
    alamat: "https://maps.app.goo.gl/XySUcqUg4jZVLxMP9",
  },
  {
    id: "arak-pak-made-tianyar",
    nama: "Minuman Arak Pak Made Tianyar",
    deskripsi: "Minuman khas Bali dengan cita rasa khas Bali",
    gambar: "/umkm/arak_pak_made.JPG",
    kontak: "+62 813-4567-8901",
    alamat: "https://maps.app.goo.gl/6X7ECbjZpka2hP296",
  }
];