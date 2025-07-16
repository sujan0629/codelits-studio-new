'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  Bot,
  Image,
  Pilcrow,
  Search,
  Settings,
  User,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

const mainNav = [
  { href: '/admin/portfolio-copy', label: 'Portfolio Copy', icon: Pilcrow, active: true },
  { href: '#', label: 'Image Brief', icon: Image, active: false },
  { href: '#', label: 'SEO Keywords', icon: Search, active: false },
  { href: '#', label: 'Brand Voice', icon: Bot, active: false },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full bg-muted/40">
        {/* Sidebar - fixed overlay on mobile, static on desktop */}
 <aside
  className={cn(
    'fixed inset-y-0 left-0 z-40 w-28 border-r bg-background sm:static sm:h-screen sm:flex sm:flex-col transition-transform duration-300 ease-in-out',
    {
      '-translate-x-full': !sidebarOpen,
      'translate-x-0': sidebarOpen,
      // Remove 'hidden' from here, so it can slide in/out on mobile
      // 'hidden sm:flex': true, <-- REMOVE this line
      'sm:flex': true,
    }
  )}
  aria-label="Sidebar navigation"
>
          {/* Top bar with back and close */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Link
              href="/ai"
              className="flex items-center gap-2 rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-muted/30 transition"
              onClick={() => setSidebarOpen(false)}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="truncate">Back</span>
            </Link>
            <button
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted/30"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col items-center gap-6 px-2 py-6 flex-1">
            <Link
              href="/admin"
              className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
              aria-label="CodeLits AI Home"
              onClick={() => setSidebarOpen(false)}
            >
              <Bot className="h-6 w-6" />
            </Link>

            {mainNav.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.active ? item.href : '#'}
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-200 md:h-10 md:w-10',
                      {
                        'bg-accent text-accent-foreground': pathname === item.href,
                        'text-muted-foreground hover:text-foreground hover:bg-muted/20': pathname !== item.href,
                        'cursor-not-allowed opacity-50': !item.active,
                      }
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-sm font-medium">
                  {item.label}
                  {!item.active && (
                    <Badge variant="secondary" className="ml-2 text-xs px-1 py-0.5">
                      Coming Soon
                    </Badge>
                  )}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>

          <nav className="mt-auto flex flex-col items-center gap-6 px-2 py-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/20 md:h-10 md:w-10"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Settings className="h-6 w-6" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-sm font-medium">
                Settings
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>

        {/* Backdrop overlay for mobile when sidebar open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 sm:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6 sm:h-auto sm:border-0 sm:bg-transparent sm:py-4">
            <div className="flex items-center gap-3">
              {/* Hamburger menu for mobile */}
              <button
                className="sm:hidden flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted/30 focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Open sidebar"
                onClick={toggleSidebar}
                type="button"
              >
                <Menu className="h-6 w-6" />
              </button>

              <Link href="/ai" className="flex items-center gap-2">
                <img
                  src="/logos/logo.png"
                  alt="Logo"
                  className="h-10 w-10 object-contain sm:h-14 sm:w-14 cursor-pointer"
                />
                <h1 className="hidden font-headline text-lg font-semibold tracking-tight sm:block">
                  AI Assistant Dashboard
                </h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <User className="h-5 w-5" />
                <span className="sr-only">User Account</span>
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
