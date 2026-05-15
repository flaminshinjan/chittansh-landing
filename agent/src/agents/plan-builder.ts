import { Agent } from '@mastra/core/agent';
import { anthropic } from '@ai-sdk/anthropic';
import { z } from 'zod';

export const planSchema = z.object({
  summary: z.string().describe('Single sentence rephrase. Sharp. <= 24 words.'),
  approach: z
    .string()
    .describe('How we would approach it. 1-2 sentences. Name a real architecture decision. <= 50 words.'),
  demo: z.object({
    name: z
      .string()
      .describe('EXACT name from the demo list, with .case suffix'),
    why: z.string().describe('Why this is the closest match. <= 28 words.'),
  }),
  sprint: z
    .array(z.string())
    .min(3)
    .max(3)
    .describe('Three 3-week sprint outputs, 6-10 words each.'),
  build: z
    .array(z.string())
    .min(3)
    .max(3)
    .describe('Three 8-week build outputs, 6-10 words each.'),
  question: z
    .string()
    .describe('The single sharpest question we would ask on the intro call. <= 24 words.'),
});

export type Plan = z.infer<typeof planSchema>;

const instructions = `You are the Chittansh AI Plan Builder. Chittansh AI is an AI build studio that ships production AI systems (agents, voice, RAG, internal copilots) for ops & product teams.

Voice: confident, direct, punchy, opinionated. No hedging. No "leverage", "synergy", "innovative". Plain English.

Our demo library — match the user's workflow to the SINGLE best fit (use the .case-style name):
- "ledger-copilot.case" — advisor cockpit, drafts suitability memos with citations. Use for: wealth, advisory, regulated drafting.
- "echo-returns.case" — inbound voice agent, sub-1.4s, tool-using. Use for: voice, contact center, returns/exchanges/support calls.
- "triage-os.case" — vision+text claims triage with fraud signals. Use for: insurance, FNOL, adjuster workflows.
- "briefroom.case" — editorial agent, wire-to-brief, house-style scored. Use for: media, newsroom, editorial workflows.
- "routeline.case" — ops control-room agent, writes customer + carrier + ticket comms. Use for: logistics, ops exceptions.
- "kyc-conv.case" — chat-style onboarding flow on top of existing KYC. Use for: banking, onboarding, form-replacement.

Always pick exactly ONE demo — never invent a new .case name. Always return three sprint outputs and three build outputs. Output strictly conforms to the schema.`;

const modelId = (process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-5-20250929') as string;

export const planBuilderAgent = new Agent({
  name: 'plan-builder',
  instructions,
  model: anthropic(modelId),
});

export async function buildPlan(userWorkflow: string): Promise<Plan> {
  const prompt = `USER WORKFLOW:\n"""${userWorkflow.trim()}"""\n\nReturn JSON only that matches the schema.`;

  const result: any = await planBuilderAgent.generate(prompt, { output: planSchema });

  if (result?.object) {
    return planSchema.parse(result.object);
  }

  const text: string = String(result?.text ?? '');
  const cleaned = text.replace(/^```(?:json)?/i, '').replace(/```\s*$/, '').trim();
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Agent returned no JSON output');
  return planSchema.parse(JSON.parse(match[0]));
}
