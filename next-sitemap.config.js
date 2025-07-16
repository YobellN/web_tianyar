/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://desatianyar.id',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*'],
  additionalPaths: async (config) => {
    const wisataData = [
      'pantai-tianyar',
      'savana-tianyar', 
      'kampung-inggris-tianyar',
      'konservasi-terumbu-karang',
      'pura-segara-tianyar',
      'embung-tianyar',
      'bukit-batu-kursi-tianyar',
      'pusat-budaya-tianyar',
      'spot-sunrise-seraya'
    ];

    return wisataData.map((id) => ({
      loc: `/wisata/${id}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1
      }
    ],
    additionalSitemaps: [
      'https://desatianyar.id/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Prioritas khusus untuk halaman penting
    const priorities = {
      '/': 1.0,
      '/wisata': 0.9,
      '/umkm': 0.8,
      '/banjar': 0.7,
    };

    const changefreqs = {
      '/': 'daily',
      '/wisata': 'weekly',
      '/umkm': 'weekly',
      '/banjar': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || 'monthly',
      priority: priorities[path] || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};