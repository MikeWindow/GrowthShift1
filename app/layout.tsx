import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://growthshiftapp.vercel.app'),

  title: {
    default: 'GrowthShift — AI Google Ads Automation Platform',
    template: '%s | GrowthShift',
  },

  description:
    'GrowthShift is the AI-powered Google Ads automation platform that builds, optimizes, and manages your campaigns automatically. Lower CPA, more conversions, less manual work.',

  applicationName: 'GrowthShift',

  authors: [{ name: 'GrowthShift' }],

  creator: 'GrowthShift',

  publisher: 'GrowthShift',

  keywords: [
    'Google Ads automation',
    'AI Google Ads management',
    'PPC management software',
    'Google Ads optimization',
    'PPC reporting software',
    'Google Ads audit',
    'negative keyword generator',
    'AI ads manager',
    'Google Ads agency alternative',
  ],

  openGraph: {
    type: 'website',
    url: 'https://growthshiftapp.vercel.app',
    siteName: 'GrowthShift',
    title: 'GrowthShift — AI Google Ads Automation Platform',
    description:
      'AI-powered Google Ads automation that builds, optimizes, and manages campaigns automatically. Lower CPA, more conversions, less manual work.',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'GrowthShift — AI Google Ads Automation',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GrowthShift — AI Google Ads Automation Platform',
    description:
      'AI-powered Google Ads automation that builds, optimizes, and manages campaigns automatically.',
    images: ['/icon.svg'],
  },

  icons: {
    icon: '/icon.svg',
  },

  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="xKJRjzV4hjHDWONkfxglVMtigMIfbN-cGvqeBuMDW0s"
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
