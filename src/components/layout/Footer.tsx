import Link from 'next/link';
import { Code, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/20">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                Let&apos;s collaborate to build something amazing. We&apos;re ready to turn your vision into reality.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Let&apos;s work together <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">CodeLits Studio</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} CodeLits Studio. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
