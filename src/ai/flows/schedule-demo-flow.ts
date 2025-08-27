
'use server';
/**
 * @fileOverview A flow for scheduling a demo.
 *
 * - scheduleDemo - A function that handles the demo scheduling process.
 * - ScheduleDemoInput - The input type for the scheduleDemo function.
 * - ScheduleDemoOutput - The return type for the scheduleDemo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ScheduleDemoInputSchema = z.object({
  name: z.string().describe('The name of the person scheduling the demo.'),
  email: z.string().email().describe('The email of the person scheduling the demo.'),
  companyWebsite: z.string().url().describe("The person's company website."),
  aiSolution: z.enum(['yes', 'no', 'exploring']).describe('Whether the person has implemented AI solutions.'),
  notes: z.string().optional().describe('Additional notes from the person.'),
  dateTime: z.string().datetime().describe('The ISO 8601 date and time for the demo.'),
});

export type ScheduleDemoInput = z.infer<typeof ScheduleDemoInputSchema>;

const ScheduleDemoOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ScheduleDemoOutput = z.infer<typeof ScheduleDemoOutputSchema>;

export async function scheduleDemo(input: ScheduleDemoInput): Promise<ScheduleDemoOutput> {
  return scheduleDemoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scheduleDemoPrompt',
  input: { schema: ScheduleDemoInputSchema },
  output: { schema: ScheduleDemoOutputSchema },
  prompt: `A user has scheduled a discovery call. Here is their information:

Name: {{{name}}}
Email: {{{email}}}
Company Website: {{{companyWebsite}}}
Date & Time: {{{dateTime}}}
Already Implemented AI: {{{aiSolution}}}
Additional Notes:
{{{notes}}}

Acknowledge receipt of the information and confirm the meeting. Respond with a success message.
`,
});

const scheduleDemoFlow = ai.defineFlow(
  {
    name: 'scheduleDemoFlow',
    inputSchema: ScheduleDemoInputSchema,
    outputSchema: ScheduleDemoOutputSchema,
  },
  async (input) => {
    console.log('Scheduling demo with input:', input);
    
    // In a real application, you would integrate with a calendar API,
    // send emails, and save the data to a database.
    // For this example, we'll just log it and return a success message.

    const { output } = await prompt(input);

    if (!output) {
      return {
        success: false,
        message: 'Failed to get a response from the AI model.',
      };
    }

    return {
      success: true,
      message: output.message,
    };
  }
);

    