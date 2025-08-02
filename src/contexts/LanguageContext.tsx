'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'id' | 'en';
  setLanguage: (lang: 'id' | 'en') => void;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    nav: {
      home: 'Beranda',
      tourism: 'Wisata',
      umkm: 'UMKM',
      accommodation: 'Penginapan',
      banjar: 'Banjar',
      gallery: 'Galeri'
    },
    hero: {
      welcome: 'Selamat Datang di',
      village: 'Desa Tianyar',
      subtitle: 'Menjelajahi Keindahan Alam, Budaya, dan Tradisi Bali yang Autentik',
      exploreVillage: 'Jelajahi Desa',
      seeTourism: 'Lihat Wisata'
    },
    history: {
      title: 'Sejarah Desa Tianyar',
      subtitle: 'Jejak Sejarah dan Warisan Budaya yang Terpelihara',
      origin: {
        title: 'Asal-Usul Desa',
        description: 'Desa Tianyar merupakan salah satu desa tua yang terletak di ujung barat Kabupaten Karangasem, Bali. Secara geografis, desa ini berbatasan langsung dengan Kabupaten Buleleng. Sebelum adanya pemekaran wilayah, Desa Tianyar masih menjadi satu kesatuan administratif yang dikenal dengan nama Desa Tianyar.'
      },
      nameOrigin: {
        title: 'Asal-Usul Nama "Tianyar"',
        story1: 'Menurut penuturan para sesepuh atau pengelingsir desa, pada zaman dahulu kala — disebut juga duk tan hana paran-paran (belum ada peradaban) — datanglah seorang Maha Rsi sakti bernama Pedanda Sakti Bau Rauh (atau Wau Rauh). Beliau adalah seorang suci utusan dari Kerajaan Majapahit yang datang untuk melaksanakan tapa brata atau yoga samadhi.',
        story2: 'Saat itu, Desa Tianyar mengalami kekeringan ekstrem dan kesulitan air. Maka, Maha Rsi Bau Rauh memohon kepada Ida Sanghyang Widhi Wasa (Tuhan Yang Maha Esa) agar dianugerahkan air suci yang bisa digunakan untuk melasti para dewa setelah upacara piodalan.'
      },
      lake: {
        title: 'Telaga Ngembeng atau Toya Anyar',
        meaning: 'Toya = Air, Anyar = Baru/Suci',
        evolution: 'Seiring waktu, nama "Toya Anyar" mengalami pelesapan bunyi dan berubah menjadi "Tianyar", nama yang dikenal hingga sekarang. Telaga tersebut kini telah tertutup pasir akibat letusan Gunung Agung tahun 1963, namun bekasnya masih ada di wilayah Banjar Dinas Taman Sari, Desa Tianyar Barat.'
      },
      government: {
        title: 'Sejarah Pemerintahan',
        eraTitle: 'Era Perbekelan (1931-1942)',
        kelodan: {
          title: 'Perbekelan Tianyar Kelodan',
          leader: 'Perbekel: Jro Ketut Gunung',
          areas: 'Banjar: Bila Kelodan, Bila Kaleran, Getas, Paleg, Munti Gunung'
        },
        kaleran: {
          title: 'Perbekelan Tianyar Kaleran',
          leader: 'Perbekel: Jro Mangku Rai',
          areas: 'Banjar: Duran Pasar, Pedahan Kaja, Pedahan Kelod, Penginyahan, Culik, Pande'
        },
        leadersTitle: 'Daftar Perbekel/Kepala Desa',
        leaders: [
          { name: 'I Made Cepug', period: 's.d. 1972' },
          { name: 'I Ketut Mangun Seraya', period: '1972–1982' },
          { name: 'I Gede Tantra (Pjs)', period: '1982–1983' },
          { name: 'I Wayan Dora', period: '1983–1985' },
          { name: 'I Ketut Alit', period: '1985–1995' },
          { name: 'Drs. I Made Sukarata', period: '1995–2008' },
          { name: 'I Gede Suadi, SH', period: '2008–2014' },
          { name: 'Drs. I Ketut Wija', period: '2016–sekarang' }
        ],
        expansion: {
          title: 'Pemekaran Desa (1982)',
          villages: [
            { name: 'Desa Tianyar (Induk)', areas: 'Dharma Winangun, Eka Adnyana, Tunas Sari, Paleg' },
            { name: 'Desa Tianyar Tengah', areas: 'Munti Desa, Penginyahan, Pedahan Kaja, Pedahan Kelod' },
            { name: 'Desa Tianyar Barat', areas: 'Kerta Buana, Taman Sari, Munti Gunung, Tegal Sari' }
          ]
        }
      }
    },
    profile: {
      title: 'Profil Wilayah Desa Tianyar',
      subtitle: 'Pintu Gerbang Barat Kabupaten Karangasem',
      geography: {
        title: 'Luas Wilayah dan Letak Geografis',
        description: 'Desa Tianyar merupakan salah satu dari 68 desa dan 4 kelurahan yang ada di wilayah Kabupaten Karangasem, Provinsi Bali. Desa ini memiliki peran strategis sebagai pintu gerbang paling barat Kabupaten Karangasem, sekaligus sebagai wilayah yang kaya akan potensi alam, budaya, dan sejarah.',
        areaUnit: 'Hektar Luas Wilayah',
        areaDescription: 'Membentang dari arah selatan ke utara dengan berbagai karakteristik topografi, mulai dari perbukitan hingga kawasan pesisir.',
        bordersTitle: 'Batas Wilayah Desa Tianyar:',
        borders: {
          north: { direction: 'Utara', area: 'Laut Jawa' },
          south: { direction: 'Selatan', area: 'Desa Ban & Kab. Bangli' },
          east: { direction: 'Timur', area: 'Desa Sukadana' },
          west: { direction: 'Barat', area: 'Desa Tianyar Tengah' }
        },
        potential: 'Letak geografis ini menjadikan Desa Tianyar sebagai kawasan dengan potensi kelautan dan perikanan di sisi utara serta potensi pertanian dan pariwisata di wilayah selatan.'
      },
      administrative: {
        title: 'Pembagian Wilayah Administratif',
        description: 'Secara administratif, Desa Tianyar terbagi ke dalam 4 (empat) Banjar Dinas:',
        banjars: [
          'Banjar Dinas Dharma Winangun',
          'Banjar Dinas Eka Adnyana',
          'Banjar Dinas Tunas Sari',
          'Banjar Dinas Paleg'
        ],
        note: 'Masing-masing Banjar Dinas memiliki karakteristik dan potensi tersendiri, baik dari segi sosial, ekonomi, maupun budaya. Pembagian ini memudahkan pemerintahan desa dalam mengelola pelayanan publik serta melaksanakan pembangunan secara merata.'
      },
      traditional: {
        title: 'Pembagian Wilayah Adat',
        description: 'Selain secara administratif, Desa Tianyar juga dibagi berdasarkan struktur adat ke dalam 3 (tiga) Desa Pakraman:',
        pakramans: [
          'Desa Pakraman Tianyar',
          'Desa Pakraman Paleg Kaja',
          'Desa Pakraman Paleg Kelod'
        ],
        note: 'Desa Pakraman (Desa Adat) berperan penting dalam menjaga kearifan lokal, tata upacara adat, dan pelestarian budaya Bali yang telah diwariskan secara turun-temurun. Fungsi adat ini bersinergi dengan pemerintahan desa dalam menjaga keharmonisan dan ketertiban masyarakat.'
      }
    },
    services: {
      title: 'Layanan Desa',
      subtitle: 'Pelayanan yang tersedia untuk warga Desa Tianyar',
      items: [
        {
          title: 'Pelayanan Administrasi',
          description: 'Layanan surat-menyurat dan administrasi kependudukan untuk warga',
          icon: '📋',
          schedule: 'Senin - Jumat, 08:00 - 15:00 WITA'
        },
        {
          title: 'Posyandu & Kesehatan',
          description: 'Pelayanan kesehatan dasar dan pemeriksaan rutin untuk ibu dan anak',
          icon: '🏥',
          schedule: 'Setiap Rabu, 09:00 - 12:00 WITA'
        },
        {
          title: 'Pemberdayaan UMKM',
          description: 'Program pelatihan dan bantuan modal untuk pengembangan usaha lokal',
          icon: '💼',
          schedule: 'Setiap bulan'
        }
      ]
    },
    videoProfile: {
      title: 'Tentang Desa Tianyar',
      description1: 'Desa Tianyar terletak di Kecamatan Kubu, Kabupaten Karangasem. Desa ini punya pantai, bukit, dan pemandangan laut yang bagus untuk wisata.',
      description2: 'Luas desa 847 hektar dengan 3.247 penduduk yang terbagi dalam 4 banjar. Warga bekerja sebagai petani, nelayan, dan punya usaha kecil.',
      description3: 'Desa terus mengembangkan wisata dan usaha lokal untuk kesejahteraan warga sambil menjaga alam dan budaya setempat.',
      stats: {
        area: 'Hektar Luas Wilayah',
        banjars: 'Banjar',
        population: 'Penduduk',
        families: 'Keluarga'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      tourism: 'Tourism',
      umkm: 'Local Business',
      accommodation: 'Accommodation',
      banjar: 'Banjar',
      gallery: 'Gallery'
    },
    hero: {
      welcome: 'Welcome to',
      village: 'Tianyar Village',
      subtitle: 'Exploring the Natural Beauty, Culture, and Authentic Balinese Traditions',
      exploreVillage: 'Explore Village',
      seeTourism: 'See Tourism'
    },
    history: {
      title: 'History of Tianyar Village',
      subtitle: 'Historical Traces and Preserved Cultural Heritage',
      origin: {
        title: 'Village Origins',
        description: 'Tianyar Village is one of the old villages located at the western tip of Karangasem Regency, Bali. Geographically, this village borders directly with Buleleng Regency. Before the regional expansion, Tianyar Village was still one administrative unit known as Tianyar Village.'
      },
      nameOrigin: {
        title: 'Origin of the Name "Tianyar"',
        story1: 'According to the village elders, in ancient times — also called duk tan hana paran-paran (before civilization) — came a powerful Maha Rsi named Pedanda Sakti Bau Rauh (or Wau Rauh). He was a holy messenger from the Majapahit Kingdom who came to perform tapa brata or yoga samadhi.',
        story2: 'At that time, Tianyar Village experienced extreme drought and water difficulties. So, Maha Rsi Bau Rauh prayed to Ida Sanghyang Widhi Wasa (God Almighty) to be blessed with holy water that could be used for melasti the gods after the piodalan ceremony.'
      },
      lake: {
        title: 'Telaga Ngembeng or Toya Anyar',
        meaning: 'Toya = Water, Anyar = New/Sacred',
        evolution: 'Over time, the name "Toya Anyar" underwent sound elision and changed to "Tianyar", the name known today. The lake is now covered with sand due to the eruption of Mount Agung in 1963, but its traces still exist in the Banjar Dinas Taman Sari area, West Tianyar Village.'
      },
      government: {
        title: 'Government History',
        eraTitle: 'Perbekelan Era (1931-1942)',
        kelodan: {
          title: 'Perbekelan Tianyar Kelodan',
          leader: 'Perbekel: Jro Ketut Gunung',
          areas: 'Banjar: Bila Kelodan, Bila Kaleran, Getas, Paleg, Munti Gunung'
        },
        kaleran: {
          title: 'Perbekelan Tianyar Kaleran',
          leader: 'Perbekel: Jro Mangku Rai',
          areas: 'Banjar: Duran Pasar, Pedahan Kaja, Pedahan Kelod, Penginyahan, Culik, Pande'
        },
        leadersTitle: 'List of Perbekel/Village Heads',
        leaders: [
          { name: 'I Made Cepug', period: 'until 1972' },
          { name: 'I Ketut Mangun Seraya', period: '1972–1982' },
          { name: 'I Gede Tantra (Acting)', period: '1982–1983' },
          { name: 'I Wayan Dora', period: '1983–1985' },
          { name: 'I Ketut Alit', period: '1985–1995' },
          { name: 'Drs. I Made Sukarata', period: '1995–2008' },
          { name: 'I Gede Suadi, SH', period: '2008–2014' },
          { name: 'Drs. I Ketut Wija', period: '2016–present' }
        ],
        expansion: {
          title: 'Village Expansion (1982)',
          villages: [
            { name: 'Tianyar Village (Main)', areas: 'Dharma Winangun, Eka Adnyana, Tunas Sari, Paleg' },
            { name: 'Central Tianyar Village', areas: 'Munti Desa, Penginyahan, Pedahan Kaja, Pedahan Kelod' },
            { name: 'West Tianyar Village', areas: 'Kerta Buana, Taman Sari, Munti Gunung, Tegal Sari' }
          ]
        }
      }
    },
    profile: {
      title: 'Tianyar Village Regional Profile',
      subtitle: 'Western Gateway of Karangasem Regency',
      geography: {
        title: 'Area and Geographic Location',
        description: 'Tianyar Village is one of 68 villages and 4 sub-districts in Karangasem Regency, Bali Province. This village has a strategic role as the westernmost gateway of Karangasem Regency, as well as an area rich in natural, cultural, and historical potential.',
        areaUnit: 'Hectares of Area',
        areaDescription: 'Stretching from south to north with various topographical characteristics, from hills to coastal areas.',
        bordersTitle: 'Tianyar Village Boundaries:',
        borders: {
          north: { direction: 'North', area: 'Java Sea' },
          south: { direction: 'South', area: 'Ban Village & Bangli Regency' },
          east: { direction: 'East', area: 'Sukadana Village' },
          west: { direction: 'West', area: 'Central Tianyar Village' }
        },
        potential: 'This geographical location makes Tianyar Village an area with marine and fishery potential on the north side and agricultural and tourism potential in the southern region.'
      },
      administrative: {
        title: 'Administrative Division',
        description: 'Administratively, Tianyar Village is divided into 4 (four) Banjar Dinas:',
        banjars: [
          'Banjar Dinas Dharma Winangun',
          'Banjar Dinas Eka Adnyana',
          'Banjar Dinas Tunas Sari',
          'Banjar Dinas Paleg'
        ],
        note: 'Each Banjar Dinas has its own characteristics and potential, both socially, economically, and culturally. This division makes it easier for village government to manage public services and implement development evenly.'
      },
      traditional: {
        title: 'Traditional Area Division',
        description: 'In addition to administratively, Tianyar Village is also divided based on traditional structure into 3 (three) Pakraman Villages:',
        pakramans: [
          'Pakraman Tianyar Village',
          'Pakraman Paleg Kaja Village',
          'Pakraman Paleg Kelod Village'
        ],
        note: 'Pakraman Village (Traditional Village) plays an important role in maintaining local wisdom, traditional ceremonies, and preserving Balinese culture that has been passed down from generation to generation. This traditional function synergizes with village government in maintaining community harmony and order.'
      }
    },
    services: {
      title: 'Village Services',
      subtitle: 'Services available for Tianyar Village residents',
      items: [
        {
          title: 'Administrative Services',
          description: 'Document services and population administration for residents',
          icon: '📋',
          schedule: 'Monday - Friday, 08:00 - 15:00 WITA'
        },
        {
          title: 'Posyandu & Health',
          description: 'Basic health services and routine check-ups for mothers and children',
          icon: '🏥',
          schedule: 'Every Wednesday, 09:00 - 12:00 WITA'
        },
        {
          title: 'UMKM Empowerment',
          description: 'Training programs and capital assistance for local business development',
          icon: '💼',
          schedule: 'Monthly'
        }
      ]
    },
    videoProfile: {
      title: 'About Tianyar Village',
      description1: 'Tianyar Village is located in Kubu District, Karangasem Regency. This village has beaches, hills, and beautiful sea views for tourism.',
      description2: 'The village area is 847 hectares with 3,247 residents divided into 4 banjars. Residents work as farmers, fishermen, and have small businesses.',
      description3: 'The village continues to develop tourism and local businesses for the welfare of residents while preserving local nature and culture.',
      stats: {
        area: 'Hectares of Area',
        banjars: 'Banjars',
        population: 'Population',
        families: 'Families'
      }
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'id' | 'en'>('en');

  useEffect(() => {
    // Try to detect user's country/language preference
    const detectLanguage = () => {
      // Check if user has a saved preference
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
        return savedLang as 'id' | 'en';
      }

      // Try to detect from browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('id') || browserLang.includes('indonesia')) {
        return 'id';
      }

      // Default to English
      return 'en';
    };

    setLanguage(detectLanguage());
  }, []);

  const handleSetLanguage = (lang: 'id' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      translations 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}