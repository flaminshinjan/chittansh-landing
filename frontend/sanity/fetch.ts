import { client } from './client';
import {
  allDemosQuery,
  caseStudyDemosQuery,
  demoBySlugQuery,
  demoSlugsQuery,
  featuredDemosQuery,
  shipLogQuery,
} from './queries';
import type { Demo, ShipLogEntry } from './types';

const REVALIDATE = 60;

function warnUnconfigured(what: string) {
  if (!client) {
    console.warn(
      `[sanity] ${what} requested but Sanity is not configured — set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local.`,
    );
    return true;
  }
  return false;
}

export async function getFeaturedDemos(): Promise<Demo[]> {
  if (warnUnconfigured('featured demos')) return [];
  return client!.fetch(featuredDemosQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getAllDemos(): Promise<Demo[]> {
  if (warnUnconfigured('all demos')) return [];
  return client!.fetch(allDemosQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getCaseStudyDemos(): Promise<Demo[]> {
  if (warnUnconfigured('case study demos')) return [];
  return client!.fetch(caseStudyDemosQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getDemoBySlug(slug: string): Promise<Demo | null> {
  if (warnUnconfigured(`demo "${slug}"`)) return null;
  return client!.fetch(demoBySlugQuery, { slug }, { next: { revalidate: REVALIDATE } });
}

export async function getDemoSlugs(): Promise<string[]> {
  if (warnUnconfigured('demo slugs')) return [];
  return client!.fetch(demoSlugsQuery, {}, { next: { revalidate: REVALIDATE } });
}

export async function getShipLog(): Promise<ShipLogEntry[]> {
  if (warnUnconfigured('ship log')) return [];
  return client!.fetch(shipLogQuery, {}, { next: { revalidate: REVALIDATE } });
}
