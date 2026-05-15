import Header from '../components/Header';

export const metadata = {
  title: 'chittansh.ai/services',
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="term-main">

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> ls <span className="flag">./surfaces/</span></div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> four production surfaces we ship · all plug into a workflow that pays bills
          </div>

          <div className="ship-log">
            <div className="ship-log__head ship-log__head--svc">
              <span>id</span>
              <span>surface</span>
              <span>stack</span>
              <span>best for</span>
              <span>demo</span>
            </div>
            <a href="/#agent" className="ship-log__row ship-log__row--svc">
              <span className="ship-log__date">01</span>
              <span className="ship-log__name">voice agents</span>
              <span className="ship-log__domain">SIP · WebRTC · TTS</span>
              <span className="ship-log__brief">sub-1.4s latency, tool-using, recording &amp; review. returns, collections, triage, advisor support.</span>
              <span className="ship-log__arr">echo-returns →</span>
            </a>
            <a href="/#agent" className="ship-log__row ship-log__row--svc">
              <span className="ship-log__date">02</span>
              <span className="ship-log__name">multi-tool agents</span>
              <span className="ship-log__domain">LangGraph · MCP · Temporal</span>
              <span className="ship-log__brief">live inside your CRM, ticketing, editor, back-office. tool-use, audit trail, override review.</span>
              <span className="ship-log__arr">triage-os →</span>
            </a>
            <a href="/#agent" className="ship-log__row ship-log__row--svc">
              <span className="ship-log__date">03</span>
              <span className="ship-log__name">rag &amp; search</span>
              <span className="ship-log__domain">pgvector · Qdrant · BM25</span>
              <span className="ship-log__brief">permissioned, row-level access, citation-locked. regulator filings, wikis, contracts.</span>
              <span className="ship-log__arr">ledger-copilot →</span>
            </a>
            <a href="/#agent" className="ship-log__row ship-log__row--svc">
              <span className="ship-log__date">04</span>
              <span className="ship-log__name">internal copilots</span>
              <span className="ship-log__domain">Next · React · server actions</span>
              <span className="ship-log__brief">editor cockpits, advisor copilots, ops control rooms. keyboard-first, override-aware.</span>
              <span className="ship-log__arr">briefroom →</span>
            </a>
          </div>
        </section>

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> chittansh.ai <span className="flag">--engagements</span></div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> three engagement modes · pick the smallest one that ships something
          </div>

          <div className="term-process">
            <div className="term-process__row">
              <span className="term-process__n">[E·01]</span>
              <span className="term-process__name">thesis sprint</span>
              <span className="term-process__time">2–3 wks · fixed</span>
              <span className="term-process__body">an engineer + strategist embed. one written thesis, three sequenced bets, kill-criteria. a yes/no on whether AI even belongs.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[E·02]</span>
              <span className="term-process__name">production build</span>
              <span className="term-process__time">8–12 wks · outcome</span>
              <span className="term-process__body">one workflow, end-to-end, into a real surface. reference architecture + agents + evaluation. on-call hand-off to your team.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[E·03]</span>
              <span className="term-process__name">operating partner</span>
              <span className="term-process__time">6–24 mo · retained</span>
              <span className="term-process__body">shared roadmap across surfaces. quarterly value review against the thesis. on-call coverage, change control, talent uplift.</span>
            </div>
          </div>
        </section>

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> chittansh.ai <span className="flag">--match-my-workflow</span></div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> describe your workflow on the home page · we'll match a surface in 60 seconds
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
              <span className="term-contact__k">&gt; call</span>
              <a href="#" className="term-contact__v">calendly /chittansh-intro</a>
              <span className="term-contact__meta">30 mins, no decks</span>
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
