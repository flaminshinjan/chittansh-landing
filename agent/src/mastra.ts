import { Mastra } from '@mastra/core';
import { planBuilderAgent } from './agents/plan-builder';

export const mastra = new Mastra({
  agents: { planBuilder: planBuilderAgent },
});
