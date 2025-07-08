'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { suggestPortfolioCopy, type SuggestPortfolioCopyOutput } from '@/ai/flows/suggest-portfolio-copy';
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
                <CardDescription>Fill in the details below to generate a title and summary.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="projectDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe the project, its goals, and the final outcome." {...field} className="min-h-[100px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="targetAudience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Target Audience</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Tech startups, e-commerce businesses" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Keywords</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., web development, UI/UX, React, e-commerce" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="successfulCaseStudies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Similar Successful Case Studies</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe or paste examples of successful case studies to guide the tone and style." {...field} className="min-h-[100px]" />
                                    </FormControl>
                                    <FormDescription>This helps the AI understand what kind of copy resonates with your audience.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={loading} className="w-full" size="lg">
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                            Generate Suggestions
                        </Button>
                    </form>
                </Form>

                {suggestion && (
                    <div className="mt-8 space-y-6">
                        <h3 className="font-headline text-2xl font-bold text-center">AI Suggestions</h3>
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle>Suggested Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{suggestion.suggestedTitle}</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle>Suggested Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="whitespace-pre-wrap">{suggestion.suggestedSummary}</p>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
