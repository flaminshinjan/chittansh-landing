'use client';

/**
 * Embedded Sanity Studio mounted at /studio.
 * Edit content at http://localhost:3000/studio in dev,
 * and at /studio in production once Sanity env vars are set.
 */
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
