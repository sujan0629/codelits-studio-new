
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Bot, Image, Pilcrow, Search, Settings, User } from 'lucide-react';
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
        <div className="flex min-h-screen w-full bg-muted/40">
            <aside className="sticky top-0 hidden h-screen w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="/admin"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Bot className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">CodeLits AI</span>
                    </Link>
                    {mainNav.map((item) => (
                         <Tooltip key={item.label}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.active ? item.href : '#'}
                                    className={cn(
                                        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8",
                                        {
                                            "bg-accent text-accent-foreground": pathname === item.href,
                                            "text-muted-foreground hover:text-foreground": pathname !== item.href,
                                            "cursor-not-allowed opacity-50": !item.active
                                        }
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span className="sr-only">{item.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                {item.label}
                                {!item.active && <Badge variant="secondary" className="ml-2">Coming Soon</Badge>}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:py-4">
                    <div className="flex items-center gap-2">
                        <Bot className="h-6 w-6 text-primary" />
                        <h1 className="font-headline text-xl font-semibold">AI Assistant Dashboard</h1>
                    </div>
                     <div className="ml-auto flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <User className="h-4 w-4" />
                            <span className="sr-only">User Account</span>
                        </Button>
                    </div>
                </header>
                <main className="flex-1 p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
