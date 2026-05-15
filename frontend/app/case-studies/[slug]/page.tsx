import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import CaseStudy from '../../components/CaseStudy';
import { getDemoBySlug, getDemoSlugs } from '../../../sanity/fetch';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getDemoSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const demo = await getDemoBySlug(params.slug);
  if (!demo) return { title: 'case study not found · chittansh.ai' };
  return {
    title: `${demo.name} · chittansh.ai`,
    description: demo.caseStudy?.lede ?? demo.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const demo = await getDemoBySlug(params.slug);
  if (!demo) notFound();
  if (!demo.caseStudy?.enabled) notFound();

  return (
    <>
      <Header />

      <main className="term-main">
        <section className="term-block">
          <div className="term-prompt">
            <span className="dollar">$</span> cat <span className="flag">./cases/{demo.slug.current}.md</span>
          </div>
          <div className="term-subprompt">
            <span className="term-status__arrow">►</span> {demo.domain}
          </div>
        </section>

        <CaseStudy demo={demo} />

        <hr className="term-rule" />

        <section className="term-block">
          <div className="term-cta-row">
            <a href="/case-studies" className="term-cta-btn term-cta-btn--ghost">[ ← all cases ]</a>
            <a href="/#agent" className="term-cta-btn">[ open plan_builder ↵ ]</a>
          </div>
        </section>
      </main>
    </>
  );
}
