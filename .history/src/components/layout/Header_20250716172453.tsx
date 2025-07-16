"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import {
  Briefcase, Wrench, FileText, PencilLine, Users,
  Phone, Bot, ArrowRight, X, Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const workComponents = [
  { title: "Client Work", href: "/portfolio/client-work", description: "Explore our successful collaborations and impactful solutions." },
  { title: "Research & Development", href: "/portfolio/research", description: "Our experiments where we explore new technologies." },
  { title: "Design Philosophy", href: "/portfolio/design", description: "A deep dive into our design principles and methodologies." },
  { title: "Partnerships", href: "/portfolio/partnerships", description: "Learn about our trusted partners and synergistic relationships." },
];

const serviceComponents = [
  { title: "Web Development", href: "/services/web-development", description: "High-performance, secure, and scalable web solutions." },
  { title: "UI/UX Design", href: "/services/ux-ui-design", description: "Human-centered design that is intuitive and accessible." },
  { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Engaging native and cross-platform mobile applications." },
  { title: "E-commerce Solutions", href: "/services/e-commerce-solutions", description: "Robust e-commerce platforms for a seamless shopping experience." },
  { title: "AI & ML Solutions", href: "/services/ai-ml-solutions", description: "Unlock data-driven insights and automate processes." },
  { title: "Cloud & DevOps", href: "/services/cloud-devops", description: "Streamlining development with modern cloud infrastructure." },
];

const aboutComponents = [
  { title: "About Us", href: "/team", description: "Meet the passionate creators, thinkers, and innovators." },
  { title: "Our Process", href: "/process", description: "How we turn great ideas into exceptional products." },
  { title: "Blog", href: "/blog", description: "Read our latest articles, insights, and news." },
];

const aiComponents = [
  { title: "Documentation", href: "#", description: "Explore comprehensive guides and API references for our tools." },
  { title: "Pricing", href: "#", description: "Find the perfect plan that fits your needs and budget." },
  { title: "Resources", href: "#", description: "Access tutorials, case studies, and helpful resources." },
  { title: "Tool Dashboard", href: "/admin", description: "Go directly to the AI dashboard to start creating." },
];

const mobileNavLinks = [
  { href: '/portfolio', label: 'Work', icon: Briefcase },
  { href: '/services', label: 'Services', icon: Wrench },
  { href: '/process', label: 'Process', icon: FileText },
  { href: '/blog', label: 'Blog', icon: PencilLine },
  { href: '/team', label: 'About Us', icon: Users },
  { href: '/ai', label: 'AI Tools', icon: Bot },
  { href: '/contact', label: 'Contact', icon: Phone },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: React.ReactNode }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export function Header() {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isAdminRoute = pathname?.startsWith('/admin');

  useEffect(() => {
    const header = headerRef.current;
    let isActive = false;

    const showHeader = () => {
      gsap.to(header, {
        y: 10,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(6px)',
        ease: 'power2.out',
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
        ease: 'power2.out',
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAdminRoute) return null;

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
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    {workComponents.map((item) => (
                      <ListItem key={item.href} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    {serviceComponents.map((item) => (
                      <ListItem key={item.href} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="https://saas.codelitsstudio.com/"
                  target="_blank"
                  className="saas-hub-shimmer bg-muted text-foreground hover:bg-primary hover:text-background px-5 py-1.5 font-semibold rounded-full transition"
                >
                  SaaS Hub
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    {aiComponents.map((item) => (
                      <ListItem key={item.href} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    {aboutComponents.map((item) => (
                      <ListItem key={item.href} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/contact">
              Let’s Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/30 backdrop-blur-md p-6 z-50 flex flex-col">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/logos/logo.png" className="h-24 w-24 object-contain" alt="logo" />
                </Link>
                <SheetClose asChild>
                  <button aria-label="Close">
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>
              <nav className="grid gap-4 text-sm text-white">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
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
