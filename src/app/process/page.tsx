import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PenTool, Code, Rocket, Handshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const processSteps = [
    {
        icon: Search,
        title: "1. Discovery & Strategy",
        description: "We start by understanding your business, goals, and target audience. This phase involves market research, competitive analysis, and creating a strategic roadmap for the project."
    },
    {
        icon: PenTool,
        title: "2. Design & Prototyping",
        description: "Our creative team translates the strategy into wireframes, mockups, and interactive prototypes. We focus on creating a user-centric design that is both beautiful and functional."
    },
    {
        icon: Code,
        title: "3. Development & Implementation",
        description: "Our developers bring the designs to life with clean, efficient, and scalable code. We follow agile methodologies to ensure flexibility and transparency throughout the development process."
    },
    {
        icon: Rocket,
        title: "4. Testing & Launch",
        description: "We conduct rigorous testing to ensure your product is bug-free, secure, and performs flawlessly across all devices. After your approval, we handle the deployment and launch."
    },
    {
        icon: Handshake,
        title: "5. Support & Growth",
        description: "Our partnership doesn't end at launch. We provide ongoing support, maintenance, and can help with further growth strategies to ensure your long-term success."
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

            <div className="mt-16 max-w-3xl mx-auto">
                <div className="space-y-12">
                    {processSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                    <step.icon className="h-6 w-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl font-semibold">{step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center bg-primary/10 p-8 rounded-lg">
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
