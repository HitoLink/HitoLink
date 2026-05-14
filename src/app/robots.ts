import type { MetadataRoute } from 'next';

// TODO: 本番ドメインが確定したら差し替える
const SITE_URL = 'https://hitolink.example.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
