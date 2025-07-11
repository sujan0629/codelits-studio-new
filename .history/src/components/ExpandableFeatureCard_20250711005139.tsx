
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from './ui/separator';

type Feature = {
  title: string;
  description: string;
  image: string;
  hint: string;
  points: string[];
};

export function ExpandableFeatureCard({ feature }: { feature: Feature }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative group col-span-1 flex flex-col rounded-2xl border border-border/50 bg-card/60 cursor-pointer overflow-hidden shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 h-full"
      >
     <div className="relative w-full h-72 overflow-hidden bg-transparent shadow-none">
<Image
  src={feature.image}
  alt={feature.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-300 drop-shadow-none filter-none"
  data-ai-hint={feature.hint}
/>

</div>

        <div className="p-6 flex-grow flex flex-col items-start justify-between">
            <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
  <Button
  variant="ghost"
  className="border-none bg-background/50 backdrop-blur-sm rounded-full w-14 h-14 group-hover:scale-110 group-hover:bg-primary/10 transition-transform flex-shrink-0 mt-4 self-end"
  aria-label={`Learn more about ${feature.title}`}
>
  <Plus className="w-8 h-8" />
</Button>


        </div>

      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="h-[90vh] max-w-2xl mx-auto bg-card/80 backdrop-blur-xl border-t border-primary/20 rounded-t-2xl p-0">
            <ScrollArea className="h-full w-full">
                <div className="p-8 md:p-12">
                     <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 md:mb-12 shadow-2xl shadow-none">
                         <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover"
                            data-ai-hint={feature.hint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <SheetHeader>
                            <SheetTitle className="font-headline text-4xl md:text-5xl mb-2">{feature.title}</SheetTitle>
                            <SheetDescription className="text-sm text-muted-foreground">
                                {feature.description}
                            </SheetDescription>
                        </SheetHeader>
                    </div>
                    
                    <Separator className="my-8 md:my-12 bg-border/50" />

                    <div className="max-w-2xl mx-auto text-left space-y-8">
                        <div>
                            <h4 className="font-headline text-2xl font-semibold mb-4 text-center">Key Principles</h4>
                            <div className="space-y-4">
                                {feature.points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/20">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-foreground text-lg">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-headline text-2xl font-semibold mb-4 text-center">Our Approach</h4>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We don&apos;t just build features; we build solutions. Our approach integrates deep technical expertise with a creative process that prioritizes user needs and business goals. This ensures that the final product is not only technologically sound but also meaningful and impactful for its users. We believe in collaborative development, working closely with your team every step of the way.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg">Learn More About Our Process <ArrowRight className="ml-2"/></Button>
                    </div>
                </div>
            </ScrollArea>
             {/* <SheetClose className="absolute right-4 top-4 rounded-full p-2 bg-background/50 backdrop-blur-sm transition-colors hover:bg-background">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </SheetClose> */}
        </SheetContent>
      </Sheet>
    </>
  );
}
