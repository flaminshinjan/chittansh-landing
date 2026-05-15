import Header from '../components/Header';
import CaseStudy from '../components/CaseStudy';
import { getCaseStudyDemos } from '../../sanity/fetch';

export const metadata = {
  title: 'chittansh.ai/cases',
};

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const cases = await getCaseStudyDemos();

  return (
    <>
      <Header />

      <main className="term-main">

        <section className="term-block">
          <div className="term-prompt"><span className="dollar">$</span> ls <span className="flag">-lat</span> ./cases/</div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> {cases.length} production system{cases.length === 1 ? '' : 's'} · what we built, how it's wired, what changed
          </div>
        </section>

        {cases.length === 0 ? (
          <section className="term-block">
            <p className="term-subprompt">
              no case studies yet — flag a demo's <code>caseStudy.enabled</code> at{' '}
              <a href="/studio">/studio</a>.
            </p>
          </section>
        ) : (
          cases.map((demo, i) => (
            <div key={demo._id}>
              <CaseStudy demo={demo} index={i} />
              <hr className="term-rule" />
            </div>
          ))
        )}

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
