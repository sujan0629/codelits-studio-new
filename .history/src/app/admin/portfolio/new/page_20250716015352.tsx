import { PortfolioCopyForm } from '@/components/admin/PortfolioCopyForm';
import { Bot } from 'lucide-react';

export default function NewPortfolioItemPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-18">
            <div className="text-center">
                <div className="inline-block p-4 bg-primary/10 text-primary rounded-full">
                    <Bot className="w-10 h-10" />
                </div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4">AI Portfolio Assistant</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Generate compelling titles and summaries for your portfolio items. Just provide some details about your project, and let our AI do the heavy lifting.
                </p>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
                <PortfolioCopyForm />
                <p className="mt-6 text-center text-sm text-muted-foreground italic">
                    More tools and a better interface are currently in development.
                </p>
            </div>
        </div>
    );
}
