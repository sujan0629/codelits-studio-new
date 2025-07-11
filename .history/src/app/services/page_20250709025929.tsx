import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const ResearchStrategyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const ProductDesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const WebDevIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AppDevIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const MarketingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 8V16H7L12 21V3L7 8H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M15.5 8.5C16.5 10.5 16.5 13.5 15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const EcomIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 1H5L7.68 14.39A2 2 0 0 0 9.67 16H18.4a2 2 0 0 0 1.95-1.59L22.79 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
  {
    icon: ProductDesignIcon,
    title: 'UI/UX Design',
    description: 'We create intuitive, engaging, and aesthetically pleasing user interfaces and experiences. Our design process is human-centered, ensuring your digital product is not only beautiful but also easy to use and accessible to all.',
  },
  {
    icon: WebDevIcon,
    title: 'Web Development',
    description: 'From responsive marketing sites to complex web applications, we build high-performance, secure, and scalable web solutions using the latest technologies. Our front-end and back-end developers work in synergy to deliver excellence.',
  },
  {
    icon: AppDevIcon,
    title: 'App Development',
    description: 'We design and develop native and cross-platform mobile applications for iOS and Android. Our team guides you from idea to launch, ensuring your app meets market needs and delivers a seamless mobile experience.',
  },
  {
    icon: MarketingIcon,
    title: 'Digital Marketing',
    description: 'Our data-driven digital marketing strategies are designed to increase your online visibility, attract qualified leads, and boost conversions. We specialize in content marketing, social media, and paid advertising campaigns.',
  },
  {
    icon: EcomIcon,
    title: 'E-commerce Solutions',
    description: 'We build robust e-commerce platforms that provide a seamless shopping experience for your customers. From custom storefronts to payment gateway integration, we cover all aspects of your online retail business.',
  },
  {
    icon: ResearchStrategyIcon,
    title: 'SEO & Content Strategy',
    description: 'Improve your search engine rankings and attract organic traffic with our expert SEO and content strategies. We perform in-depth keyword research, on-page optimization, and create high-quality content that resonates with your audience.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">SERVICES</p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-2">What we do</h1>
        </div>
        <div className="md:col-span-2 space-y-12">
          {services.map((service) => (
            <div key={service.title} className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-primary pt-1">
                 <service.icon className="w-8 h-8"/>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline">{service.title}</h3>
                <p className="mt-2 text-muted-foreground text-base md:text-lg">{service.description}</p>
              </div>
            </div>
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
