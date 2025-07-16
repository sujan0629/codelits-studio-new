
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/decoration/GridPattern';
import { ArrowRight, Bot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AiLandingPage() {
  return (
    <div className="relative overflow-hidden">
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className="absolute inset-0 h-full w-full stroke-primary/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] -z-10"
      />
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <Bot className="w-4 h-4" />
              <span>Content & Strategy Automation</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
              Amplify Your Creativity with AI
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
              Leverage our suite of intelligent tools designed to streamline your workflow. From generating portfolio copy to suggesting SEO keywords, our AI assistant is here to help you create better content, faster.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="/admin">Get Started <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
            <Image
              src="https://placehold.co/800x800.png"
              alt="AI Assistant"
              width={800}
              height={800}
              className="object-cover rounded-2xl"
              data-ai-hint="abstract ai neural"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
