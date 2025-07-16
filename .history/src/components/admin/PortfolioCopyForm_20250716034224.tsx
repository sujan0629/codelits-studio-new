'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { suggestPortfolioCopy, type SuggestPortfolioCopyOutput } from "@/ai/flows/suggest-portfolio-copy";

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
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl font-headline">Project Details</h2>
        <p className="text-sm text-muted-foreground max-w-xl">
          Provide your project info below to get AI-generated title and summary.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the project goals, process, and results"
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
                      <Input
                        placeholder="e.g., Tech startups, freelancers"
                        {...field}
                        className="text-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Keywords</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., React, UX, responsive design"
                        {...field}
                        className="text-sm"
                      />
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
                    <FormLabel className="text-sm">Similar Successful Case Studies</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Examples that inspire tone & voice"
                        {...field}
                        className="min-h-[100px] text-sm"
                      />
                    </FormControl>
                    <p className="text-xs text-muted-foreground mt-1">
                      Helps the AI match tone and professionalism.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" disabled={loading} className="w-full sm:w-fit" size="lg">
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate Suggestions
          </Button>
        </form>
      </Form>

      {/* Output Section */}
      {suggestion && (
        <div className="border rounded-xl p-6 bg-muted/50 space-y-6 mt-6">
          <div>
            <h3 className="text-primary font-semibold text-lg">Suggested Title</h3>
            <p className="text-sm p-3 bg-background rounded-md border">{suggestion.suggestedTitle}</p>
          </div>
          <div>
            <h3 className="text-primary font-semibold text-lg">Suggested Summary</h3>
            <p className="text-sm whitespace-pre-wrap p-3 bg-background rounded-md border">
              {suggestion.suggestedSummary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
