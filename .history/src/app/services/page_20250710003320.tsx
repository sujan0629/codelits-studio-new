
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { allServices } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">SERVICES</p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-2">What we do</h1>
        </div>
        <div className="md:col-span-2 space-y-8">
          {allServices.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug} className="group block rounded-lg -m-4 p-4 transition-all duration-300 hover:bg-card/50">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-primary pt-1 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline flex items-center">
                    {service.title}
                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="mt-2 text-muted-foreground text-base md:text-lg">{service.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-24 bg-card p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Let&apos;s talk about how we can help you achieve your goals. We&apos;re here to turn your ideas into reality.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
