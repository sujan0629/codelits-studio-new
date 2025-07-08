"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code, Menu, Briefcase, Users, FileText, PencilLine, Phone, Bot } from 'lucide-react';
import React from 'react';

const navLinks = [
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/services', label: 'Services', icon: Users },
  { href: '/process', label: 'Process', icon: FileText },
  { href: '/blog', label: 'Blog', icon: PencilLine },
  { href: '/contact', label: 'Contact', icon: Phone },
  { href: '/admin/portfolio/new', label: 'AI Tool', icon: Bot },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">CodeLits Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                 <Link href="/" className="flex items-center gap-2 mb-8">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-bold">CodeLits Studio</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-md p-2 text-lg font-medium hover:bg-accent"
                    >
                      <link.icon className="h-5 w-5 text-primary" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
