import type { MetadataRoute } from 'next';
import { INDUSTRIES } from '@/config/industries';

const BASE_URL = 'https://growthshiftapp.vercel.app';

const COMMERCIAL_PAGES = [
  '/google-ads-automation',
  '/ai-google-ads-management',
  '/google-ads-optimization-software',
  '/ppc-management-software',
  '/ppc-reporting-software',
  '/google-ads-ai-manager',
  '/google-ads-agency-alternative',
  '/google-ads-audit',
  '/tools/negative-keyword-generator',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  };

  const commercialPages: MetadataRoute.Sitemap = COMMERCIAL_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${BASE_URL}${industry.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [homepage, ...commercialPages, ...industryPages];
}
