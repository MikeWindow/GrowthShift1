import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/projects',
          '/settings',
          '/history',
          '/templates',
          '/keywords',
          '/analyze-business',
          '/business-review',
          '/campaign-builder',
          '/campaign-generation',
        ],
      },
    ],
    sitemap: 'https://growthshiftapp.vercel.app/sitemap.xml',
  };
}
