export type NavItem = {
  title: string;
  href: string;
  icon: string;
  badge?: number;
  disabled?: boolean;
};

export type NavGroup = {
  title?: string;
  items: NavItem[];
};

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

export type StatCard = {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  description: string;
};

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  campaigns: number;
  spend: string;
  updatedAt: string;
};

export type ProjectStatus = 'active' | 'paused' | 'draft' | 'archived';

export type ActivityItem = {
  id: string;
  type: 'campaign_created' | 'campaign_updated' | 'project_created' | 'template_used';
  title: string;
  description: string;
  timestamp: string;
  user: string;
};

export type Template = {
  id: string;
  name: string;
  description: string;
  category: string;
  usageCount: number;
  tags: string[];
};

export type HistoryEntry = {
  id: string;
  type: string;
  title: string;
  details: string;
  status: 'success' | 'failed' | 'pending';
  timestamp: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  description: string;
  read: boolean;
  timestamp: string;
};

export type BusinessProfile = {
  name: string;
  industry: string;
  primaryService: string;
  secondaryServices: string[];
  targetCustomers: string[];
  serviceAreas: string[];
  trustSignals: string[];
  primaryCta: string;
  phone: string;
  landingPage: string;
};

export type CampaignConfig = {
  name: string;
  type: string;
  goal: string;
  conversionType: string;
  network: string;
  language: string;
  locations: string;
  budget: string;
  biddingStrategy: string;
  customerAcquisition: string;
  adSchedule: string;
  startDate: string;
};
