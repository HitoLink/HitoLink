import type { MetadataRoute } from 'next';

// TODO: 本番ドメインが確定したら差し替える
const SITE_URL = 'https://hitolink.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
