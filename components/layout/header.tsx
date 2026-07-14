'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Bell, Search, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/config/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { BreadcrumbItem } from '@/types';

function buildBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const allItems = navigation.flatMap((g) => g.items);
  const current = allItems.find((item) => item.href === pathname);
  const crumbs: BreadcrumbItem[] = [{ title: 'Home', href: '/dashboard' }];
  if (current && current.href !== '/dashboard') {
    crumbs.push({ title: current.title });
  }
  return crumbs;
}

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/projects': 'Projects',
  '/analyze-business': 'Analyze Business',
  '/business-review': 'Business Review',
  '/campaign-builder': 'Campaign Builder',
  '/campaign-generation': 'Campaign Generation',
  '/keywords': 'Keywords',
  '/history': 'History',
  '/templates': 'Templates',
  '/settings': 'Settings',
};

const mockNotifications = [
  { id: '1', title: 'Campaign draft ready', description: 'Your campaign has been processed.', read: false },
  { id: '2', title: 'Template updated', description: 'Search template v2 is now available.', read: false },
  { id: '3', title: 'Export complete', description: 'Q4 campaigns exported successfully.', read: true },
];

export function Header() {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);
  const pageTitle = pageTitles[pathname] ?? 'Page';
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <header className="flex h-[var(--header-height)] items-center justify-between border-b border-border bg-background px-4 lg:px-6">
      {/* Left: Breadcrumb + Title */}
      <div className="flex flex-col justify-center gap-0.5 min-w-0">
        <nav className="flex items-center gap-1">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground/50" />}
              {crumb.href && index < breadcrumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {crumb.title}
                </Link>
              ) : (
                <span className="text-xs text-muted-foreground">{crumb.title}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="text-sm font-semibold text-foreground leading-none">{pageTitle}</h1>
      </div>

      {/* Right: Search + Actions */}
      <div className="flex items-center gap-2">
        {/* Global Search */}
        <div className="relative hidden md:flex">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="h-8 w-52 pl-8 text-xs bg-muted/40 border-border focus-visible:ring-1 focus-visible:ring-primary/50"
            readOnly
          />
          <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden select-none items-center gap-0.5 rounded border border-border bg-muted px-1 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            ⌘K
          </kbd>
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-primary" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              {unreadCount > 0 && (
                <Badge variant="secondary" className="text-[10px] h-4">
                  {unreadCount} new
                </Badge>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {mockNotifications.map((n) => (
              <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-0.5 py-2.5 cursor-pointer">
                <div className="flex w-full items-center justify-between gap-2">
                  <span className={cn('text-xs font-medium', !n.read && 'text-foreground')}>
                    {n.title}
                  </span>
                  {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />}
                </div>
                <span className="text-[11px] text-muted-foreground">{n.description}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-xs text-muted-foreground cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 gap-2 px-1.5 hover:bg-muted">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" alt="User" />
                <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">PA</AvatarFallback>
              </Avatar>
              <span className="hidden text-xs font-medium text-foreground lg:block">Alex Johnson</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold">Alex Johnson</span>
                <span className="text-[11px] text-muted-foreground">alex@company.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-xs cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuItem className="text-xs cursor-pointer">Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs text-destructive cursor-pointer">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
