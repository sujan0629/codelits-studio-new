"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Code,
  Briefcase,
  Wrench,
  FileText,
  PencilLine,
  Users,
  Phone,
  Bot,
  Menu,
} from "lucide-react";

const mobileNavLinks = [
  { href: "/portfolio", label: "Work", icon: Briefcase },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/process", label: "Process", icon: FileText },
  { href: "/blog", label: "Blog", icon: PencilLine },
  { href: "/team", label: "About Us", icon: Users },
  { href: "/admin/portfolio/new", label: "AI Tool", icon: Bot },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sheetContentRef = useRef(null);

  // Entrance GSAP animation
  useEffect(() => {
    const el = sheetContentRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.fromTo(
        el,
        { x: "100%", autoAlpha: 0, scale: 0.98 },
        { x: "0%", autoAlpha: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

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
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg px-4 py-2 md:hidden">
      <div className="flex justify-between items-center">
        {/* Logo on left */}
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-white" />
          <span className="text-white font-bold text-base">CodeLits</span>
        </Link>

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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="text-white hover:text-white/80 text-xl"
              >
                ×
              </Button>
            </div>

            {/* Navigation */}
            <nav className="grid grid-cols-1 gap-4 text-sm text-white">
              {mobileNavLinks.map((link) => (
            <Link
  key={link.href}
  href={link.href}
  onClick={() => setIsOpen(false)}
  className="nav-click-anim flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-all"
>
  <link.icon className="h-4 w-4 text-indigo-300" />
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
    </header>
  );
}
