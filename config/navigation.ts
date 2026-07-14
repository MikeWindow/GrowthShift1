import type { NavGroup } from '@/types';

export const siteConfig = {
  name: 'GrowthShift',
  description: 'AI-powered Google Ads automation platform that builds, optimizes, and manages campaigns automatically.',
  version: '0.1.0',
} as const;

export const navigation: NavGroup[] = [
  {
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: 'LayoutDashboard' },
      { title: 'Projects', href: '/projects', icon: 'FolderOpen' },
      { title: 'Analyze Business', href: '/analyze-business', icon: 'ScanSearch' },
      { title: 'Campaign Builder', href: '/campaign-builder', icon: 'Wand2' },
    ],
  },
  {
    title: 'Content',
    items: [
      { title: 'History', href: '/history', icon: 'History' },
      { title: 'Templates', href: '/templates', icon: 'FileText' },
    ],
  },
  {
    title: 'System',
    items: [
      { title: 'Settings', href: '/settings', icon: 'Settings' },
    ],
  },
];
