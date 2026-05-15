import Header from './components/Header';
import PlanBuilder from './components/PlanBuilder';
import DemoCard from './components/DemoCard';
import ShipLog from './components/ShipLog';
import { getFeaturedDemos, getShipLog } from '../sanity/fetch';

export const revalidate = 60;

export default async function HomePage() {
  const [demos, shipLog] = await Promise.all([getFeaturedDemos(), getShipLog()]);

  return (
    <>
      <Header />

      <main className="term-main">

        {/* ============== STATUS BLOCK ============== */}
        <section className="term-block" data-screen-label="Status">
          <div className="term-prompt">
            <span className="dollar">$</span> chittansh.ai <span className="flag">--status</span>
          </div>

          <div className="term-status">
            <div className="term-status__line">
              <span className="term-status__arrow">►</span>
              <em className="term-status__big">ai build studio</em>
              <span className="term-status__meta">est. 2024 · gurgaon · bengaluru</span>
            </div>

            <ul className="term-status__list">
              <li><b>27</b><span>systems shipped to production</span></li>
              <li><b>06</b><span>currently in build</span></li>
              <li><b>02</b><span>build slots remaining for q3 2026</span></li>
              <li><b>09</b><span>engineers · 03 partners · 0 account managers</span></li>
            </ul>
          </div>

          <div className="term-quote">
            <div className="term-prompt">
              <span className="dollar">$</span> chittansh.ai <span className="flag">--motto</span>
            </div>
            <p>&gt; we ship <em className="serif">the thing</em>, not the deck.</p>
          </div>
        </section>

        <hr className="term-rule" />

        {/* ============== PLAN BUILDER ============== */}
        <section className="term-block" data-screen-label="Plan Builder">
          <div className="term-prompt">
            <span className="dollar">$</span> ./plan_builder <span className="flag">--start</span>
          </div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span>
            describe a workflow · match against shipped demos · output 8-week plan
            <span className="term-eta">[ ~25s ]</span>
          </div>

          <PlanBuilder />
        </section>

        <hr className="term-rule" />

        {/* ============== FEATURED DEMOS (CMS-driven) ============== */}
        <section id="demos" className="term-block" data-screen-label="Demos">
          <div className="term-prompt">
            <span className="dollar">$</span> cat <span className="flag">./demos/featured.md</span>
          </div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span>
            {demos.length} demo{demos.length === 1 ? '' : 's'} · edit at{' '}
            <a href="/studio" className="term-cta-btn--ghost" style={{ textDecoration: 'underline' }}>/studio</a>
          </div>

          <div className="demos-grid">
            {demos.length === 0 ? (
              <p className="term-subprompt">
                no demos yet — visit <a href="/studio">/studio</a> to add some.
              </p>
            ) : (
              demos.map(d => <DemoCard key={d._id} demo={d} />)
            )}
          </div>
        </section>

        <hr className="term-rule" />

        {/* ============== SHIPPING LOG (CMS-driven) ============== */}
        <section id="shipping-log" className="term-block" data-screen-label="Shipping log">
          <div className="term-prompt">
            <span className="dollar">$</span> ls <span className="flag">-lat</span> ./shipped/
          </div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span>
            everything we've shipped to production
          </div>

          <ShipLog entries={shipLog} />
        </section>

        <hr className="term-rule" />

        {/* ============== PROCESS ============== */}
        <section className="term-block" data-screen-label="Process">
          <div className="term-prompt">
            <span className="dollar">$</span> chittansh.ai <span className="flag">--process</span>
          </div>

          <div className="term-process">
            <div className="term-process__row">
              <span className="term-process__n">[01]</span>
              <span className="term-process__name">thesis sprint</span>
              <span className="term-process__time">3 wks</span>
              <span className="term-process__body">engineer + strategist embed. one written thesis, three sequenced bets, kill-criteria. a yes/no on whether AI even belongs here.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[02]</span>
              <span className="term-process__name">build &amp; ship</span>
              <span className="term-process__time">8–12 wks</span>
              <span className="term-process__body">smallest workflow that matters. shipped to a real surface, with eval harness, audit trail, and on-call rota live before launch.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[03]</span>
              <span className="term-process__name">operate &amp; hand off</span>
              <span className="term-process__time">ongoing</span>
              <span className="term-process__body">we stay until your team can break it and fix it without us. runbooks, dashboards, model registry — and a quarterly review.</span>
            </div>
          </div>
        </section>

        <hr className="term-rule" />

        {/* ============== REVIEWS ============== */}
        <section className="term-block" data-screen-label="Reviews">
          <div className="term-prompt">
            <span className="dollar">$</span> chittansh.ai <span className="flag">--reviews</span>
          </div>

          <div className="term-reviews">
            <article className="term-review">
              <div className="term-review__by">
                <span className="term-review__handle">[rohit_v]</span>
                <span className="term-review__role">head of customer ops · e-comm</span>
              </div>
              <p className="term-review__q">
                <em className="serif">“</em>they named the owner on call one, drew the architecture on call two, and shipped to my desk on call eight. the third call was a status review.<em className="serif">”</em>
              </p>
            </article>

            <article className="term-review">
              <div className="term-review__by">
                <span className="term-review__handle">[anushka_s]</span>
                <span className="term-review__role">cdo · wealth platform</span>
              </div>
              <p className="term-review__q">
                <em className="serif">“</em>three vendors came with a deck and an mvp. chittansh came with an architecture and a list of kill-criteria. we knew which one would still be running in twelve months.<em className="serif">”</em>
              </p>
            </article>

            <article className="term-review">
              <div className="term-review__by">
                <span className="term-review__handle">[priya_m]</span>
                <span className="term-review__role">cto · publishing group</span>
              </div>
              <p className="term-review__q">
                <em className="serif">“</em>half the engagement was them refusing to build what we asked for. the other half was the only ai initiative on our roadmap that survived the year.<em className="serif">”</em>
              </p>
            </article>
          </div>
        </section>

        <hr className="term-rule" />

        {/* ============== CONTACT ============== */}
        <section id="contact" className="term-block" data-screen-label="Contact">
          <div className="term-prompt">
            <span className="dollar">$</span> chittansh.ai <span className="flag">--contact</span>
          </div>

          <div className="term-contact">
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; email</span>
              <a href="mailto:hello@chittanshai.com" className="term-contact__v">hello@chittanshai.com</a>
              <span className="term-contact__meta">reply within 6h, weekdays</span>
            </div>
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; call</span>
              <a href="#" className="term-contact__v">calendly /chittansh-intro</a>
              <span className="term-contact__meta">30 mins, no decks</span>
            </div>
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; office</span>
              <span className="term-contact__v">gurgaon · bengaluru</span>
              <span className="term-contact__meta">by appointment</span>
            </div>
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; careers</span>
              <a href="mailto:careers@chittanshai.com" className="term-contact__v">careers@chittanshai.com</a>
              <span className="term-contact__meta">1-in-50 acceptance</span>
            </div>
          </div>

          <div className="term-cta-row">
            <a href="mailto:hello@chittanshai.com" className="term-cta-btn">[ send a workflow ↵ ]</a>
            <a href="#agent" className="term-cta-btn term-cta-btn--ghost">[ open plan_builder ]</a>
          </div>
        </section>

      </main>
    </>
  );
}
