"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
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
  Code,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Menu data
const workItems = [
  { title: "Client Work", href: "/portfolio/client-work", description: "Explore our successful collaborations and impactful solutions." },
  { title: "Research & Development", href: "/portfolio/research", description: "Our experiments where we explore new technologies." },
  { title: "Design Philosophy", href: "/portfolio/design", description: "A deep dive into our design principles and methodologies." },
  { title: "Partnerships", href: "/portfolio/partnerships", description: "Learn about our trusted partners and synergistic relationships." },
];

const serviceItems = [
  { title: "Web Development", href: "/services/web-development", description: "High-performance, secure, and scalable web solutions." },
  { title: "UI/UX Design", href: "/services/ux-ui-design", description: "Human-centered design that is intuitive and accessible." },
  { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Engaging native and cross-platform mobile applications." },
  { title: "E-commerce Solutions", href: "/services/e-commerce-solutions", description: "Robust e-commerce platforms for a seamless shopping experience." },
  { title: "AI & ML Solutions", href: "/services/ai-ml-solutions", description: "Unlock data-driven insights and automate processes." },
  { title: "Cloud & DevOps", href: "/services/cloud-devops", description: "Streamlining development with modern cloud infrastructure." },
];

const aiItems = [
  { title: "Documentation", href: "#", description: "Explore comprehensive guides and API references for our tools." },
  { title: "Pricing", href: "#", description: "Find the perfect plan that fits your needs and budget." },
  { title: "Resources", href: "#", description: "Access tutorials, case studies, and helpful resources." },
  { title: "Tool Dashboard", href: "/admin", description: "Go directly to the AI dashboard to start creating." },
];

const mobileNavLinks = [
  { href: "/portfolio", label: "Work", icon: Briefcase },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/process", label: "Process", icon: FileText },
  { href: "https://saas.codelitsstudio.com/", label: "SaaS Hub", icon: Code },
  { href: "/ai", label: "AI Tools", icon: Bot },
  { href: "/blog", label: "Blog", icon: PencilLine },
  { href: "/team", label: "About Us", icon: Users },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const headerRef = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const [isNavOpen, setIsNavOpen] = useState(false);

  const isAdminRoute = pathname?.startsWith("/admin");
  if (isAdminRoute) return null;

  useEffect(() => {
    const header = headerRef.current;
    let isActive = false;

    const showHeader = () => {
      gsap.to(header, {
        y: 10,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(6px)",
        ease: "power2.out",
        duration: 0.5,
        delay: 0.1,
      });
      isActive = true;
    };

    const hideHeader = () => {
      gsap.to(header, {
        y: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
        ease: "power2.out",
        duration: 0.5,
        delay: 0.1,
      });
      isActive = false;
    };

    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 20 && !isActive) showHeader();
      else if (y <= 20 && isActive) hideHeader();
      setIsScrolled(y > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <header className="sticky top-0 z-50 w-full p-2 md:p-4">
<div
  className={cn(
    "fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-300",
    isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  )}
></div>


      <div
        ref={headerRef}
        className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="CodeLits Studio Logo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
<NavigationMenu className="hidden md:flex gap-4">
  <NavigationMenuList className="flex gap-4 text-sm font-medium items-center">
    {/* Dropdown: Work */}
   <div
  onMouseEnter={() => {
    const overlay = document.getElementById("nav-blur-overlay");
    if (overlay) {
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";
    }
  }}
  onMouseLeave={() => {
    const overlay = document.getElementById("nav-blur-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    }
  }}
>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Work</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[600px] p-4 grid-cols-2 gap-3">
        {workItems.map((item) => (
          <ListItem key={item.href} title={item.title} href={item.href}>
            {item.description}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
</div>


    {/* Dropdown: Services */}
    <NavigationMenuItem>
      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[600px] p-4 grid-cols-2 gap-3">
          {serviceItems.map((item) => (
            <ListItem key={item.href} title={item.title} href={item.href}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <Link href="/process" legacyBehavior passHref>
        <NavigationMenuLink className="nav-click-anim">Process</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    {/* SaaS Hub Highlight */}
    <NavigationMenuItem>
      <a
        href="https://saas.codelitsstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="saas-hub-shimmer nav-click-anim"
      >
        SaaS Hub
      </a>
    </NavigationMenuItem>

    {/* Dropdown: AI Tools */}
    <NavigationMenuItem>
      <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[600px] p-4 grid-cols-2 gap-3">
          {aiItems.map((item) => (
            <ListItem key={item.href} title={item.title} href={item.href}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <Link href="/blog" legacyBehavior passHref>
        <NavigationMenuLink className="nav-click-anim">Blog</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <Link href="/team" legacyBehavior passHref>
        <NavigationMenuLink className="nav-click-anim">About Us</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/contact">
              Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/30 backdrop-blur-md text-white flex flex-col p-6">
              <div className="flex justify-between mb-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image src="/logos/logo.png" alt="CodeLits" width={60} height={60} />
                </Link>
                <SheetClose asChild>
                  <button>
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>

              <nav className="flex flex-col gap-3">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.label}
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

// ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: React.ReactNode }
>(({ className, title, children, ...props }, ref) => (
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
        <div className="text-sm font-medium">{title}</div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

function setIsScrolled(arg0: boolean) {
  throw new Error('Function not implemented.');
}

