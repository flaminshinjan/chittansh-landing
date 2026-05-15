import Header from './components/Header';
import PlanBuilder from './components/PlanBuilder';

export default function HomePage() {
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

        {/* ============== FEATURED DEMOS ============== */}
        <section id="demos" className="term-block" data-screen-label="Demos">
          <div className="term-prompt">
            <span className="dollar">$</span> cat <span className="flag">./demos/featured.md</span>
          </div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span>
            six demos with media · loom or sandbox embed slots · tap any tile to watch
          </div>

          <div className="demos-grid">

            {/* DEMO 01 */}
            <article className="term-demo">
              <header className="term-demo__head">
                <span className="term-demo__num">01</span>
                <span className="term-demo__name">echo-returns.case</span>
                <span className="term-demo__dom">voice · e-comm</span>
                <span className="term-demo__badge live">[ LIVE ]</span>
              </header>
              <div className="term-demo__media">
                <div className="term-demo__slot" data-slot="echo-returns">
                  <span className="mono">loom · drop in real video</span>
                </div>
                <button className="term-demo__play" type="button" aria-label="Watch demo">
                  <span className="tri"></span>
                </button>
              </div>
              <div className="term-demo__body">
                <div className="term-demo__row">
                  <span className="agent-term__label">// summary</span>
                  <p>Inbound voice agent handling 38% of returns &amp; exchange calls e2e. Sub-1.4s, tool-using, escalates clean on edge cases.</p>
                </div>
                <div className="term-demo__row">
                  <span className="agent-term__label">// stack</span>
                  <ul className="term-demo__stack">
                    <li>streaming ASR + custom TTS · sub-1.4s</li>
                    <li>tool-use over order &amp; carrier APIs</li>
                    <li>recording &amp; review baked in</li>
                  </ul>
                </div>
                <footer className="term-demo__foot">
                  <div className="term-demo__metric"><b>38%</b><span>calls fully contained</span></div>
                  <div className="term-demo__cta">
                    <a href="#" className="term-cta-btn term-cta-btn--sm">[ watch loom ]</a>
                    <a href="#" className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost">[ call demo line ]</a>
                  </div>
                </footer>
              </div>
            </article>

            {/* DEMO 02 */}
            <article className="term-demo">
              <header className="term-demo__head">
                <span className="term-demo__num">02</span>
                <span className="term-demo__name">ledger-copilot.case</span>
                <span className="term-demo__dom">advisor · wealth</span>
                <span className="term-demo__badge live">[ LIVE ]</span>
              </header>
              <div className="term-demo__media">
                <div className="term-demo__slot" data-slot="ledger"><span className="mono">screenshot · drop in cockpit shot</span></div>
                <button className="term-demo__play" type="button" aria-label="Watch demo"><span className="tri"></span></button>
              </div>
              <div className="term-demo__body">
                <div className="term-demo__row">
                  <span className="agent-term__label">// summary</span>
                  <p>Advisor cockpit that drafts suitability memos from KYC + portfolio + house view. Every line cited back to rule, position or note.</p>
                </div>
                <div className="term-demo__row">
                  <span className="agent-term__label">// stack</span>
                  <ul className="term-demo__stack">
                    <li>Claude 3.5 + custom suitability reasoner</li>
                    <li>RAG over 14k regulator filings</li>
                    <li>audit pack auto-rendered to PDF</li>
                  </ul>
                </div>
                <footer className="term-demo__foot">
                  <div className="term-demo__metric"><b>−72%</b><span>memo drafting time</span></div>
                  <div className="term-demo__cta">
                    <a href="#" className="term-cta-btn term-cta-btn--sm">[ watch loom ]</a>
                    <a href="#" className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost">[ walkthrough ]</a>
                  </div>
                </footer>
              </div>
            </article>

            {/* DEMO 03 */}
            <article className="term-demo">
              <header className="term-demo__head">
                <span className="term-demo__num">03</span>
                <span className="term-demo__name">triage-os.case</span>
                <span className="term-demo__dom">claims · insurance</span>
                <span className="term-demo__badge sandbox">[ SANDBOX ]</span>
              </header>
              <div className="term-demo__media">
                <div className="term-demo__slot" data-slot="triage"><span className="mono">video · drop in console capture</span></div>
                <button className="term-demo__play" type="button" aria-label="Watch demo"><span className="tri"></span></button>
              </div>
              <div className="term-demo__body">
                <div className="term-demo__row">
                  <span className="agent-term__label">// summary</span>
                  <p>Claims triage console for motor &amp; health. Reads FNOL, photos, policy, history. Proposes a path, flags fraud, hands one screen to the adjuster.</p>
                </div>
                <div className="term-demo__row">
                  <span className="agent-term__label">// stack</span>
                  <ul className="term-demo__stack">
                    <li>vision (damage) + text reasoner</li>
                    <li>fraud signals from policy + history</li>
                    <li>adjuster cockpit with override review</li>
                  </ul>
                </div>
                <footer className="term-demo__foot">
                  <div className="term-demo__metric"><b>4.1×</b><span>adjuster throughput</span></div>
                  <div className="term-demo__cta">
                    <a href="#" className="term-cta-btn term-cta-btn--sm">[ open sandbox ]</a>
                    <a href="#" className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost">[ watch loom ]</a>
                  </div>
                </footer>
              </div>
            </article>

            {/* DEMO 04 */}
            <article className="term-demo">
              <header className="term-demo__head">
                <span className="term-demo__num">04</span>
                <span className="term-demo__name">briefroom.case</span>
                <span className="term-demo__dom">editorial · media</span>
                <span className="term-demo__badge live">[ LIVE ]</span>
              </header>
              <div className="term-demo__media">
                <div className="term-demo__slot" data-slot="briefroom"><span className="mono">screenshot · editor cockpit</span></div>
                <button className="term-demo__play" type="button" aria-label="Watch demo"><span className="tri"></span></button>
              </div>
              <div className="term-demo__body">
                <div className="term-demo__row">
                  <span className="agent-term__label">// summary</span>
                  <p>Editorial agent turning wire stories into desk-ready briefs in house voice. Every fact cited back to source. Used in two newsrooms on deadline.</p>
                </div>
                <div className="term-demo__row">
                  <span className="agent-term__label">// stack</span>
                  <ul className="term-demo__stack">
                    <li>house-style score · per-publication</li>
                    <li>source citation + change-log</li>
                    <li>editor cockpit · keyboard-first</li>
                  </ul>
                </div>
                <footer className="term-demo__foot">
                  <div className="term-demo__metric"><b>11 min</b><span>median wire → brief</span></div>
                  <div className="term-demo__cta">
                    <a href="#" className="term-cta-btn term-cta-btn--sm">[ watch loom ]</a>
                    <a href="/case-studies#case-01" className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost">[ case study ]</a>
                  </div>
                </footer>
              </div>
            </article>

            {/* DEMO 05 */}
            <article className="term-demo">
              <header className="term-demo__head">
                <span className="term-demo__num">05</span>
                <span className="term-demo__name">routeline.case</span>
                <span className="term-demo__dom">ops · logistics</span>
                <span className="term-demo__badge private">[ PRIVATE ]</span>
              </header>
              <div className="term-demo__media">
                <div className="term-demo__slot" data-slot="routeline"><span className="mono">video · control room ui</span></div>
                <button className="term-demo__play" type="button" aria-label="Watch demo"><span className="tri"></span></button>
              </div>
              <div className="term-demo__body">
                <div className="term-demo__row">
                  <span className="agent-term__label">// summary</span>
                  <p>Control-room agent watching exception queues. Writes customer comms, carrier comms and the internal ticket from the same incident.</p>
                </div>
                <div className="term-demo__row">
                  <span className="agent-term__label">// stack</span>
                  <ul className="term-demo__stack">
                    <li>multi-channel comms · tone-locked</li>
                    <li>carrier API tool-use · 14 integrations</li>
                    <li>override + audit baked in</li>
                  </ul>
                </div>
                <footer className="term-demo__foot">
                  <div className="term-demo__metric"><b>−61%</b><span>time-on-exception</span></div>
                  <div className="term-demo__cta">
                    <a href="#" className="term-cta-btn term-cta-btn--sm">[ request access ]</a>
                    <a href="#" className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost">[ watch loom ]</a>
                  </div>
                </footer>
              </div>
            </article>

            {/* DEMO 06 */}
            <article className="term-demo">
              <header className="term-demo__head">
                <span className="term-demo__num">06</span>
                <span className="term-demo__name">kyc-conv.case</span>
                <span className="term-demo__dom">onboarding · banking</span>
                <span className="term-demo__badge live">[ LIVE ]</span>
              </header>
              <div className="term-demo__media">
                <div className="term-demo__slot" data-slot="kyc"><span className="mono">screenshot · onboarding flow</span></div>
                <button className="term-demo__play" type="button" aria-label="Watch demo"><span className="tri"></span></button>
              </div>
              <div className="term-demo__body">
                <div className="term-demo__row">
                  <span className="agent-term__label">// summary</span>
                  <p>Conversational onboarding flow on top of existing KYC. 3-minute chat replaces a 22-field form. We don't replace the rails, we replace the form.</p>
                </div>
                <div className="term-demo__row">
                  <span className="agent-term__label">// stack</span>
                  <ul className="term-demo__stack">
                    <li>OCR + verification chain</li>
                    <li>drop-in for existing KYC vendor</li>
                    <li>drop-off cut from 41% → 11%</li>
                  </ul>
                </div>
                <footer className="term-demo__foot">
                  <div className="term-demo__metric"><b>30×</b><span>completion vs. form</span></div>
                  <div className="term-demo__cta">
                    <a href="#" className="term-cta-btn term-cta-btn--sm">[ try the flow ]</a>
                    <a href="#" className="term-cta-btn term-cta-btn--sm term-cta-btn--ghost">[ watch loom ]</a>
                  </div>
                </footer>
              </div>
            </article>

          </div>
        </section>

        <hr className="term-rule" />

        {/* ============== SHIPPING LOG ============== */}
        <section id="shipping-log" className="term-block" data-screen-label="Shipping log">
          <div className="term-prompt">
            <span className="dollar">$</span> ls <span className="flag">-lat</span> ./shipped/
          </div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span>
            everything we've shipped to production · 21 more under NDA
          </div>

          <div className="ship-log">
            <div className="ship-log__head">
              <span>date</span>
              <span>status</span>
              <span>domain</span>
              <span>.case</span>
              <span>brief</span>
              <span></span>
            </div>

            <a href="#" className="ship-log__row">
              <span className="ship-log__date">2026.04.12</span>
              <span className="ship-log__badge live">[ LIVE ]</span>
              <span className="ship-log__domain">voice</span>
              <span className="ship-log__name">echo-returns.case</span>
              <span className="ship-log__brief">sub-1.4s voice agent containing 38% of returns &amp; exchange calls e2e</span>
              <span className="ship-log__arr">→</span>
            </a>

            <a href="#" className="ship-log__row">
              <span className="ship-log__date">2026.03.08</span>
              <span className="ship-log__badge live">[ LIVE ]</span>
              <span className="ship-log__domain">advisor</span>
              <span className="ship-log__name">ledger-copilot.case</span>
              <span className="ship-log__brief">RAG cockpit drafting suitability memos with line-level citations</span>
              <span className="ship-log__arr">→</span>
            </a>

            <a href="#" className="ship-log__row">
              <span className="ship-log__date">2026.02.22</span>
              <span className="ship-log__badge sandbox">[ SANDBOX ]</span>
              <span className="ship-log__domain">claims</span>
              <span className="ship-log__name">triage-os.case</span>
              <span className="ship-log__brief">vision + text claims triage; fraud signals + adjuster console</span>
              <span className="ship-log__arr">→</span>
            </a>

            <a href="#" className="ship-log__row">
              <span className="ship-log__date">2026.01.15</span>
              <span className="ship-log__badge live">[ LIVE ]</span>
              <span className="ship-log__domain">media</span>
              <span className="ship-log__name">briefroom.case</span>
              <span className="ship-log__brief">wire-to-brief in newsroom voice, every fact cited; 11min median</span>
              <span className="ship-log__arr">→</span>
            </a>

            <a href="#" className="ship-log__row">
              <span className="ship-log__date">2025.12.03</span>
              <span className="ship-log__badge private">[ PRIVATE ]</span>
              <span className="ship-log__domain">ops</span>
              <span className="ship-log__name">routeline.case</span>
              <span className="ship-log__brief">ops control-room agent writing carrier + customer + ticket comms</span>
              <span className="ship-log__arr">→</span>
            </a>

            <a href="#" className="ship-log__row">
              <span className="ship-log__date">2025.11.21</span>
              <span className="ship-log__badge live">[ LIVE ]</span>
              <span className="ship-log__domain">banking</span>
              <span className="ship-log__name">kyc-conv.case</span>
              <span className="ship-log__brief">conversational onboarding on top of existing KYC; drop-off 41% → 11%</span>
              <span className="ship-log__arr">→</span>
            </a>

            <div className="ship-log__row ship-log__row--more">
              <span className="ship-log__date">…</span>
              <span className="ship-log__badge nda">[ NDA ]</span>
              <span className="ship-log__domain">multi</span>
              <span className="ship-log__name">21 more shipped</span>
              <span className="ship-log__brief">review-monitoring, internal-search copilots, eval harnesses, model routers</span>
              <span className="ship-log__arr">·</span>
            </div>
          </div>
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
