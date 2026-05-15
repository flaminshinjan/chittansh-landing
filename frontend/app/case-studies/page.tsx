import Header from '../components/Header';

export const metadata = {
  title: 'chittansh.ai/cases',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main className="term-main">

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> ls <span className="flag">-lat</span> ./cases/</div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> three production systems · what we built, how it's wired, what changed
          </div>
        </section>

        {/* CASE 01 */}
        <section id="case-01" className="term-block term-case">
          <div className="term-case__head">
            <span className="term-case__num">[case 01]</span>
            <span className="term-case__name">briefroom.case</span>
            <span className="term-case__domain">media · publishing</span>
            <span className="term-case__badge live">[ LIVE ]</span>
          </div>
          <p className="term-case__lede">&gt; ai content platform for a category-leading publisher. research, draft, edit, schedule.</p>

          <div className="term-case__body">
            <div className="term-case__col">
              <span className="agent-term__label">// the problem</span>
              <ul>
                <li>editorial throughput capped at the speed of senior editors</li>
                <li>briefs, research, drafts scattered across six tools</li>
                <li>generic LLM output failed every house-style check</li>
                <li>no audit trail tying published copy back to source</li>
              </ul>
            </div>
            <div className="term-case__col">
              <span className="agent-term__label">// what we built</span>
              <ul>
                <li>multi-agent pipeline: research → outline → draft → edit</li>
                <li>house-style fine-tunes, evaluated against gold-standard pieces</li>
                <li>source-grounded retrieval with inline citation enforcement</li>
                <li>editor cockpit with diff-view, approvals, audit history</li>
              </ul>
            </div>
          </div>

          <div className="term-case__impact">
            <div><b>4.2×</b><span>editorial throughput</span></div>
            <div><b>−61%</b><span>cost per piece</span></div>
            <div><b>97%</b><span>house-style pass</span></div>
            <div><b>100%</b><span>citation coverage</span></div>
          </div>

          <div className="term-case__why">
            <span className="agent-term__label">// why it matters</span>
            <p>&gt; the newsroom didn't get a writing assistant. it got a production system that publishes with the desk, not around it.</p>
          </div>
        </section>

        <hr className="term-rule" />

        {/* CASE 02 */}
        <section id="case-02" className="term-block term-case">
          <div className="term-case__head">
            <span className="term-case__num">[case 02]</span>
            <span className="term-case__name">echo-returns.case</span>
            <span className="term-case__domain">e-commerce · customer ops</span>
            <span className="term-case__badge live">[ LIVE ]</span>
          </div>
          <p className="term-case__lede">&gt; 24/7 voice agent handling order, returns and post-purchase queries. fluent in three languages, accountable to a queue.</p>

          <div className="term-case__body">
            <div className="term-case__col">
              <span className="agent-term__label">// the problem</span>
              <ul>
                <li>BPO queues collapsing under high-volume, low-margin queries</li>
                <li>40% of calls were repeatable status, returns, refund flows</li>
                <li>IVR menus deflected customers, didn't resolve them</li>
                <li>no data loop back to product, ops, fulfilment</li>
              </ul>
            </div>
            <div className="term-case__col">
              <span className="agent-term__label">// what we built</span>
              <ul>
                <li>low-latency voice agent, OMS-grounded, multilingual</li>
                <li>live tool-use: order lookup, refund issue, return scheduling</li>
                <li>escalation policy with full transcript hand-off to humans</li>
                <li>insights pipeline feeding product, ops, fulfilment leads</li>
              </ul>
            </div>
          </div>

          <div className="term-case__impact">
            <div><b>72%</b><span>calls fully contained</span></div>
            <div><b>3</b><span>languages in prod</span></div>
            <div><b>+31%</b><span>first-call resolution</span></div>
            <div><b>22s</b><span>median time-to-answer</span></div>
          </div>

          <div className="term-case__why">
            <span className="agent-term__label">// why it matters</span>
            <p>&gt; voice stopped being a deflection layer and became the operating layer for post-purchase. measured the way the ops team measures itself.</p>
          </div>
        </section>

        <hr className="term-rule" />

        {/* CASE 03 */}
        <section id="case-03" className="term-block term-case">
          <div className="term-case__head">
            <span className="term-case__num">[case 03]</span>
            <span className="term-case__name">ledger-copilot.case</span>
            <span className="term-case__domain">wealth · regulated finance</span>
            <span className="term-case__badge live">[ LIVE ]</span>
          </div>
          <p className="term-case__lede">&gt; regulated ai advisor inside a wealth platform. personalised, explainable, defensible to compliance.</p>

          <div className="term-case__body">
            <div className="term-case__col">
              <span className="agent-term__label">// the problem</span>
              <ul>
                <li>advisors served only the top decile of clients in any depth</li>
                <li>mass-affluent segment got generic, untimely guidance</li>
                <li>every personalised recommendation needed compliance review</li>
                <li>no system tied advice given to outcomes observed</li>
              </ul>
            </div>
            <div className="term-case__col">
              <span className="agent-term__label">// what we built</span>
              <ul>
                <li>personalised advisor grounded in portfolio + house view</li>
                <li>recommendation engine with explicit risk + suitability gates</li>
                <li>explainability surface: every advice item traces to evidence</li>
                <li>compliance co-pilot: pre-cleared templates, audit trail</li>
              </ul>
            </div>
          </div>

          <div className="term-case__impact">
            <div><b>8.5×</b><span>clients per advisor</span></div>
            <div><b>2.4×</b><span>activation on recs</span></div>
            <div><b>100%</b><span>advice audit-traceable</span></div>
            <div><b>0</b><span>compliance escalations</span></div>
          </div>

          <div className="term-case__why">
            <span className="agent-term__label">// why it matters</span>
            <p>&gt; personalised advice stopped being a privilege of the top decile. without the compliance team losing a single night of sleep.</p>
          </div>
        </section>

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> chittansh.ai <span className="flag">--your-case-next</span></div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> these could be us writing about you in 12 weeks
          </div>
          <div className="term-cta-row">
            <a href="/#agent" className="term-cta-btn">[ open plan_builder ↵ ]</a>
            <a href="mailto:hello@chittanshai.com" className="term-cta-btn term-cta-btn--ghost">[ email instead ]</a>
          </div>
        </section>

        <hr className="term-rule" />

        <section id="contact" className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> chittansh.ai <span className="flag">--contact</span></div>
          <div className="term-contact">
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; email</span>
              <a href="mailto:hello@chittanshai.com" className="term-contact__v">hello@chittanshai.com</a>
              <span className="term-contact__meta">reply within 6h, weekdays</span>
            </div>
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; office</span>
              <span className="term-contact__v">gurgaon · bengaluru</span>
              <span className="term-contact__meta">by appointment</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
