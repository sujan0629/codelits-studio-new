import { Button } from "@/components/ui/button";
import { Search, PenTool, Code, Rocket, Handshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProcessPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Process</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A transparent look into how we turn great ideas into exceptional digital products.
                </p>
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
