import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GrowthShift — AI Google Ads Automation Platform',
    short_name: 'GrowthShift',
    description:
      'AI-powered Google Ads automation that builds, optimizes, and manages campaigns automatically.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#10b981',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
