import Link from 'next/link';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';
import { NewsletterForm } from '@/components/NewsletterForm';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">CodeLits Studio</span>
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Crafting exceptional digital experiences for a modern world.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/team" className="text-muted-foreground hover:text-primary">About Us</Link>
                <Link href="/process" className="text-muted-foreground hover:text-primary">Our Process</Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold">Services</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/services" className="text-muted-foreground hover:text-primary">Web Development</Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary">UI/UX Design</Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary">Digital Marketing</Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold">Stay Connected</p>
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
