import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../../sanity/image';
import type { Demo } from '../../sanity/types';

const BADGE_LABEL: Record<string, string> = {
  live: 'LIVE',
  sandbox: 'SANDBOX',
  private: 'PRIVATE',
  nda: 'NDA',
};

function titleCaseFromName(name: string): string {
  // "echo-returns.case" → "Echo Returns"
  const stem = name.replace(/\.case$/i, '');
  return stem
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function DemoCard({ demo }: { demo: Demo }) {
  const badgeClass = demo.badge ?? 'live';
  const badgeLabel = BADGE_LABEL[badgeClass] ?? 'LIVE';
  const displayName = titleCaseFromName(demo.name);
  const href =
    demo.caseStudy?.enabled && demo.slug?.current
      ? `/case-studies/${demo.slug.current}`
      : '#';

  return (
    <Link href={href} className="demo-card">
      <div className="demo-card__media">
        <DemoMedia demo={demo} />
        <span className={`demo-card__badge${badgeClass !== 'private' ? ` ${badgeClass}` : ''}`}>
          {badgeLabel}
        </span>
        <button className="demo-card__play" type="button" aria-label="Play" tabIndex={-1}>
          <span className="tri"></span>
        </button>
      </div>
      <div className="demo-card__body">
        <div className="demo-card__meta">
          <span className="demo-card__domain">{demo.domain}</span>
        </div>
        <h3 className="h-card demo-card__name">{displayName}</h3>
        <p className="demo-card__dek">{demo.summary}</p>
        <div className="demo-card__foot">
          {demo.metric ? (
            <div className="demo-card__metric">
              <b>{demo.metric.value}</b>
              <span>{demo.metric.label}</span>
            </div>
          ) : (
            <div className="demo-card__metric" />
          )}
          <span className="demo-card__more">
            {demo.caseStudy?.enabled ? 'Case study' : demo.ctas?.[0]?.label || 'Walkthrough'}{' '}
            <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function DemoMedia({ demo }: { demo: Demo }) {
  const media = demo.media;
  const placeholder = media?.placeholderText ?? 'media · drop in';

  if (media?.kind === 'image' && media.image) {
    const src = urlForImage(media.image as any).width(900).url();
    return (
      <div className="demo-card__media-slot">
        <Image
          src={src}
          alt={demo.name}
          fill
          sizes="(min-width: 1000px) 33vw, 100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  if ((media?.kind === 'embed' || media?.kind === 'loom' || media?.kind === 'video') && media.url) {
    return (
      <div className="demo-card__media-slot">
        <iframe
          src={media.url}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="demo-card__media-slot">
      <span>{placeholder}</span>
    </div>
  );
}
