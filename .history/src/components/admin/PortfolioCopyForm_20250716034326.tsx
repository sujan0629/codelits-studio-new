'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

import { suggestPortfolioCopy, type SuggestPortfolioCopyOutput } from '@/ai/flows/suggest-portfolio-copy';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

const SuggestPortfolioCopyInputSchema = z.object({
  projectDescription: z.string().min(10, 'Please provide a more detailed project description.'),
  targetAudience: z.string().min(3, 'Please describe the target audience.'),
  keywords: z.string().min(3, 'Please provide some relevant keywords.'),
  successfulCaseStudies: z.string().min(10, 'Please provide some examples of successful case studies.'),
});

export function PortfolioCopyForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<SuggestPortfolioCopyOutput | null>(null);

  const form = useForm<z.infer<typeof SuggestPortfolioCopyInputSchema>>({
    resolver: zodResolver(SuggestPortfolioCopyInputSchema),
    defaultValues: {
      projectDescription: '',
      targetAudience: '',
      keywords: '',
      successfulCaseStudies: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SuggestPortfolioCopyInputSchema>) {
    setLoading(true);
    setSuggestion(null);
    try {
      const result = await suggestPortfolioCopy(values);
      setSuggestion(result);
      toast({
        title: 'Suggestions Generated!',
        description: 'AI has created a title and summary for your project.',
      });
    } catch (error) {
      console.error('Error generating portfolio copy:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate AI suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Title Section */}
      <div className="text-center space-y-2">
        <h2 className="font-headline text-3xl font-bold text-foreground tracking-tight">
          AI-Powered Portfolio Copy Generator
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Fill in the details below and let AI generate a compelling title and summary for your project.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-background border border-border rounded-2xl p-6 shadow-sm space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the project, its goals, and the final outcome."
                      {...field}
                      className="min-h-[100px]"
                    />
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
                    <Textarea
                      placeholder="Provide examples or references to help match tone and style."
                      {...field}
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <p className="text-xs text-muted-foreground mt-1">
                    Helps the AI match tone, language, and voice.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading} className="w-full text-base py-6 rounded-xl">
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-5 w-5" />
              )}
              Generate Suggestions
            </Button>
          </form>
        </Form>
      </div>

      {/* Output Card */}
      {suggestion && (
        <div className="bg-background border border-border rounded-2xl p-6 shadow-sm space-y-6">
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary">Suggested Title</h3>
            <p className="text-sm bg-primary/5 p-4 rounded-md border border-border mt-2">{suggestion.suggestedTitle}</p>
          </div>
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary">Suggested Summary</h3>
            <p className="text-sm whitespace-pre-wrap bg-primary/5 p-4 rounded-md border border-border mt-2">
              {suggestion.suggestedSummary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
