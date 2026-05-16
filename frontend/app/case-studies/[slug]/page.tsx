import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import CaseStudy from '../../components/CaseStudy';
import { getDemoBySlug, getDemoSlugs } from '../../../sanity/fetch';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getDemoSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const demo = await getDemoBySlug(params.slug);
  if (!demo) return { title: 'Case study not found · Chittansh AI' };
  return {
    title: `${demo.name} · Chittansh AI`,
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

      <section className="hero hero--page">
        <div className="container hero__inner">
          <span className="pill-kicker hero__pill">CASE STUDY</span>
          <h1 className="h-display hero__title">{demo.name}</h1>
          <p className="lede hero__lede">{demo.caseStudy?.lede ?? demo.summary}</p>
        </div>
      </section>

      <section className="container section">
        <CaseStudy demo={demo} />
      </section>

      <section className="container final-cta">
        <div className="final-cta__card">
          <h2 className="h-section final-cta__title">
            Want a system shaped like this? <em>Let&rsquo;s talk.</em>
          </h2>
          <div className="final-cta__right">
            <p>Describe your workflow and we&rsquo;ll draft a plan in 60 seconds.</p>
            <div className="final-cta__buttons">
              <Link href="/agent" className="btn btn-solid">Open Plan Builder</Link>
              <Link href="/case-studies" className="btn btn-outline">All case studies</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
