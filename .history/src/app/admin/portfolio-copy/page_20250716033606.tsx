import { PortfolioCopyForm } from '@/components/admin/PortfolioCopyForm';
import { Pilcrow } from 'lucide-react';

export default function NewPortfolioItemPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Pilcrow className="h-6 w-6" />
                </div>
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight">Portfolio Copy Generator</h1>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Generate compelling titles and summaries for your portfolio items using AI.
                    </p>
                </div>
            </div>

            <div>
                <PortfolioCopyForm />
            </div>
        </div>
    );
}
