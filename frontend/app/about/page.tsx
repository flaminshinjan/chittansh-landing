import Header from '../components/Header';

export const metadata = {
  title: 'chittansh.ai/about',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="term-main">

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> cat ./about.md</div>
          <div className="term-status">
            <div className="term-status__line">
              <span className="term-status__arrow">►</span>
              <em className="term-status__big">a small team that ships</em>
              <span className="term-status__meta">est. 2024 · gurgaon · bengaluru</span>
            </div>
            <p className="term-quote-body">
              &gt; chittansh.ai is an ai build studio. three founding partners, six builders, no account managers. we embed for a few weeks, ship a system into your real workflow, and hand it off to a named owner on your side.
            </p>
          </div>
        </section>

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> cat ./team.md</div>
          <div className="ship-log">
            <div className="ship-log__head ship-log__head--team">
              <span>handle</span>
              <span>role</span>
              <span>bio</span>
              <span>links</span>
            </div>
            <a href="#" className="ship-log__row ship-log__row--team">
              <span className="ship-log__name">chittansh_k</span>
              <span className="ship-log__domain">architect &amp; on-call</span>
              <span className="ship-log__brief">12 years across model infra and product. previously shipped voice systems at scale through Y Combinator.</span>
              <span className="ship-log__arr">linkedin →</span>
            </a>
            <a href="#" className="ship-log__row ship-log__row--team">
              <span className="ship-log__name">aanya_r</span>
              <span className="ship-log__domain">strategy &amp; ops model</span>
              <span className="ship-log__brief">shipped advisory and underwriting systems into regulated environments for a decade. where the kill-criteria come from.</span>
              <span className="ship-log__arr">linkedin →</span>
            </a>
            <a href="#" className="ship-log__row ship-log__row--team">
              <span className="ship-log__name">theo_m</span>
              <span className="ship-log__domain">product &amp; design</span>
              <span className="ship-log__brief">editor cockpits, advisor copilots, ops control rooms. the surfaces operators actually have to live in.</span>
              <span className="ship-log__arr">linkedin →</span>
            </a>
            <div className="ship-log__row ship-log__row--more">
              <span className="ship-log__name">+6 builders</span>
              <span className="ship-log__domain">eng · ml · ops</span>
              <span className="ship-log__brief">full-stack, ml, ops. 1-in-50 hiring rate. careers @ chittanshai.com</span>
              <span className="ship-log__arr">·</span>
            </div>
          </div>
        </section>

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> cat ./principles.md</div>
          <div className="term-process">
            <div className="term-process__row">
              <span className="term-process__n">[01]</span>
              <span className="term-process__name">no ai if no ai is needed</span>
              <span className="term-process__time">always</span>
              <span className="term-process__body">half our engagements end with a workflow change, a SQL migration, or a better form. we'll tell you that on call one.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[02]</span>
              <span className="term-process__name">named owner or no engagement</span>
              <span className="term-process__time">always</span>
              <span className="term-process__body">accountable human on your side, not a steering committee. without one, no system survives its first quarter in operations.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[03]</span>
              <span className="term-process__name">permission to ship to real surface</span>
              <span className="term-process__time">8 wks</span>
              <span className="term-process__body">if we can't put something into a real surface in the first eight weeks, it's the wrong project. we'll refer you elsewhere.</span>
            </div>
            <div className="term-process__row">
              <span className="term-process__n">[04]</span>
              <span className="term-process__name">indispensable at 6mo means we failed</span>
              <span className="term-process__time">6 mo</span>
              <span className="term-process__body">we build alongside your team and hand the system off. with runbooks, training, dashboards. if you still need us, the engagement was wrong.</span>
            </div>
          </div>
        </section>

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> chittansh.ai <span className="flag">--stats</span></div>
          <ul className="term-status__list term-status__list--solo">
            <li><b>2024</b><span>founded</span></li>
            <li><b>27</b><span>systems live</span></li>
            <li><b>6.4w</b><span>median ship time</span></li>
            <li><b>64%</b><span>leads declined on filter</span></li>
          </ul>
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
            <div className="term-contact__row">
              <span className="term-contact__k">&gt; careers</span>
              <a href="mailto:careers@chittanshai.com" className="term-contact__v">careers@chittanshai.com</a>
              <span className="term-contact__meta">1-in-50 acceptance</span>
            </div>
          </div>
          <div className="term-cta-row">
            <a href="mailto:hello@chittanshai.com" className="term-cta-btn">[ send a workflow ↵ ]</a>
            <a href="/#agent" className="term-cta-btn term-cta-btn--ghost">[ open plan_builder ]</a>
          </div>
        </section>

      </main>
    </>
  );
}
