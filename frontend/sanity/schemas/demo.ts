import { defineField, defineType } from 'sanity';

export const demo = defineType({
  name: 'demo',
  title: 'Demo',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'card', title: 'Landing card' },
    { name: 'media', title: 'Media' },
    { name: 'case', title: 'Case study' },
  ],
  fields: [
    // ── identity ──────────────────────────────────────────────────────
    defineField({
      name: 'num',
      title: 'Number (display, e.g. 01)',
      type: 'string',
      group: 'identity',
      validation: r => r.required().regex(/^\d{2}$/, { name: 'two-digit' }),
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      group: 'identity',
      description: 'Lower = shown first on the landing grid.',
      validation: r => r.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name (e.g. echo-returns.case)',
      type: 'string',
      group: 'identity',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'identity',
      options: { source: 'name', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'domain',
      title: 'Domain tag (e.g. voice · e-comm)',
      type: 'string',
      group: 'identity',
      validation: r => r.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Status badge',
      type: 'string',
      group: 'identity',
      options: {
        list: [
          { title: 'LIVE', value: 'live' },
          { title: 'SANDBOX', value: 'sandbox' },
          { title: 'PRIVATE', value: 'private' },
          { title: 'NDA', value: 'nda' },
        ],
        layout: 'radio',
      },
      initialValue: 'live',
      validation: r => r.required(),
    }),
    defineField({
      name: 'featuredOnHome',
      title: 'Featured on home page',
      type: 'boolean',
      group: 'identity',
      initialValue: true,
    }),

    // ── landing card ──────────────────────────────────────────────────
    defineField({
      name: 'summary',
      title: 'Summary (card body)',
      type: 'text',
      rows: 3,
      group: 'card',
      validation: r => r.required().max(300),
    }),
    defineField({
      name: 'stack',
      title: 'Stack bullets (3 lines)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'card',
      validation: r => r.required().min(1).max(6),
    }),
    defineField({
      name: 'metric',
      title: 'Headline metric',
      type: 'object',
      group: 'card',
      fields: [
        { name: 'value', title: 'Value (e.g. 38%)', type: 'string', validation: r => r.required() },
        { name: 'label', title: 'Label (e.g. calls fully contained)', type: 'string', validation: r => r.required() },
      ],
    }),
    defineField({
      name: 'ctas',
      title: 'Card CTAs (1–2)',
      type: 'array',
      group: 'card',
      of: [
        defineField({
          name: 'cta',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label (e.g. watch loom)', type: 'string', validation: r => r.required() },
            { name: 'href', title: 'URL', type: 'url', validation: r => r.required() },
            {
              name: 'variant',
              title: 'Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Ghost', value: 'ghost' },
                ],
                layout: 'radio',
              },
              initialValue: 'primary',
            },
          ],
        }),
      ],
      validation: r => r.max(2),
    }),

    // ── media ─────────────────────────────────────────────────────────
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      group: 'media',
      fields: [
        {
          name: 'kind',
          title: 'Kind',
          type: 'string',
          options: {
            list: [
              { title: 'Loom (video URL)', value: 'loom' },
              { title: 'Generic video URL', value: 'video' },
              { title: 'Image / screenshot', value: 'image' },
              { title: 'Embed (iframe URL)', value: 'embed' },
              { title: 'Placeholder (text only)', value: 'placeholder' },
            ],
            layout: 'radio',
          },
          initialValue: 'placeholder',
          validation: r => r.required(),
        },
        { name: 'url', title: 'URL (for loom/video/embed)', type: 'url' },
        { name: 'image', title: 'Image / poster', type: 'image', options: { hotspot: true } },
        { name: 'placeholderText', title: 'Placeholder text (when no media yet)', type: 'string' },
      ],
    }),

    // ── case study ────────────────────────────────────────────────────
    defineField({
      name: 'caseStudy',
      title: 'Case study',
      type: 'object',
      group: 'case',
      fields: [
        {
          name: 'enabled',
          title: 'Has full case study?',
          type: 'boolean',
          initialValue: false,
        },
        { name: 'lede', title: 'Lede', type: 'text', rows: 2 },
        { name: 'caseDomain', title: 'Domain label (long form)', type: 'string' },
        {
          name: 'problem',
          title: 'The problem (bullets)',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'whatWeBuilt',
          title: 'What we built (bullets)',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'impact',
          title: 'Impact metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'value', title: 'Value', type: 'string', validation: r => r.required() },
                { name: 'label', title: 'Label', type: 'string', validation: r => r.required() },
              ],
              preview: {
                select: { title: 'value', subtitle: 'label' },
              },
            },
          ],
        },
        { name: 'whyItMatters', title: 'Why it matters', type: 'text', rows: 3 },
        { name: 'shippedDate', title: 'Shipped date', type: 'date' },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'domain',
      media: 'media.image',
      badge: 'badge',
    },
    prepare({ title, subtitle, media, badge }) {
      return {
        title: title as string,
        subtitle: `[${(badge as string)?.toUpperCase() ?? 'LIVE'}] ${subtitle ?? ''}`,
        media: media as any,
      };
    },
  },
});
