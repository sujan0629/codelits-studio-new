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

// Update: Add Tailwind classes to style SaaS Hub button
const saasHubClass = cn(
  navigationMenuTriggerStyle(),
  'bg-muted text-center text-muted-foreground hover:bg-yellow-400 hover:text-black rounded-md px-4 py-2 transition-colors duration-300'
);

// Export Header component (continued in the original code)
// Use the "saasHubClass" for the SaaS Hub nav item
// Example:
// <a href="https://saas.codelitsstudio.com/" className={saasHubClass}>SaaS Hub</a>
