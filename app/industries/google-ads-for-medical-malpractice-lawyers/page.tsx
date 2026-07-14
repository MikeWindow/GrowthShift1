import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { medicalMalpracticeLawyersData } from '@/config/industries/medical-malpractice-lawyers';

export const metadata: Metadata = {
  title: medicalMalpracticeLawyersData.title,
  description: medicalMalpracticeLawyersData.metaDescription,
  openGraph: {
    title: medicalMalpracticeLawyersData.title,
    description: medicalMalpracticeLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={medicalMalpracticeLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
