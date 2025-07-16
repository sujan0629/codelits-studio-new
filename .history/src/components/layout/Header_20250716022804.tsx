"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Code, Menu, Briefcase, Users, FileText, PencilLine, Phone, Bot, ArrowRight, Wrench } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import gsap from "gsap";

const navLinks = [
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/admin/portfolio/new', label: 'Beta AI Tools', icon: Bot },
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
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const sheetContentRef = useRef(null);

  // Header scroll animation (unchanged)
  useEffect(() => {
    const header = headerRef.current;
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for mobile menu open/close
  useEffect(() => {
    if (isOpen && sheetContentRef.current) {
      // Animate from right, fade and scale up
      gsap.fromTo(
        sheetContentRef.current,
        { x: '100%', opacity: 0, scale: 0.95 },
        { x: '0%', opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else if (!isOpen && sheetContentRef.current) {
      // Animate closing - slide out to right
      gsap.to(sheetContentRef.current, {
        x: '100%',
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full p-2 md:p-4">
      <div
        ref={headerRef}
        className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4"
      >
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logos/logo.png"
            alt="CodeLits Studio Logo"
            className="h-24 w-24 md:h-36 md:w-36 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          {/* SaaS Hub as 4th item */}
          <a
            href="https://saas.codelitsstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="saas-hub-shimmer"
          >
            SaaS Hub
          </a>

          {navLinks.slice(3).map((link) => (
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
            <Link href="/contact">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            {/* Full screen SheetContent with GSAP animation */}
           <SheetContent
  ref={sheetContentRef}
  side="right"
  className="fixed top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-6 backdrop-blur-lg z-50 flex flex-col"
  onClick={(e) => e.stopPropagation()}
>
  {/* Required for accessibility */}
  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

  {/* Header */}
  <div className="flex justify-between items-center mb-12">
    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
      <Code className="h-8 w-8 text-indigo-400" />
      <span className="font-headline text-2xl font-bold text-indigo-300">
        CodeLits Studio
      </span>
    </Link>
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(false)}
      aria-label="Close menu"
      className="text-indigo-300 hover:text-indigo-100"
    >
      ×
    </Button>
  </div>

  {/* Links */}
  <nav className="flex flex-col gap-8">
    {mobileNavLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-4 rounded-lg px-4 py-3 text-2xl font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white transition"
      >
        <link.icon className="h-7 w-7 text-indigo-400" />
        <span>{link.label}</span>
      </Link>
    ))}
  </nav>

  {/* Footer */}
  <div className="mt-auto pt-12 text-indigo-400 text-center text-sm select-none opacity-60">
    © 2025 CodeLits Studio Pvt. Ltd.
  </div>
</SheetContent>

          </Sheet>
        </div>
      </div>
    </header>
  );
}
