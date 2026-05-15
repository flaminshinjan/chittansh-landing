import { defineField, defineType } from 'sanity';

export const shipLogEntry = defineType({
  name: 'shipLogEntry',
  title: 'Ship log entry',
  type: 'document',
  fields: [
    defineField({
      name: 'shippedDate',
      title: 'Shipped date',
      type: 'date',
      validation: r => r.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
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
      name: 'domain',
      title: 'Domain (e.g. voice, ops, banking)',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name (e.g. echo-returns.case)',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'brief',
      title: 'One-line brief',
      type: 'string',
      validation: r => r.required().max(220),
    }),
    defineField({
      name: 'href',
      title: 'Link (optional)',
      type: 'string',
      description: 'Path like "/case-studies/echo-returns" or full URL. Leave blank for "#".',
    }),
    defineField({
      name: 'pinned',
      title: 'Pin to top of log',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Most recent first',
      name: 'recent',
      by: [
        { field: 'pinned', direction: 'desc' },
        { field: 'shippedDate', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'brief', date: 'shippedDate', status: 'status' },
    prepare({ title, subtitle, date, status }) {
      return {
        title: title as string,
        subtitle: `${date ?? '—'} · [${(status as string)?.toUpperCase()}] ${subtitle ?? ''}`,
      };
    },
  },
});
