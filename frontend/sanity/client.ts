import { createClient } from 'next-sanity';
import { apiVersion, dataset, isConfigured, projectId, useCdn } from './env';

export const client = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null;
