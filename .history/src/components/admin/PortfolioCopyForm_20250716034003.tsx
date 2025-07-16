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
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="font-headline text-2xl font-semibold">Project Details</h2>
        <p className="text-sm text-muted-foreground max-w-xl">
          Tell us about your project so AI can craft a headline and summary.
        </p>
      </div>

      {/* Form as 2-column on md+ */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the project, its goals, and outcomes."
                    {...field}
                    className="min-h-[120px]"
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
                  <Input placeholder="e.g., Tech startups" {...field} />
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
                  <Input placeholder="e.g., React, e-commerce" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="successfulCaseStudies"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Successful Case Studies</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste examples or links here."
                    {...field}
                    className="min-h-[120px]"
                  />
                </FormControl>
                <p className="text-xs text-muted-foreground mt-1">
                  Helps AI match tone & style.
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={loading}
            className="col-span-1 md:col-span-2 w-full"
            size="lg"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate Suggestions
          </Button>
        </form>
      </Form>

      {/* Suggestions side-by-side on md+ */}
      {suggestion && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="font-headline text-xl font-semibold text-primary">
              Suggested Title
            </h3>
            <p className="text-sm bg-primary/5 p-4 rounded-lg border border-border">
              {suggestion.suggestedTitle}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-headline text-xl font-semibold text-primary">
              Suggested Summary
            </h3>
            <p className="text-sm bg-primary/5 whitespace-pre-wrap p-4 rounded-lg border border-border">
              {suggestion.suggestedSummary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
