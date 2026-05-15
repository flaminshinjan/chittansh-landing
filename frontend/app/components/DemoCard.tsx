import Image from 'next/image';
import { urlForImage } from '../../sanity/image';
import type { Demo } from '../../sanity/types';

const BADGE_LABEL: Record<string, string> = {
  live: 'LIVE',
  sandbox: 'SANDBOX',
  private: 'PRIVATE',
  nda: 'NDA',
};

export default function DemoCard({ demo }: { demo: Demo }) {
  const badgeClass = demo.badge ?? 'live';
  const badgeLabel = BADGE_LABEL[badgeClass] ?? 'LIVE';
  const slot = demo.slug?.current ?? demo.num;

  return (
    <article className="term-demo">
      <header className="term-demo__head">
        <span className="term-demo__num">{demo.num}</span>
        <span className="term-demo__name">{demo.name}</span>
        <span className="term-demo__dom">{demo.domain}</span>
        <span className={`term-demo__badge ${badgeClass}`}>[ {badgeLabel} ]</span>
      </header>

      <div className="term-demo__media">
        <DemoMedia demo={demo} slot={slot} />
        <button className="term-demo__play" type="button" aria-label="Watch demo">
          <span className="tri"></span>
        </button>
      </div>

      <div className="term-demo__body">
        <div className="term-demo__row">
          <span className="agent-term__label">// summary</span>
          <p>{demo.summary}</p>
        </div>

        {demo.stack?.length ? (
          <div className="term-demo__row term-demo__row--stack">
            <span className="agent-term__label">// stack</span>
            <ul className="term-demo__stack">
              {demo.stack.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <footer className="term-demo__foot">
          {demo.metric ? (
            <div className="term-demo__metric">
              <b>{demo.metric.value}</b>
              <span>{demo.metric.label}</span>
            </div>
          ) : (
            <div className="term-demo__metric" />
          )}
          <div className="term-demo__cta">
            {demo.ctas?.length
              ? demo.ctas.map((cta, i) => (
                  <a
                    key={i}
                    href={cta.href}
                    className={
                      'term-cta-btn term-cta-btn--sm' +
                      (cta.variant === 'ghost' ? ' term-cta-btn--ghost' : '')
                    }
                  >
                    [ {cta.label} ]
                  </a>
                ))
              : demo.caseStudy?.enabled && (
                  <a
                    href={`/case-studies/${demo.slug.current}`}
                    className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost"
                  >
                    [ case study ]
                  </a>
                )}
          </div>
        </footer>
      </div>
    </article>
  );
}

function DemoMedia({ demo, slot }: { demo: Demo; slot: string }) {
  const media = demo.media;
  if (!media) {
    return (
      <div className="term-demo__slot" data-slot={slot}>
        <span className="mono">media · drop in</span>
      </div>
    );
  }

  if (media.kind === 'image' && media.image) {
    const src = urlForImage(media.image as any).width(1200).url();
    return (
      <div className="term-demo__slot" data-slot={slot}>
        <Image
          src={src}
          alt={demo.name}
          fill
          sizes="(min-width: 900px) 33vw, 100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  if ((media.kind === 'embed' || media.kind === 'loom' || media.kind === 'video') && media.url) {
    return (
      <div className="term-demo__slot" data-slot={slot}>
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
    <div className="term-demo__slot" data-slot={slot}>
      <span className="mono">{media.placeholderText ?? 'media · drop in'}</span>
    </div>
  );
}
