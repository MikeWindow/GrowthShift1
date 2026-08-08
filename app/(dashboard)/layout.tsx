import type { Metadata } from 'next';
import { AppLayout } from '@/components/layout/app-layout';
import { WorkflowProvider } from '@/contexts/workflow-context';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <WorkflowProvider>
      <AppLayout>{children}</AppLayout>
    </WorkflowProvider>
  );
}
