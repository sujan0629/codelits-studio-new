import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Component, Megaphone, PenTool, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'We create intuitive, engaging, and aesthetically pleasing user interfaces and experiences. Our design process is human-centered, ensuring your digital product is not only beautiful but also easy to use and accessible to all.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'From responsive marketing sites to complex web applications, we build high-performance, secure, and scalable web solutions using the latest technologies. Our front-end and back-end developers work in synergy to deliver excellence.',
  },
  {
    icon: Component,
    title: 'App Development',
    description: 'We design and develop native and cross-platform mobile applications for iOS and Android. Our team guides you from idea to launch, ensuring your app meets market needs and delivers a seamless mobile experience.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Our data-driven digital marketing strategies are designed to increase your online visibility, attract qualified leads, and boost conversions. We specialize in content marketing, social media, and paid advertising campaigns.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'We build robust e-commerce platforms that provide a seamless shopping experience for your customers. From custom storefronts to payment gateway integration, we cover all aspects of your online retail business.',
  },
  {
    icon: Search,
    title: 'SEO & Content Strategy',
    description: 'Improve your search engine rankings and attract organic traffic with our expert SEO and content strategies. We perform in-depth keyword research, on-page optimization, and create high-quality content that resonates with your audience.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We provide a full spectrum of digital services to help your business grow and succeed in the digital landscape.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col text-center hover:bg-card/50 transition-colors">
            <CardHeader>
              <div className="mx-auto w-fit p-4 bg-primary/10 text-primary rounded-full">
                <service.icon className="w-8 h-8" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-primary/10 p-8 rounded-lg">
          <h2 className="font-headline text-2xl md:text-3xl font-bold">Have a project in mind?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Let&apos;s talk about how we can help you achieve your goals. We&apos;re here to turn your ideas into reality.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Contact Us</Link>
          </Button>
      </div>
    </div>
  );
}
