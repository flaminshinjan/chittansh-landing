import type { Demo } from '../../sanity/types';

const BADGE_LABEL: Record<string, string> = {
  live: 'LIVE',
  sandbox: 'SANDBOX',
  private: 'PRIVATE',
  nda: 'NDA',
};

function titleCaseFromName(name: string): string {
  const stem = name.replace(/\.case$/i, '');
  return stem
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function CaseStudy({ demo, index }: { demo: Demo; index?: number }) {
  const cs = demo.caseStudy;
  if (!cs?.enabled) return null;

  const badgeClass = demo.badge ?? 'live';
  const badgeLabel = BADGE_LABEL[badgeClass] ?? 'LIVE';
  const caseNumber = index !== undefined ? `Case ${String(index + 1).padStart(2, '0')}` : `Case ${demo.num}`;

  return (
    <article id={`case-${demo.slug.current}`} className="case">
      <header className="case__head">
        <span className="case__num">{caseNumber}</span>
        <span className="case__domain">{cs.caseDomain ?? demo.domain}</span>
        <span className="case__badge">{badgeLabel}</span>
      </header>
      <h2 className="h-section case__title">{titleCaseFromName(demo.name)}</h2>
      {cs.lede ? <p className="case__lede">{cs.lede}</p> : null}

      <div className="case__body">
        {cs.problem?.length ? (
          <div className="case__col problem">
            <h4>The Problem</h4>
            <ul>
              {cs.problem.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {cs.whatWeBuilt?.length ? (
          <div className="case__col built">
            <h4>What We Built</h4>
            <ul>
              {cs.whatWeBuilt.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {cs.impact?.length ? (
        <div className="case__impact">
          {cs.impact.map((m, i) => (
            <div key={i}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      {cs.whyItMatters ? (
        <div className="case__why">
          <h4>Why it matters</h4>
          <p>{cs.whyItMatters}</p>
        </div>
      ) : null}
    </article>
  );
}
