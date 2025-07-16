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
import { Bot, Image, Pilcrow, Search, Settings, User, ArrowLeft } from 'lucide-react';
import React from 'react';

const mainNav = [
  { href: '/admin/portfolio-copy', label: 'Portfolio Copy', icon: Pilcrow, active: true },
  { href: '#', label: 'Image Brief', icon: Image, active: false },
  { href: '#', label: 'SEO Keywords', icon: Search, active: false },
  { href: '#', label: 'Brand Voice', icon: Bot, active: false },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full bg-muted/40">
        <aside className="sticky top-0 hidden h-screen w-28 flex-col border-r bg-background sm:flex">
          {/* Back Button at top */}
          <div className="flex items-center justify-center border-b px-4 py-3">
            <Link
              href="/admin"
              className="flex items-center gap-2 rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-muted/30 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="truncate">Back</span>
            </Link>
          </div>

          <nav className="flex flex-col items-center gap-6 px-2 py-6">
            {/* Logo / Home */}
            <Link
              href="/admin"
              className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
              aria-label="CodeLits AI Home"
            >
              <Bot className="h-6 w-6" />
            </Link>

            {/* Nav Items */}
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

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-6 sm:h-auto sm:border-0 sm:bg-transparent sm:py-4">
           <div className="flex items-center gap-3">
  <img
    src="/logos/logo.png" // Make sure this file exists in /public
    alt="Logo"
    className="h-7 w-7 object-contain"
  />
  <h1 className="font-headline text-lg font-semibold tracking-tight">
    AI Assistant Dashboard
  </h1>
</div>


            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <User className="h-5 w-5" />
                <span className="sr-only">User Account</span>
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
