
import Link from 'next/link';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';
import { NewsletterForm } from '@/components/NewsletterForm';
import { GridPattern } from '@/components/decoration/GridPattern';

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-card/50 overflow-hidden">
       <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
        />
      <div className="container relative mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
     <Link href="/" className="flex items-center gap-2">
          <img src="/logos/logo.png" alt="CodeLits Studio Logo" className="h-36 w-36 object-contain" />
        </Link>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Crafting exceptional digital experiences for a modern world.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"><Github /></Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wider text-foreground">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/team" className="text-muted-foreground transition-colors hover:text-primary">About Us</Link>
                <Link href="/process" className="text-muted-foreground transition-colors hover:text-primary">Our Process</Link>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">Blog</Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold tracking-wider text-foreground">Services</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">Web Development</Link>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">UI/UX Design</Link>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">Digital Marketing</Link>
              </nav>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-semibold tracking-wider text-foreground">Stay Connected</p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeLits Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
