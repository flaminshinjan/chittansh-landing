import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  basePath: '/studio',
  name: 'chittansh-studio',
  title: 'chittansh.ai · studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Demos')
              .child(S.documentTypeList('demo').title('Demos')),
            S.listItem()
              .title('Ship log')
              .child(S.documentTypeList('shipLogEntry').title('Ship log entries')),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
