import Header from '../components/Header';

export const metadata = {
  title: 'About — Chittansh AI',
  description:
    'Operators who became consultants — small, senior team, no account managers.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="hero hero--page">
        <div className="container hero__inner">
          <span className="pill-kicker hero__pill">WHY US</span>
          <h1 className="h-display hero__title">
            Why hire us. <em>And not them.</em>
          </h1>
          <p className="lede hero__lede">
            Three founding partners, six builders, no account managers. We embed for a few weeks,
            ship a system into your real workflow, and hand it off to a named owner on your side.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="container section">
        <div className="section-head">
          <span className="section-head__pill">The team</span>
          <h2 className="h-section section-head__title">
            Operators who became consultants. <em>Not the other way.</em>
          </h2>
          <p className="lede section-head__lede">
            Every engagement is led by someone who has personally handed a production AI system to an
            operating team. No layered staffing, no junior pyramid.
          </p>
        </div>

        <div className="reviews">
          <article className="review-card">
            <div className="review-card__by" style={{ marginTop: 0 }}>
              <span className="review-card__ini">CK</span>
              <div className="review-card__who">
                <span className="review-card__name">Chittansh K.</span>
                <span className="review-card__role">Founding partner · Architect &amp; on-call</span>
              </div>
            </div>
            <p className="review-card__quote">
              12 years across model infra and product. Previously shipped voice systems at scale
              through Y Combinator. The voice and tool-use brain of the studio.
            </p>
          </article>
          <article className="review-card">
            <div className="review-card__by" style={{ marginTop: 0 }}>
              <span className="review-card__ini">AR</span>
              <div className="review-card__who">
                <span className="review-card__name">Aanya R.</span>
                <span className="review-card__role">Founding partner · Strategy &amp; ops model</span>
              </div>
            </div>
            <p className="review-card__quote">
              Shipped advisory and underwriting systems into regulated environments for a decade.{' '}
              <em>Where the kill-criteria come from.</em>
            </p>
          </article>
          <article className="review-card">
            <div className="review-card__by" style={{ marginTop: 0 }}>
              <span className="review-card__ini">TM</span>
              <div className="review-card__who">
                <span className="review-card__name">Theo M.</span>
                <span className="review-card__role">Founding partner · Product &amp; design</span>
              </div>
            </div>
            <p className="review-card__quote">
              Editor cockpits, advisor copilots, ops control rooms. The surfaces operators actually
              have to live in.
            </p>
          </article>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="container section">
        <div className="section-head">
          <span className="section-head__pill">Principles</span>
          <h2 className="h-section section-head__title">
            Four rules <em>we don&rsquo;t bend.</em>
          </h2>
        </div>

        <div className="process">
          <article className="process-step">
            <div className="process-step__num">01</div>
            <h3 className="h-card process-step__title">
              No AI<br /><em>if no AI is needed.</em>
            </h3>
            <p className="process-step__body">
              Half our engagements end with a workflow change, a SQL migration, or a better form.
              We&rsquo;ll tell you on call one.
            </p>
          </article>
          <article className="process-step">
            <div className="process-step__num">02</div>
            <h3 className="h-card process-step__title">
              A named owner, <em>or no engagement.</em>
            </h3>
            <p className="process-step__body">
              An accountable human on your side, not a steering committee. Without one, no system
              survives its first quarter in operations.
            </p>
          </article>
          <article className="process-step">
            <div className="process-step__num">03</div>
            <h3 className="h-card process-step__title">
              Real surface<br /><em>in 8 weeks.</em>
            </h3>
            <p className="process-step__body">
              If we can&rsquo;t put something into a real surface in the first eight weeks, it&rsquo;s
              the wrong project. We&rsquo;ll refer you elsewhere.
            </p>
          </article>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container stat-strip__inner">
          <div className="stat-cell"><span className="stat-cell__num">2024</span><span className="stat-cell__label">Founded</span></div>
          <div className="stat-cell"><span className="stat-cell__num">27</span><span className="stat-cell__label">Systems live in production</span></div>
          <div className="stat-cell"><span className="stat-cell__num">9</span><span className="stat-cell__label">Engineers · 3 partners · 0 account managers</span></div>
          <div className="stat-cell"><span className="stat-cell__num">64<em>%</em></span><span className="stat-cell__label">Of leads declined on filter</span></div>
        </div>
      </section>

      <section className="container final-cta" id="contact">
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
