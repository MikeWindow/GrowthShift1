'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderOpen,
  Wand2,
  History,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ScanSearch,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/config/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  FolderOpen,
  Wand2,
  History,
  FileText,
  Settings,
  ScanSearch,
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          'relative flex h-full flex-col border-r border-border bg-background sidebar-transition overflow-hidden',
          collapsed ? 'w-[var(--sidebar-width-collapsed)]' : 'w-[var(--sidebar-width)]'
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            'flex h-[var(--header-height)] items-center border-b border-border px-4',
            collapsed ? 'justify-center' : 'gap-3'
          )}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary">
            <TrendingUp className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold tracking-tight text-foreground slide-in-left">
              GrowthShift
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto py-4 px-2">
          {navigation.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-0.5">
              {group.title && !collapsed && (
                <span className="mb-1 px-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  {group.title}
                </span>
              )}
              {group.items.map((item) => {
                const Icon = iconMap[item.icon];
                const isActive = pathname === item.href;

                const linkContent = (
                  <Link
                    href={item.href}
                    className={cn(
                      'group flex h-8 items-center gap-2.5 rounded-md px-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      collapsed && 'justify-center px-0 w-full',
                      item.disabled && 'pointer-events-none opacity-50'
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn(
                          'h-4 w-4 shrink-0 transition-colors',
                          isActive
                            ? 'text-primary'
                            : 'text-muted-foreground group-hover:text-foreground'
                        )}
                      />
                    )}
                    {!collapsed && (
                      <span className="truncate">{item.title}</span>
                    )}
                    {!collapsed && item.badge !== undefined && (
                      <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-primary/10 px-1 text-[10px] font-medium text-primary">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );

                if (collapsed) {
                  return (
                    <Tooltip key={item.href}>
                      <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                      <TooltipContent side="right" className="text-xs">
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return <div key={item.href}>{linkContent}</div>;
              })}
            </div>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <div className="border-t border-border p-2">
          <button
            onClick={onToggle}
            className={cn(
              'flex h-8 w-full items-center gap-2 rounded-md px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              collapsed && 'justify-center px-0'
            )}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </TooltipProvider>
  );
}
