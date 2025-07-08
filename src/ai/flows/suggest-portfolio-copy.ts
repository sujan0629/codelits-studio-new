// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI tool that suggests titles and summaries for portfolio items.
 *
 * - suggestPortfolioCopy - A function that handles the generation of portfolio copy suggestions.
 * - SuggestPortfolioCopyInput - The input type for the suggestPortfolioCopy function.
 * - SuggestPortfolioCopyOutput - The return type for the suggestPortfolioCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioCopyInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the portfolio project.'),
  targetAudience: z
    .string()
    .describe('The target audience for the portfolio item.'),
  keywords: z
    .string()
    .describe('Relevant keywords related to the portfolio project.'),
  successfulCaseStudies: z
    .string()
    .describe(
      'Examples of successful case studies with similar projects, to ensure copy resonates with target audience.'
    ),
});
export type SuggestPortfolioCopyInput = z.infer<
  typeof SuggestPortfolioCopyInputSchema
>;

const SuggestPortfolioCopyOutputSchema = z.object({
  suggestedTitle: z.string().describe('A suggested title for the portfolio item.'),
  suggestedSummary: z.string().describe('A suggested summary for the portfolio item.'),
});
export type SuggestPortfolioCopyOutput = z.infer<
  typeof SuggestPortfolioCopyOutputSchema
>;

export async function suggestPortfolioCopy(
  input: SuggestPortfolioCopyInput
): Promise<SuggestPortfolioCopyOutput> {
  return suggestPortfolioCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPortfolioCopyPrompt',
  input: {schema: SuggestPortfolioCopyInputSchema},
  output: {schema: SuggestPortfolioCopyOutputSchema},
  prompt: `You are an AI assistant that helps content creators generate engaging copy for their portfolio items.

  Based on the project description, target audience, relevant keywords, and examples of successful case studies, you will suggest a title and a summary for the portfolio item.

  Project Description: {{{projectDescription}}}
  Target Audience: {{{targetAudience}}}
  Keywords: {{{keywords}}}
  Successful Case Studies: {{{successfulCaseStudies}}}

  Please provide a title and a summary that will resonate with the target audience and highlight the key benefits of the project.
  The title should be concise and attention-grabbing, while the summary should provide a brief overview of the project and its results.
  `,
});

const suggestPortfolioCopyFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioCopyFlow',
    inputSchema: SuggestPortfolioCopyInputSchema,
    outputSchema: SuggestPortfolioCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
