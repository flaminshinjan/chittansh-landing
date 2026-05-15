import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './sanity/env';

export default defineCliConfig({
  api: { projectId, dataset },
  /**
   * Hosted studio name (used by `sanity deploy`). Edit if you want a custom
   * subdomain at *.sanity.studio. We embed the studio at /studio in Next.js,
   * so this is optional.
   */
  studioHost: 'chittansh',
});
