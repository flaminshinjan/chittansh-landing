import { groq } from 'next-sanity';

const demoProjection = `
  _id,
  num,
  order,
  name,
  slug,
  domain,
  badge,
  featuredOnHome,
  summary,
  stack,
  metric,
  ctas,
  media,
  caseStudy
`;

export const featuredDemosQuery = groq`
  *[_type == "demo" && featuredOnHome == true] | order(order asc, num asc) {
    ${demoProjection}
  }
`;

export const allDemosQuery = groq`
  *[_type == "demo"] | order(order asc, num asc) {
    ${demoProjection}
  }
`;

export const demoBySlugQuery = groq`
  *[_type == "demo" && slug.current == $slug][0] {
    ${demoProjection}
  }
`;

export const caseStudyDemosQuery = groq`
  *[_type == "demo" && caseStudy.enabled == true] | order(order asc, num asc) {
    ${demoProjection}
  }
`;

export const demoSlugsQuery = groq`
  *[_type == "demo" && defined(slug.current)][].slug.current
`;

export const shipLogQuery = groq`
  *[_type == "shipLogEntry"] | order(pinned desc, shippedDate desc) {
    _id,
    shippedDate,
    status,
    domain,
    name,
    brief,
    href,
    pinned
  }
`;
