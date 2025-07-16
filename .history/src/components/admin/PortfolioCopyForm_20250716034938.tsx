'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { suggestPortfolioCopy, type SuggestPortfolioCopyOutput } from '@/ai/flows/suggest-portfolio-copy';
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";

const SuggestPortfolioCopyInputSchema = z.object({
    projectDescription: z.string().min(10, "Please provide a more detailed project description."),
    targetAudience: z.string().min(3, "Please describe the target audience."),
    keywords: z.string().min(3, "Please provide some relevant keywords."),
    successfulCaseStudies: z.string().min(10, "Please provide some examples of successful case studies."),
});

export function PortfolioCopyForm() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [suggestion, setSuggestion] = useState<SuggestPortfolioCopyOutput | null>(null);

    const form = useForm<z.infer<typeof SuggestPortfolioCopyInputSchema>>({
        resolver: zodResolver(SuggestPortfolioCopyInputSchema),
        defaultValues: {
            projectDescription: "",
            targetAudience: "",
            keywords: "",
            successfulCaseStudies: "",
        },
    });

    async function onSubmit(values: z.infer<typeof SuggestPortfolioCopyInputSchema>) {
        setLoading(true);
        setSuggestion(null);
        try {
            const result = await suggestPortfolioCopy(values);
            setSuggestion(result);
            toast({
                title: "Suggestions Generated!",
                description: "AI has created a title and summary for your project.",
            });
        } catch (error) {
            console.error("Error generating portfolio copy:", error);
            toast({
                title: "Error",
                description: "Failed to generate AI suggestions. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-10">
            {/* Title & description section */}
            <div className="space-y-1">
                <h2 className="font-headline text-xl font-semibold">Project Details</h2> {/* was text-2xl -> now text-lg */}
                <p className="text-sm text-muted-foreground max-w-xl">
                    Fill in the information below to generate a title and summary for your portfolio project.
                </p> {/* was text-sm -> now text-xs */}
            </div>

            {/* The form itself */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
       

<FormField
    control={form.control}
    name="projectDescription"
    render={({ field }) => (
        <FormItem>
            <FormLabel className="text-sm">Project Description</FormLabel>
            <FormControl>
                <Textarea
                    placeholder="Describe the project, its goals, and the final outcome."
                    {...field}
                    className="min-h-[100px] text-sm placeholder:text-xs"
                />
            </FormControl>
            <FormMessage className="text-xs" />
        </FormItem>
    )}
/>
<FormField
    control={form.control}
    name="targetAudience"
    render={({ field }) => (
        <FormItem>
            <FormLabel className="text-sm">Target Audience</FormLabel>
            <FormControl>
                <Input
                    placeholder="e.g., Tech startups, e-commerce businesses"
                    {...field}
                    className="text-sm placeholder:text-xs"
                />
            </FormControl>
            <FormMessage className="text-xs" />
        </FormItem>
    )}
/>
<FormField
    control={form.control}
    name="keywords"
    render={({ field }) => (
        <FormItem>
            <FormLabel className="text-sm">Keywords</FormLabel>
            <FormControl>
                <Input
                    placeholder="e.g., web development, UI/UX, React, e-commerce"
                    {...field}
                    className="text-sm placeholder:text-xs"
                />
            </FormControl>
            <FormMessage className="text-xs" />
        </FormItem>
    )}
/>
<FormField
    control={form.control}
    name="successfulCaseStudies"
    render={({ field }) => (
        <FormItem>
            <FormLabel className="text-sm">Similar Successful Case Studies</FormLabel>
            <FormControl>
                <Textarea
                    placeholder="Give examples that match the tone and style you're going for."
                    {...field}
                    className="min-h-[100px] text-sm placeholder:text-xs"
                />
            </FormControl>
            <p className="text-xs text-muted-foreground mt-1">
                Helps the AI match tone, language, and voice.
            </p>
            <FormMessage className="text-xs" />
        </FormItem>
    )}
/>

                    <Button type="submit" disabled={loading} className="w-60" size="lg">
                        {loading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Sparkles className="mr-2 h-4 w-4" />
                        )}
                        Generate Suggestions
                    </Button>
                </form>
            </Form>

            {/* Suggestions output */}
            {suggestion && (
                <div className="mt-10 space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-headline text-lg font-semibold text-primary">Suggested Title</h3> {/* was text-xl */}
                        <p className="text-xs bg-primary/5 p-4 rounded-lg border border-border">{suggestion.suggestedTitle}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-headline text-lg font-semibold text-primary">Suggested Summary</h3> {/* was text-xl */}
                        <p className="text-xs bg-primary/5 whitespace-pre-wrap p-4 rounded-lg border border-border">
                            {suggestion.suggestedSummary}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
