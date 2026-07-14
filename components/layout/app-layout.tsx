'use client';

import { Sidebar } from './sidebar';
import { Header } from './header';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { collapsed, toggle } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} onToggle={toggle} />

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main
          className={cn(
            'flex-1 overflow-y-auto bg-muted/20',
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
