import Header from '../components/Header';

export const metadata = {
  title: 'Services — Chittansh AI',
  description:
    'Four production AI surfaces — voice, agents, RAG, internal copilots. Three engagement modes — sprint, build, operating partner.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <section className="hero hero--page">
        <div className="container hero__inner">
          <span className="pill-kicker hero__pill">SERVICES</span>
          <h1 className="h-display hero__title">
            We build the AI <em>that goes on-call.</em>
          </h1>
          <p className="lede hero__lede">
            Four production surfaces, three engagement modes. No general-purpose chatbots — every
            system we ship is connected to a P&amp;L line, an SLA, or somebody&rsquo;s pager.
          </p>
        </div>
      </section>

      {/* ============== SURFACES ============== */}
      <section className="container section" id="surfaces">
        <div className="section-head">
          <span className="section-head__pill">What we build</span>
          <h2 className="h-section section-head__title">
            Four surfaces. <em>All shipped to production.</em>
          </h2>
        </div>

        {/* VOICE */}
        <div className="surface-row">
          <div className="surface-row__media">
            <div className="surface-row__media-inner">
              <span className="surface-row__chip">⌁ LIVE CALL</span>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">CUSTOMER · 0:04</div>
                <div className="surface-row__mockup-line">&ldquo;Need to swap a small for a medium.&rdquo;</div>
              </div>
              <div
                className="surface-row__mockup"
                style={{ marginLeft: 24, background: '#1A1714', color: 'white', borderColor: '#1A1714' }}
              >
                <div className="surface-row__mockup-label" style={{ color: 'rgba(255,255,255,.55)' }}>
                  AGENT · 0:05 · ⌁ 1.3s
                </div>
                <div className="surface-row__mockup-line" style={{ color: 'white' }}>
                  → <code>oms.lookupOrder(8821)</code>
                </div>
                <div className="surface-row__mockup-line" style={{ color: 'rgba(255,255,255,.85)' }}>
                  &ldquo;Got it. Same colour, free exchange.&rdquo;
                </div>
              </div>
            </div>
          </div>
          <div className="surface-row__body">
            <span className="surface-row__num">Surface 01</span>
            <h3 className="surface-row__title">
              Voice agents <em>that don&rsquo;t sound like 2022.</em>
            </h3>
            <p className="surface-row__dek">
              Streaming voice, sub-1.4s end-to-end. Tool-use over your order, CRM and payment APIs.
              Recording, audit and escalation policy baked in from day one.
            </p>
            <ul className="surface-row__list">
              <li>Inbound &amp; outbound on real telephony</li>
              <li>Custom TTS · voice clones · multilingual</li>
              <li>Override review &amp; warm transfer to humans</li>
            </ul>
            <div className="surface-row__stack">
              <span>SIP</span><span>WebRTC</span><span>Twilio</span><span>Whisper</span><span>Custom TTS</span>
            </div>
          </div>
        </div>

        {/* AGENTS */}
        <div className="surface-row surface-row--flip">
          <div className="surface-row__media">
            <div className="surface-row__media-inner">
              <span className="surface-row__chip">⌁ AGENT RUN · 04 STEPS</span>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">STEP 01 · READ</div>
                <div className="surface-row__mockup-line">FNOL #4421 · motor · photos × 6</div>
              </div>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">STEP 02 · TOOL</div>
                <div className="surface-row__mockup-line">→ <code>vision.damage(img_1..6)</code></div>
              </div>
              <div className="surface-row__mockup" style={{ borderColor: 'var(--accent)' }}>
                <div className="surface-row__mockup-label" style={{ color: 'var(--accent-ink)' }}>STEP 03 · FLAG</div>
                <div className="surface-row__mockup-line">
                  <span className="mk-dot"></span>Fraud signal · review
                </div>
              </div>
            </div>
          </div>
          <div className="surface-row__body">
            <span className="surface-row__num">Surface 02</span>
            <h3 className="surface-row__title">
              Multi-tool agents, <em>inside the surface you already have.</em>
            </h3>
            <p className="surface-row__dek">
              No new SaaS to log into. Agents that live inside your CRM, ticketing tool, editor or
              back-office — and pass the same audit your team does.
            </p>
            <ul className="surface-row__list">
              <li>Multi-step planning · tool-use · explicit guardrails</li>
              <li>Per-action audit trail · replayable for review</li>
              <li>Eval harness · override-rate tracking · drift alerts</li>
            </ul>
            <div className="surface-row__stack">
              <span>LangGraph</span><span>MCP</span><span>Temporal</span><span>Langfuse</span><span>OpenTelemetry</span>
            </div>
          </div>
        </div>

        {/* RAG */}
        <div className="surface-row">
          <div className="surface-row__media">
            <div className="surface-row__media-inner">
              <span className="surface-row__chip">⌁ RETRIEVAL · CITED</span>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">QUERY</div>
                <div className="surface-row__mockup-line">
                  &ldquo;Suitability for retired client, equity 60%?&rdquo;
                </div>
              </div>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">SOURCES · 3</div>
                <div className="surface-row__mockup-line"><code>regulator/A-22.pdf · p. 14</code></div>
                <div className="surface-row__mockup-line"><code>house-view/q1-2026 · §3</code></div>
                <div className="surface-row__mockup-line"><code>kyc/portfolio · 2024-11</code></div>
              </div>
            </div>
          </div>
          <div className="surface-row__body">
            <span className="surface-row__num">Surface 03</span>
            <h3 className="surface-row__title">
              Retrieval that cites, <em>not retrieval that guesses.</em>
            </h3>
            <p className="surface-row__dek">
              Permissioned RAG with row-level access, freshness windows and citation guarantees.
              Built for regulator filings, clinical guidelines, internal wikis and legal corpora.
            </p>
            <ul className="surface-row__list">
              <li>Hybrid retrieval · BM25 + vector + rerank</li>
              <li>Row-level permissions · per-user scopes</li>
              <li>Citation-locked generation · no claim without source</li>
            </ul>
            <div className="surface-row__stack">
              <span>pgvector</span><span>Qdrant</span><span>BM25</span><span>Cohere rerank</span><span>RAGAS</span>
            </div>
          </div>
        </div>

        {/* COPILOTS */}
        <div className="surface-row surface-row--flip">
          <div className="surface-row__media">
            <div className="surface-row__media-inner">
              <span className="surface-row__chip">⌁ EDITOR COCKPIT</span>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">DRAFT · v3 · ⌘S</div>
                <div className="surface-row__mockup-line">India unemployment fell to 6.1% in Q1…</div>
              </div>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">⌃J SUGGEST</div>
                <div className="surface-row__mockup-line">→ Add citation: <code>cmie/q1-26</code></div>
              </div>
              <div className="surface-row__mockup">
                <div className="surface-row__mockup-label">⌃E EDIT · house-style 94%</div>
                <div className="surface-row__mockup-line">
                  <span className="mk-dot"></span>Trim adverbs · 3 found
                </div>
              </div>
            </div>
          </div>
          <div className="surface-row__body">
            <span className="surface-row__num">Surface 04</span>
            <h3 className="surface-row__title">
              Internal copilots <em>for the team that owns the workflow.</em>
            </h3>
            <p className="surface-row__dek">
              Editor cockpits, advisor copilots, ops control rooms, adjuster consoles. Keyboard-first,
              override-aware, designed alongside the operators who will live in them.
            </p>
            <ul className="surface-row__list">
              <li>Operator-first UX · keyboard-shortcut native</li>
              <li>Override logging &amp; review baked in</li>
              <li>SSO · audit · RBAC · enterprise-ready from day one</li>
            </ul>
            <div className="surface-row__stack">
              <span>Next.js</span><span>React</span><span>Server actions</span><span>Tailwind</span><span>Postgres</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TIER TABLE ============== */}
      <section className="container section">
        <div className="section-head">
          <span className="section-head__pill">How we engage</span>
          <h2 className="h-section section-head__title">
            Three engagement modes. <em>Pick the smallest one that ships.</em>
          </h2>
          <p className="lede section-head__lede">
            Every engagement ends with something running, owned by a named human on your side. No
            open-ended retainers without a build.
          </p>
        </div>

        <div className="tier-table">
          <div className="tier-row tier-row--head">
            <div className="tier-row__cell"></div>
            <div className="tier-row__cell">
              <span className="tier-head__name">Thesis Sprint</span>
              <span className="tier-head__time">2–3 weeks</span>
              <span className="tier-head__price">Fixed scope</span>
            </div>
            <div className="tier-row__cell">
              <span className="tier-head__name">Production Build</span>
              <span className="tier-head__time">8–12 weeks</span>
              <span className="tier-head__price">Outcome-linked</span>
            </div>
            <div className="tier-row__cell">
              <span className="tier-head__name">Operating Partner</span>
              <span className="tier-head__time">6–24 months</span>
              <span className="tier-head__price">Retained</span>
            </div>
          </div>

          <div className="tier-row">
            <div className="tier-row__cell"><span className="tier-row__label">Embedded team</span></div>
            <div className="tier-row__cell check">Engineer + strategist</div>
            <div className="tier-row__cell check">Engineer + strategist + designer</div>
            <div className="tier-row__cell check">Cross-functional pod</div>
          </div>
          <div className="tier-row">
            <div className="tier-row__cell"><span className="tier-row__label">Output</span></div>
            <div className="tier-row__cell check">Written thesis · 3 bets · kill-criteria</div>
            <div className="tier-row__cell check">Live system · hand-off · runbooks</div>
            <div className="tier-row__cell check">Roadmap · multiple systems · platform</div>
          </div>
          <div className="tier-row">
            <div className="tier-row__cell"><span className="tier-row__label">Real surface in prod</span></div>
            <div className="tier-row__cell dash">Not the goal</div>
            <div className="tier-row__cell check">Yes · before week 12</div>
            <div className="tier-row__cell check">Yes · multiple surfaces</div>
          </div>
          <div className="tier-row">
            <div className="tier-row__cell"><span className="tier-row__label">On-call coverage</span></div>
            <div className="tier-row__cell dash">—</div>
            <div className="tier-row__cell check">8 weeks post-launch</div>
            <div className="tier-row__cell check">Continuous · change control</div>
          </div>
          <div className="tier-row tier-row--feat">
            <div className="tier-row__cell"><span className="tier-row__label">Quarterly value review</span></div>
            <div className="tier-row__cell dash">—</div>
            <div className="tier-row__cell dash">—</div>
            <div className="tier-row__cell check">Yes · against original thesis</div>
          </div>
          <div className="tier-row">
            <div className="tier-row__cell"><span className="tier-row__label">Typical price band</span></div>
            <div className="tier-row__cell">$40–80k</div>
            <div className="tier-row__cell">$200–500k</div>
            <div className="tier-row__cell">$600k+/yr</div>
          </div>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container stat-strip__inner">
          <div className="stat-cell"><span className="stat-cell__num">27</span><span className="stat-cell__label">Production systems live since 2024</span></div>
          <div className="stat-cell"><span className="stat-cell__num">6.4<em>wks</em></span><span className="stat-cell__label">Median time from thesis to live surface</span></div>
          <div className="stat-cell"><span className="stat-cell__num">99.94<em>%</em></span><span className="stat-cell__label">SLA across live deployments, rolling 90d</span></div>
          <div className="stat-cell"><span className="stat-cell__num">64<em>%</em></span><span className="stat-cell__label">Of leads declined — we say so on call one</span></div>
        </div>
      </section>

      <section className="container final-cta" id="contact">
        <div className="final-cta__card">
          <h2 className="h-section final-cta__title">
            Don&rsquo;t pick a surface. <em>Describe a workflow.</em>
          </h2>
          <div className="final-cta__right">
            <p>
              Our agent builder matches your workflow to the right surface, recommends a demo, and
              drafts an 8-week plan in 60 seconds.
            </p>
            <div className="final-cta__buttons">
              <a href="/agent" className="btn btn-solid">Try our agent builder</a>
              <a href="mailto:hello@chittanshai.com" className="btn btn-outline">Email us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
