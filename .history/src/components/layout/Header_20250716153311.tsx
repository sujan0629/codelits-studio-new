"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Code,
  Menu,
  Briefcase,
  Users,
  FileText,
  PencilLine,
  Phone,
  Bot,
  ArrowRight,
  Wrench,
  X,
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import gsap from 'gsap';

// Components data
const workComponents = [
  {
    title: "Client Work",
    href: "/portfolio/client-work",
    description: "Explore our successful collaborations and impactful solutions.",
  },
  {
    title: "Research & Development",
    href: "/portfolio/research",
    description: "Our experiments where we explore new technologies.",
  },
  {
    title: "Design Philosophy",
    href: "/portfolio/design",
    description: "A deep dive into our design principles and methodologies.",
  },
  {
    title: "Partnerships",
    href: "/portfolio/partnerships",
    description: "Learn about our trusted partners and synergistic relationships.",
  },
];

const serviceComponents = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "High-performance, secure, and scalable web solutions.",
  },
  {
    title: "UI/UX Design",
    href: "/services/ux-ui-design",
    description: "Human-centered design that is intuitive and accessible.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Engaging native and cross-platform mobile applications.",
  },
  {
    title: "E-commerce Solutions",
    href: "/services/e-commerce-solutions",
    description: "Robust e-commerce platforms for a seamless shopping experience.",
  },
  {
    title: "AI & ML Solutions",
    href: "/services/ai-ml-solutions",
    description: "Unlock data-driven insights and automate processes.",
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description: "Streamlining development with modern cloud infrastructure.",
  },
];

const aboutComponents = [
  {
    title: "About Us",
    href: "/team",
    description: "Meet the passionate creators, thinkers, and innovators.",
    icon: Users,
  },
  {
    title: "Our Process",
    href: "/process",
    description: "How we turn great ideas into exceptional products.",
    icon: FileText,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read our latest articles, insights, and news.",
    icon: PencilLine,
  },
];

const aiComponents = [
  {
    title: "Documentation",
    href: "#",
    description: "Explore comprehensive guides and API references for our tools.",
  },
  {
    title: "Pricing",
    href: "#",
    description: "Find the perfect plan that fits your needs and budget.",
  },
  {
    title: "Resources",
    href: "#",
    description: "Access tutorials, case studies, and helpful resources.",
  },
  {
    title: "Tool Dashboard",
    href: "/admin",
    description: "Go directly to the AI dashboard to start creating.",
  },
];

const navLinks = [
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/ai', label: 'AI Tools' },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'About Us' },
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
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export function Header() {
  const headerRef = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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

  if (isAdminRoute) return null;

  return (
    <header className="sticky top-0 z-50 w-full p-2 md:p-4">
      <div ref={headerRef} className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logos/logo.png" alt="CodeLits Studio Logo" className="h-24 w-24 md:h-36 md:w-36 object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}

          <a
            href="https://saas.codelitsstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-click-anim saas-hub-shimmer"
          >
            SaaS Hub
          </a>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] p-4 grid-cols-2">
                    {workComponents.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] p-4 grid-cols-2">
                    {serviceComponents.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] p-4 grid-cols-2">
                    {aiComponents.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="flex h-full w-full flex-col justify-end rounded-md bg-muted p-6" href="/">
                          <Code className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium">CodeLits Studio</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Crafting exceptional digital experiences for a modern world.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {aboutComponents.map((item) => (
                      <ListItem
                        key={item.title}
                   title={item.title}

                        href={item.href}
                      >
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

        {/* Mobile Sheet */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent showCloseButton={false} className="bg-black/30 backdrop-blur-md p-6">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <img src="/logos/logo.png" alt="CodeLits Studio Logo" className="h-24 w-24 object-contain" />
                </Link>
                <SheetClose asChild>
                  <button aria-label="Close"><X className="h-5 w-5" /></button>
                </SheetClose>
              </div>

              <nav className="grid gap-4 text-sm text-white">
                {mobileNavLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md">
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-6 text-white/60 text-center text-xs">
                © 2025 CodeLits Studio Pvt. Ltd.
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
