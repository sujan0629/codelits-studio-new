"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code, Menu, Briefcase, Users, FileText, PencilLine, Phone, Bot, ArrowRight, Wrench } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import gsap from "gsap";

useEffect(() => {
  const header = headerRef.current;
  let lastY = 0;
  let isActive = false;

  const showHeader = () => {
    gsap.to(header, {
      y: 10,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(6px)',
      ease: "power2.out",
      duration: 0.5,
      delay: 0.1,
    });
    isActive = true;
  };

  const hideHeader = () => {
    gsap.to(header, {
      y: 0,
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      backdropFilter: 'blur(0px)',
      ease: "power2.out",
      duration: 0.5,
      delay: 0.1,
    });
    isActive = false;
  };

  const handleScroll = () => {
    const currentY = window.scrollY;
    if (currentY > 20 && !isActive) showHeader();
    else if (currentY <= 20 && isActive) hideHeader();
    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const navLinks = [
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'About Us' },
];

const mobileNavLinks = [
  { href: '/portfolio', label: 'Work', icon: Briefcase },
  { href: '/services', label: 'Services', icon: Wrench },
  { href: '/process', label: 'Process', icon: FileText },
  { href: '/blog', label: 'Blog', icon: PencilLine },
  { href: '/team', label: 'About Us', icon: Users },
  { href: '/admin/portfolio/new', label: 'AI Tool', icon: Bot },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header  className="sticky top-0 z-50 w-full p-2 md:p-4 transition-all duration-300">
      <div
        ref={headerRef}
        className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 transition-all duration-300 ease-in-out"
      >
        <Link href="/" className="flex items-center gap-2">
  <img src="/logos/logo.png" alt="CodeLits Studio Logo" className="h-36 w-36 object-contain" />
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
        
        <div className="hidden md:flex items-center gap-4">
             <Button asChild>
                <Link href="/contact">Let's Talk <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>


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
                 <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsOpen(false)}>
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-bold">CodeLits Studio</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {mobileNavLinks.map((link) => (
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
