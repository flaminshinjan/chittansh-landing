import type { Demo } from '../../sanity/types';

const BADGE_LABEL: Record<string, string> = {
  live: 'LIVE',
  sandbox: 'SANDBOX',
  private: 'PRIVATE',
  nda: 'NDA',
};

export default function CaseStudy({ demo, index }: { demo: Demo; index?: number }) {
  const cs = demo.caseStudy;
  if (!cs?.enabled) return null;

  const badgeClass = demo.badge ?? 'live';
  const badgeLabel = BADGE_LABEL[badgeClass] ?? 'LIVE';
  const numLabel = index !== undefined ? `[case ${String(index + 1).padStart(2, '0')}]` : `[case ${demo.num}]`;

  return (
    <section id={`case-${demo.slug.current}`} className="term-block term-case">
      <div className="term-case__head">
        <span className="term-case__num">{numLabel}</span>
        <span className="term-case__name">{demo.name}</span>
        <span className="term-case__domain">{cs.caseDomain ?? demo.domain}</span>
        <span className={`term-case__badge ${badgeClass}`}>[ {badgeLabel} ]</span>
      </div>

      {cs.lede ? <p className="term-case__lede">&gt; {cs.lede}</p> : null}

      <div className="term-case__body">
        {cs.problem?.length ? (
          <div className="term-case__col">
            <span className="agent-term__label">// the problem</span>
            <ul>
              {cs.problem.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {cs.whatWeBuilt?.length ? (
          <div className="term-case__col">
            <span className="agent-term__label">// what we built</span>
            <ul>
              {cs.whatWeBuilt.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {cs.impact?.length ? (
        <div className="term-case__impact">
          {cs.impact.map((m, i) => (
            <div key={i}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      {cs.whyItMatters ? (
        <div className="term-case__why">
          <span className="agent-term__label">// why it matters</span>
          <p>&gt; {cs.whyItMatters}</p>
        </div>
      ) : null}
    </section>
  );
}
