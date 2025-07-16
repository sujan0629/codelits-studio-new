
import { PortfolioCopyForm } from '@/components/admin/PortfolioCopyForm';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pilcrow } from 'lucide-react';

export default function NewPortfolioItemPage() {
    return (
        <div>
            <div className="mb-8 flex items-start gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Pilcrow className="h-6 w-6" />
                </div>
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tighter">Portfolio Copy Generator</h1>
                    <p className="text-lg text-muted-foreground">
                        Generate compelling titles and summaries for your portfolio items.
                    </p>
                </div>
            </div>

            <div className="max-w-3xl">
                <PortfolioCopyForm />
            </div>
        </div>
    );
}
