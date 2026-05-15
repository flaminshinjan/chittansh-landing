#!/usr/bin/env node
/**
 * Seeds Sanity with the original hardcoded demos + ship-log entries
 * from the landing page, so nothing is lost on the switch to CMS.
 *
 * Usage:
 *   1. Create a Sanity project (https://www.sanity.io/manage), grab projectId/dataset.
 *   2. Generate an "Editor" token with write access.
 *   3. Set env in frontend/.env.local:
 *        NEXT_PUBLIC_SANITY_PROJECT_ID=...
 *        NEXT_PUBLIC_SANITY_DATASET=production
 *        SANITY_WRITE_TOKEN=...
 *   4. From frontend/ run: npm run seed
 *
 * Re-running is safe: each doc has a deterministic _id and is upserted with createOrReplace.
 */
import { createClient } from '@sanity/client';
import { config as loadEnv } from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
loadEnv({ path: resolve(__dirname, '../.env.local') });
loadEnv({ path: resolve(__dirname, '../.env') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN.');
  console.error('Set them in frontend/.env.local, then run npm run seed again.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

const demos = [
  {
    num: '01',
    order: 10,
    name: 'echo-returns.case',
    slug: 'echo-returns',
    domain: 'voice · e-comm',
    badge: 'live',
    featuredOnHome: true,
    summary:
      'Inbound voice agent handling 38% of returns & exchange calls e2e. Sub-1.4s, tool-using, escalates clean on edge cases.',
    stack: [
      'streaming ASR + custom TTS · sub-1.4s',
      'tool-use over order & carrier APIs',
      'recording & review baked in',
    ],
    metric: { value: '38%', label: 'calls fully contained' },
    ctas: [
      { label: 'watch loom', href: '#', variant: 'primary' },
      { label: 'call demo line', href: '#', variant: 'ghost' },
    ],
    media: { kind: 'placeholder', placeholderText: 'loom · drop in real video' },
    caseStudy: {
      enabled: true,
      lede:
        '24/7 voice agent handling order, returns and post-purchase queries. fluent in three languages, accountable to a queue.',
      caseDomain: 'e-commerce · customer ops',
      problem: [
        'BPO queues collapsing under high-volume, low-margin queries',
        '40% of calls were repeatable status, returns, refund flows',
        'IVR menus deflected customers, didn’t resolve them',
        'no data loop back to product, ops, fulfilment',
      ],
      whatWeBuilt: [
        'low-latency voice agent, OMS-grounded, multilingual',
        'live tool-use: order lookup, refund issue, return scheduling',
        'escalation policy with full transcript hand-off to humans',
        'insights pipeline feeding product, ops, fulfilment leads',
      ],
      impact: [
        { value: '72%', label: 'calls fully contained' },
        { value: '3', label: 'languages in prod' },
        { value: '+31%', label: 'first-call resolution' },
        { value: '22s', label: 'median time-to-answer' },
      ],
      whyItMatters:
        'voice stopped being a deflection layer and became the operating layer for post-purchase. measured the way the ops team measures itself.',
      shippedDate: '2026-04-12',
    },
  },
  {
    num: '02',
    order: 20,
    name: 'ledger-copilot.case',
    slug: 'ledger-copilot',
    domain: 'advisor · wealth',
    badge: 'live',
    featuredOnHome: true,
    summary:
      'Advisor cockpit that drafts suitability memos from KYC + portfolio + house view. Every line cited back to rule, position or note.',
    stack: [
      'Claude 3.5 + custom suitability reasoner',
      'RAG over 14k regulator filings',
      'audit pack auto-rendered to PDF',
    ],
    metric: { value: '−72%', label: 'memo drafting time' },
    ctas: [
      { label: 'watch loom', href: '#', variant: 'primary' },
      { label: 'walkthrough', href: '#', variant: 'ghost' },
    ],
    media: { kind: 'placeholder', placeholderText: 'screenshot · drop in cockpit shot' },
    caseStudy: {
      enabled: true,
      lede:
        'regulated ai advisor inside a wealth platform. personalised, explainable, defensible to compliance.',
      caseDomain: 'wealth · regulated finance',
      problem: [
        'advisors served only the top decile of clients in any depth',
        'mass-affluent segment got generic, untimely guidance',
        'every personalised recommendation needed compliance review',
        'no system tied advice given to outcomes observed',
      ],
      whatWeBuilt: [
        'personalised advisor grounded in portfolio + house view',
        'recommendation engine with explicit risk + suitability gates',
        'explainability surface: every advice item traces to evidence',
        'compliance co-pilot: pre-cleared templates, audit trail',
      ],
      impact: [
        { value: '8.5×', label: 'clients per advisor' },
        { value: '2.4×', label: 'activation on recs' },
        { value: '100%', label: 'advice audit-traceable' },
        { value: '0', label: 'compliance escalations' },
      ],
      whyItMatters:
        'personalised advice stopped being a privilege of the top decile. without the compliance team losing a single night of sleep.',
      shippedDate: '2026-03-08',
    },
  },
  {
    num: '03',
    order: 30,
    name: 'triage-os.case',
    slug: 'triage-os',
    domain: 'claims · insurance',
    badge: 'sandbox',
    featuredOnHome: true,
    summary:
      'Claims triage console for motor & health. Reads FNOL, photos, policy, history. Proposes a path, flags fraud, hands one screen to the adjuster.',
    stack: [
      'vision (damage) + text reasoner',
      'fraud signals from policy + history',
      'adjuster cockpit with override review',
    ],
    metric: { value: '4.1×', label: 'adjuster throughput' },
    ctas: [
      { label: 'open sandbox', href: '#', variant: 'primary' },
      { label: 'watch loom', href: '#', variant: 'ghost' },
    ],
    media: { kind: 'placeholder', placeholderText: 'video · drop in console capture' },
    caseStudy: { enabled: false },
  },
  {
    num: '04',
    order: 40,
    name: 'briefroom.case',
    slug: 'briefroom',
    domain: 'editorial · media',
    badge: 'live',
    featuredOnHome: true,
    summary:
      'Editorial agent turning wire stories into desk-ready briefs in house voice. Every fact cited back to source. Used in two newsrooms on deadline.',
    stack: [
      'house-style score · per-publication',
      'source citation + change-log',
      'editor cockpit · keyboard-first',
    ],
    metric: { value: '11 min', label: 'median wire → brief' },
    ctas: [
      { label: 'watch loom', href: '#', variant: 'primary' },
      { label: 'case study', href: '/case-studies/briefroom', variant: 'ghost' },
    ],
    media: { kind: 'placeholder', placeholderText: 'screenshot · editor cockpit' },
    caseStudy: {
      enabled: true,
      lede:
        'ai content platform for a category-leading publisher. research, draft, edit, schedule.',
      caseDomain: 'media · publishing',
      problem: [
        'editorial throughput capped at the speed of senior editors',
        'briefs, research, drafts scattered across six tools',
        'generic LLM output failed every house-style check',
        'no audit trail tying published copy back to source',
      ],
      whatWeBuilt: [
        'multi-agent pipeline: research → outline → draft → edit',
        'house-style fine-tunes, evaluated against gold-standard pieces',
        'source-grounded retrieval with inline citation enforcement',
        'editor cockpit with diff-view, approvals, audit history',
      ],
      impact: [
        { value: '4.2×', label: 'editorial throughput' },
        { value: '−61%', label: 'cost per piece' },
        { value: '97%', label: 'house-style pass' },
        { value: '100%', label: 'citation coverage' },
      ],
      whyItMatters:
        'the newsroom didn’t get a writing assistant. it got a production system that publishes with the desk, not around it.',
      shippedDate: '2026-01-15',
    },
  },
  {
    num: '05',
    order: 50,
    name: 'routeline.case',
    slug: 'routeline',
    domain: 'ops · logistics',
    badge: 'private',
    featuredOnHome: true,
    summary:
      'Control-room agent watching exception queues. Writes customer comms, carrier comms and the internal ticket from the same incident.',
    stack: [
      'multi-channel comms · tone-locked',
      'carrier API tool-use · 14 integrations',
      'override + audit baked in',
    ],
    metric: { value: '−61%', label: 'time-on-exception' },
    ctas: [
      { label: 'request access', href: '#', variant: 'primary' },
      { label: 'watch loom', href: '#', variant: 'ghost' },
    ],
    media: { kind: 'placeholder', placeholderText: 'video · control room ui' },
    caseStudy: { enabled: false },
  },
  {
    num: '06',
    order: 60,
    name: 'kyc-conv.case',
    slug: 'kyc-conv',
    domain: 'onboarding · banking',
    badge: 'live',
    featuredOnHome: true,
    summary:
      'Conversational onboarding flow on top of existing KYC. 3-minute chat replaces a 22-field form. We don’t replace the rails, we replace the form.',
    stack: [
      'OCR + verification chain',
      'drop-in for existing KYC vendor',
      'drop-off cut from 41% → 11%',
    ],
    metric: { value: '30×', label: 'completion vs. form' },
    ctas: [
      { label: 'try the flow', href: '#', variant: 'primary' },
      { label: 'watch loom', href: '#', variant: 'ghost' },
    ],
    media: { kind: 'placeholder', placeholderText: 'screenshot · onboarding flow' },
    caseStudy: { enabled: false },
  },
];

const shipLog = [
  {
    shippedDate: '2026-04-12',
    status: 'live',
    domain: 'voice',
    name: 'echo-returns.case',
    brief: 'sub-1.4s voice agent containing 38% of returns & exchange calls e2e',
    href: '/case-studies/echo-returns',
  },
  {
    shippedDate: '2026-03-08',
    status: 'live',
    domain: 'advisor',
    name: 'ledger-copilot.case',
    brief: 'RAG cockpit drafting suitability memos with line-level citations',
    href: '/case-studies/ledger-copilot',
  },
  {
    shippedDate: '2026-02-22',
    status: 'sandbox',
    domain: 'claims',
    name: 'triage-os.case',
    brief: 'vision + text claims triage; fraud signals + adjuster console',
    href: '',
  },
  {
    shippedDate: '2026-01-15',
    status: 'live',
    domain: 'media',
    name: 'briefroom.case',
    brief: 'wire-to-brief in newsroom voice, every fact cited; 11min median',
    href: '/case-studies/briefroom',
  },
  {
    shippedDate: '2025-12-03',
    status: 'private',
    domain: 'ops',
    name: 'routeline.case',
    brief: 'ops control-room agent writing carrier + customer + ticket comms',
    href: '',
  },
  {
    shippedDate: '2025-11-21',
    status: 'live',
    domain: 'banking',
    name: 'kyc-conv.case',
    brief: 'conversational onboarding on top of existing KYC; drop-off 41% → 11%',
    href: '',
  },
];

function demoDocFromSeed(d) {
  return {
    _id: `demo-${d.slug}`,
    _type: 'demo',
    num: d.num,
    order: d.order,
    name: d.name,
    slug: { _type: 'slug', current: d.slug },
    domain: d.domain,
    badge: d.badge,
    featuredOnHome: d.featuredOnHome,
    summary: d.summary,
    stack: d.stack,
    metric: d.metric,
    ctas: d.ctas?.map(c => ({ _type: 'cta', _key: cryptoKey(), ...c })),
    media: d.media,
    caseStudy: d.caseStudy?.enabled
      ? {
          ...d.caseStudy,
          impact: d.caseStudy.impact?.map(m => ({ _key: cryptoKey(), ...m })),
          problem: d.caseStudy.problem,
          whatWeBuilt: d.caseStudy.whatWeBuilt,
        }
      : { enabled: false },
  };
}

function shipDocFromSeed(s, i) {
  return {
    _id: `ship-${s.shippedDate}-${slugify(s.name)}-${i}`,
    _type: 'shipLogEntry',
    shippedDate: s.shippedDate,
    status: s.status,
    domain: s.domain,
    name: s.name,
    brief: s.brief,
    href: s.href || undefined,
    pinned: false,
  };
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function cryptoKey() {
  return Math.random().toString(36).slice(2, 10);
}

async function run() {
  console.log(`▸ seeding project ${projectId} / dataset ${dataset}…`);
  const tx = client.transaction();

  for (const d of demos) {
    tx.createOrReplace(demoDocFromSeed(d));
  }
  shipLog.forEach((s, i) => tx.createOrReplace(shipDocFromSeed(s, i)));

  const res = await tx.commit();
  console.log(`✓ committed ${res.results.length} documents.`);
  console.log(`  demos:    ${demos.length}`);
  console.log(`  shipLog:  ${shipLog.length}`);
}

run().catch(err => {
  console.error('seed failed:', err);
  process.exit(1);
});
