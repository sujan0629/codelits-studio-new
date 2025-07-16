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
useEffect(() => {
  const links = gsap.utils.toArray<HTMLElement>(".nav-click-anim");

  links.forEach((el) => {
    const handleClick = () => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.1,
          ease: "power1.out",
          onComplete: () => {
            gsap.to(el, {
              scale: 0,
              duration: 0.4,
              ease: "back.in(1.7)",
            });
          },
        }
      );
    };

    el.addEventListener("click", handleClick);
    (el as any)._clickAnim = handleClick;
  });

  return () => {
    links.forEach((el) => {
      const handler = (el as any)._clickAnim;
      if (handler) {
        el.removeEventListener("click", handler);
      }
    });
  };
}, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full p-2 md:p-4">
      <div
        ref={headerRef}
        className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4"
      >
        <Link href="/" className="flex items-center gap-2">
<img src="/logos/logo.png" alt="CodeLits Studio Logo" className="h-24 w-24 md:h-36 md:w-36 object-contain" />
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
            <Link href="/contact">Let's Talk <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="md:hidden">
         
        {/* Hamburger menu on right */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle navigation menu"
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          {/* Full-screen sheet */}
          <SheetContent
            ref={sheetContentRef}
            side="right"
            className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-md p-6 z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <SheetTitle className="sr-only">
              Mobile Navigation Menu
            </SheetTitle>

            {/* Header inside Sheet */}
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Code className="h-6 w-6 text-white" />
                <span className="text-white font-bold text-sm">
                  CodeLits Studio
                </span>
              </Link>
    
            </div>

            {/* Navigation */}
            <nav className="grid grid-cols-1 gap-4 text-sm text-white">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="wiggle-link flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-all"
                >
                  <link.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 text-white/60 text-center text-xs select-none">
              © 2025 CodeLits Studio Pvt. Ltd.
            </div>
          </SheetContent>

          </Sheet>
        </div>
      </div>
    </header>
  );
}
