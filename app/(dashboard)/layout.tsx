import { AppLayout } from '@/components/layout/app-layout';
import { WorkflowProvider } from '@/contexts/workflow-context';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <WorkflowProvider>
      <AppLayout>{children}</AppLayout>
    </WorkflowProvider>
  );
}
