import { Button } from "@/components/ui/button";
import { Search, PenTool, Code, Rocket, Handshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const processSteps = [
    {
        icon: Search,
        title: "1. Discovery & Strategy",
        description: "We start by understanding your business, goals, and target audience. This phase involves market research, competitive analysis, and creating a strategic roadmap for the project.",
        image: "https://placehold.co/500x350.png",
        hint: "discovery strategy meeting"
    },
    {
        icon: PenTool,
        title: "2. Design & Prototyping",
        description: "Our creative team translates the strategy into wireframes, mockups, and interactive prototypes. We focus on creating a user-centric design that is both beautiful and functional.",
        image: "https://placehold.co/500x350.png",
        hint: "ui design prototype"
    },
    {
        icon: Code,
        title: "3. Development & Implementation",
        description: "Our developers bring the designs to life with clean, efficient, and scalable code. We follow agile methodologies to ensure flexibility and transparency throughout the development process.",
        image: "https://placehold.co/500x350.png",
        hint: "coding development screen"
    },
    {
        icon: Rocket,
        title: "4. Testing & Launch",
        description: "We conduct rigorous testing to ensure your product is bug-free, secure, and performs flawlessly across all devices. After your approval, we handle the deployment and launch.",
        image: "https://placehold.co/500x350.png",
        hint: "testing launch rocket"
    },
    {
        icon: Handshake,
        title: "5. Support & Growth",
        description: "Our partnership doesn't end at launch. We provide ongoing support, maintenance, and can help with further growth strategies to ensure your long-term success.",
        image: "https://placehold.co/500x350.png",
        hint: "support growth team"
    }
]

export default function ProcessPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Process</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A transparent look into how we turn great ideas into exceptional digital products.
                </p>
            </div>

            <div className="mt-20 space-y-24">
              {processSteps.map((step, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                            <step.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-headline text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-4 md:ml-16 text-muted-foreground">{step.description}</p>
                  </div>
                  <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <Image 
                          src={step.image}
                          alt={step.title}
                          width={500}
                          height={350}
                          className="rounded-lg shadow-lg aspect-[5/3.5] object-cover"
                          data-ai-hint={step.hint}
                      />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center bg-primary/10 p-8 md:p-12 rounded-lg">
                <h2 className="font-headline text-2xl md:text-3xl font-bold">Ready to start your project?</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                    Let's collaborate to build something amazing.
                </p>
                <Button asChild size="lg" className="mt-6">
                    <Link href="/contact">Get a Free Consultation</Link>
                </Button>
            </div>
        </div>
    );
}
