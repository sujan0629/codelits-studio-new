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
  projectDescription: z.string().min(10),
  targetAudience: z.string().min(3),
  keywords: z.string().min(3),
  successfulCaseStudies: z.string().min(10),
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
      toast({ title: "Suggestions Generated!", description: "AI has created your copy." });
    } catch {
      toast({ title: "Error", description: "Failed to generate suggestions.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="font-headline text-2xl font-semibold">Project Details</h2>
        <p className="text-sm text-muted-foreground">
          Provide the info below and get a polished title & summary.
        </p>
      </div>

      {/* Form: compact two-col grid */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="text-sm">Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe goals and outcomes"
                    {...field}
                    className="min-h-[100px] text-sm"
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
                <FormLabel className="text-sm">Target Audience</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Tech startups" {...field} className="text-sm" />
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
                <FormLabel className="text-sm">Keywords</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. React, e-commerce" {...field} className="text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="successfulCaseStudies"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="text-sm">Successful Case Studies</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste examples or links"
                    {...field}
                    className="min-h-[100px] text-sm"
                  />
                </FormControl>
                <p className="text-xs text-muted-foreground mt-1">
                  Guides AI tone & style.
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 w-full text-sm"
            size="md"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>
        </form>
      </Form>

      {/* Suggestions: stacked on mobile, side-by-side on sm+ */}
      {suggestion && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1">
            <h3 className="font-headline text-lg font-semibold text-primary">Title</h3>
            <p className="text-sm bg-primary/5 p-3 rounded border border-border">
              {suggestion.suggestedTitle}
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-headline text-lg font-semibold text-primary">Summary</h3>
            <p className="text-sm bg-primary/5 p-3 rounded border border-border whitespace-pre-wrap">
              {suggestion.suggestedSummary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}