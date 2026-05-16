import Header from './components/Header';
import DemoCard from './components/DemoCard';
import { getFeaturedDemos } from '../sanity/fetch';

export const revalidate = 60;

export default async function HomePage() {
  const demos = await getFeaturedDemos();

  return (
    <>
      <Header />

      {/* ============== HERO ============== */}
      <section className="hero hero--split" data-screen-label="Hero">
        <div className="hero__lines hero__lines--l" aria-hidden="true">
          <svg viewBox="0 0 360 200" fill="none">
            <path d="M0 200 Q60 140 140 130 T280 90 T360 60" stroke="#D87A4D" strokeWidth="1" opacity="0.5" />
            <path d="M0 180 Q60 120 140 110 T280 70 T360 40" stroke="#D87A4D" strokeWidth="1" opacity="0.35" />
            <path d="M0 160 Q60 100 140 90 T280 50 T360 20" stroke="#D87A4D" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="pill-kicker hero__pill">AI BUILD STUDIO · NOT A PLATFORM</span>
            <div className="hero__title-wrap">
              <h1 className="h-display hero__title">
                Get your team into production AI. <em>And keep it there.</em>
              </h1>
            </div>
            <p className="lede hero__lede">
              Find the workflow AI should actually change. Ship a real system into it in 8 weeks.
              Hand it off to a named owner on your side — with the eval harness, runbooks and on-call
              rota to keep it alive.
            </p>
            <div className="hero__ctas">
              <a href="/agent" className="btn btn-solid">Try our agent builder</a>
              <a href="#demos" className="btn btn-outline">See the work</a>
            </div>
            <div className="hero__signals">
              <div className="hero__signal"><b>27</b><span>Systems live</span></div>
              <div className="hero__signal"><b>6.4<em style={{ fontStyle: 'normal', fontSize: '.6em', color: 'var(--ink-mute)' }}>wk</em></b><span>Median ship time</span></div>
              <div className="hero__signal"><b>99.94<em style={{ fontStyle: 'normal', fontSize: '.6em', color: 'var(--ink-mute)' }}>%</em></b><span>SLA, rolling 90d</span></div>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hv-bg-card">
              <div className="hv-thumb">
                <button className="hv-play" type="button" tabIndex={-1}><span className="tri"></span></button>
                <span className="hv-badge">LIVE</span>
              </div>
              <div className="hv-bg-info">
                <div className="hv-bg-name">echo-returns.case</div>
                <div className="hv-bg-dek">Voice · E-comm · 38% calls contained</div>
              </div>
            </div>
            <div className="hv-fg-card">
              <div className="hv-fg-head">
                <img className="hv-logo" src="/logo.png" alt="" />
                <div>
                  <div className="hv-fg-label">PLAN BUILDER</div>
                  <div className="hv-fg-name">Matched <em>your workflow.</em></div>
                </div>
              </div>
              <div className="hv-fg-row"><span className="hv-check">✓</span><span>Sub-1.4s latency budget</span></div>
              <div className="hv-fg-row"><span className="hv-check">✓</span><span>OMS tool-use baked in</span></div>
              <div className="hv-fg-row"><span className="hv-check">✓</span><span>8 weeks to live surface</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROOF — Before / After ============== */}
      <section className="container proof" data-screen-label="Proof">
        <div className="proof__card">

          <div className="proof__pane proof__pane--before">
            <div className="proof__head">
              <span className="proof__label proof__label--muted">Before</span>
              <div className="proof__stat">
                <span className="proof__stat-hd">PROJECT STATUS</span>
                <span className="proof__stat-num">M14 <em>· pilot</em></span>
              </div>
            </div>

            <div className="proof__board">
              <div className="proof__board-title">AI Voice Initiative</div>
              <div className="proof__board-sub">Kicked off Q1 2025 with BigConsultancy · still in sandbox</div>

              <div className="proof__rows">
                <div className="proof__row">
                  <span className="proof__row-k">Owner</span>
                  <span className="proof__row-v"><span className="proof__row-tag muted">TBD</span> steering committee</span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">Surface</span>
                  <span className="proof__row-v"><span className="proof__row-tag muted">Sandbox</span> no real users</span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">Workflows shipped</span>
                  <span className="proof__row-v"><b className="proof__row-num muted">0</b></span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">On-call rota</span>
                  <span className="proof__row-v muted">— none planned</span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">Eval harness</span>
                  <span className="proof__row-v muted">— vibes &amp; cherrypicks</span>
                </div>
              </div>

              <div className="proof__board-foot muted">
                <span>Spent: $480k</span>
                <span>Shipped: 0 surfaces</span>
              </div>
            </div>
          </div>

          <div className="proof__pane proof__pane--after">
            <div className="proof__head">
              <span className="proof__label">After</span>
              <div className="proof__stat">
                <span className="proof__stat-hd">PROJECT STATUS</span>
                <span className="proof__stat-num">W6 <em>· live</em> <span className="proof__plus">LIVE</span></span>
              </div>
            </div>

            <div className="proof__board proof__board--good">
              <div className="proof__board-title">
                Returns voice agent{' '}
                <span className="brand-chip brand-chip--ours">
                  <span className="brand-chip__dot"></span>Chittansh AI
                </span>
              </div>
              <div className="proof__board-sub">Thesis sprint Mar 2026 · live on traffic since Apr 14</div>

              <div className="proof__rows">
                <div className="proof__row">
                  <span className="proof__row-k">Owner</span>
                  <span className="proof__row-v"><span className="proof__row-tag good">Named</span> Aanya M. · Head of CX</span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">Surface</span>
                  <span className="proof__row-v"><span className="proof__row-tag good">Live</span> inbound 1-800 line</span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">Workflows shipped</span>
                  <span className="proof__row-v"><b className="proof__row-num good">3</b><span className="muted"> · returns · exchanges · status</span></span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">On-call rota</span>
                  <span className="proof__row-v"><span className="proof__row-tag good">24/7</span> Chittansh + internal eng</span>
                </div>
                <div className="proof__row">
                  <span className="proof__row-k">Eval harness</span>
                  <span className="proof__row-v"><span className="proof__row-tag good">Live</span> golden sets · override review</span>
                </div>
              </div>

              <div className="proof__board-foot">
                <span>Spent: $185k</span>
                <span className="good">Shipped: 38% calls contained e2e</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STAT STRIP ============== */}
      <section className="stat-strip">
        <div className="container stat-strip__inner">
          <div className="stat-cell">
            <span className="stat-cell__num">27</span>
            <span className="stat-cell__label">Production systems live since 2024</span>
          </div>
          <div className="stat-cell">
            <span className="stat-cell__num">6.4<em>wks</em></span>
            <span className="stat-cell__label">Median time from thesis to live surface</span>
          </div>
          <div className="stat-cell">
            <span className="stat-cell__num">99.94<em>%</em></span>
            <span className="stat-cell__label">SLA across live deployments, rolling 90 days</span>
          </div>
          <div className="stat-cell">
            <span className="stat-cell__num">64<em>%</em></span>
            <span className="stat-cell__label">Of leads declined — we say so on call one</span>
          </div>
        </div>
      </section>

      {/* ============== DEMOS (CMS-driven) ============== */}
      <section id="demos" className="container section" data-screen-label="Demos">
        <div className="section-head">
          <span className="section-head__pill">Demos · live or sandbox</span>
          <h2 className="h-section section-head__title">
            Real systems. <em>You can click on them.</em>
          </h2>
          <p className="lede section-head__lede">
            {demos.length || 'A handful of'} representative cases. Loom walkthroughs, sandbox tenants,
            or a call with the engineer who built it — pick what works.
          </p>
        </div>

        {demos.length === 0 ? (
          <p className="lede section-head__lede">
            No demos yet — add some at <a href="/studio">/studio</a>.
          </p>
        ) : (
          <div className="demos">
            {demos.map((d) => <DemoCard key={d._id} demo={d} />)}
          </div>
        )}
      </section>

      {/* ============== PROCESS ============== */}
      <section className="container section" data-screen-label="Process">
        <div className="section-head">
          <span className="section-head__pill">How we work</span>
          <h2 className="h-section section-head__title">
            Three weeks to a thesis.<br />
            <em>Eight more to a live surface.</em>
          </h2>
        </div>

        <div className="process">
          <article className="process-step">
            <div className="process-step__num">01</div>
            <span className="process-step__time">Week 1–3</span>
            <h3 className="h-card process-step__title">Thesis sprint</h3>
            <p className="process-step__body">
              An engineer and a strategist embed. We come out with one written thesis, three sequenced
              bets, and a yes/no on whether AI even belongs here.
            </p>
          </article>
          <article className="process-step">
            <div className="process-step__num">02</div>
            <span className="process-step__time">Week 4–12</span>
            <h3 className="h-card process-step__title">Build &amp; ship</h3>
            <p className="process-step__body">
              We pick the smallest workflow that matters, instrument it, and ship to a real surface with
              real users. Eval harness and audit trail live before launch.
            </p>
          </article>
          <article className="process-step">
            <div className="process-step__num">03</div>
            <span className="process-step__time">Ongoing</span>
            <h3 className="h-card process-step__title">Operate &amp; hand off</h3>
            <p className="process-step__body">
              We stay until your team can break it and fix it without us. Runbooks, dashboards, model
              registry — and a quarterly review tied back to the thesis.
            </p>
          </article>
        </div>
      </section>

      {/* ============== REVIEWS ============== */}
      <section className="container section" data-screen-label="Reviews">
        <div className="section-head">
          <span className="section-head__pill">In their words</span>
          <h2 className="h-section section-head__title">
            From the people who <em>own the workflow we changed.</em>
          </h2>
        </div>

        <div className="reviews">
          <article className="review-card">
            <p className="review-card__quote">
              They named the owner on call one, drew the architecture on call two, and shipped to my
              desk on call eight. <em>The third call was a status review.</em>
            </p>
            <div className="review-card__by">
              <span className="review-card__ini">RV</span>
              <div className="review-card__who">
                <span className="review-card__name">Rohit V.</span>
                <span className="review-card__role">Head of Customer Ops · E-comm</span>
              </div>
            </div>
          </article>
          <article className="review-card">
            <p className="review-card__quote">
              Three vendors came with a deck and an MVP. Chittansh came with an architecture and a list
              of <em>kill-criteria.</em> We knew which one would still be running in twelve months.
            </p>
            <div className="review-card__by">
              <span className="review-card__ini">AS</span>
              <div className="review-card__who">
                <span className="review-card__name">Anushka S.</span>
                <span className="review-card__role">CDO · Wealth Platform</span>
              </div>
            </div>
          </article>
          <article className="review-card">
            <p className="review-card__quote">
              Half the engagement was them refusing to build what we asked for. <em>The other half</em>{' '}
              was the only AI initiative on our roadmap that survived the year.
            </p>
            <div className="review-card__by">
              <span className="review-card__ini">PM</span>
              <div className="review-card__who">
                <span className="review-card__name">Priya M.</span>
                <span className="review-card__role">CTO · Publishing Group</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="container final-cta" id="contact" data-screen-label="CTA">
        <div className="final-cta__card">
          <h2 className="h-section final-cta__title">
            Ship the thing. <em>Not the deck.</em>
          </h2>
          <div className="final-cta__right">
            <p>
              Bring the workflow you actually want to change. We&rsquo;ll bring the engineer who&rsquo;s
              going to change it.
            </p>
            <div className="final-cta__buttons">
              <a href="mailto:hello@chittanshai.com" className="btn btn-solid">Email us</a>
              <a href="/agent" className="btn btn-outline">Open Plan Builder</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
