import Header from '../components/Header';
import CaseStudy from '../components/CaseStudy';
import { getCaseStudyDemos } from '../../sanity/fetch';

export const metadata = {
  title: 'Case Studies — Chittansh AI',
};

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const cases = await getCaseStudyDemos();

  return (
    <>
      <Header />

      <section className="hero hero--page">
        <div className="container hero__inner">
          <span className="pill-kicker hero__pill">CASE STUDIES</span>
          <h1 className="h-display hero__title">
            Running systems. <em>Real use.</em>
          </h1>
          <p className="lede hero__lede">
            No mock dashboards. {cases.length || 'A handful of'} production systems — what we built,
            how it&rsquo;s wired, what changed for the business.
          </p>
        </div>
      </section>

      <section className="container section">
        {cases.length === 0 ? (
          <p className="lede">
            No case studies yet — toggle <code>caseStudy.enabled</code> on a demo at{' '}
            <a href="/studio">/studio</a>.
          </p>
        ) : (
          cases.map((demo, i) => <CaseStudy key={demo._id} demo={demo} index={i} />)
        )}
      </section>

      <section className="container final-cta" id="contact">
        <div className="final-cta__card">
          <h2 className="h-section final-cta__title">
            Your case study, <em>next.</em>
          </h2>
          <div className="final-cta__right">
            <p>
              These could be us writing about you in 12 weeks. Describe your workflow in the Plan
              Builder and we&rsquo;ll match it to a demo and draft a plan.
            </p>
            <div className="final-cta__buttons">
              <a href="/agent" className="btn btn-solid">Open Plan Builder</a>
              <a href="mailto:hello@chittanshai.com" className="btn btn-outline">Email us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
