export type Badge = 'live' | 'sandbox' | 'private' | 'nda';

export type Cta = {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost';
};

export type Metric = { value: string; label: string };

export type Media = {
  kind: 'loom' | 'video' | 'image' | 'embed' | 'placeholder';
  url?: string;
  image?: { asset: { _ref: string; _type: 'reference' } };
  placeholderText?: string;
};

export type CaseStudy = {
  enabled?: boolean;
  lede?: string;
  caseDomain?: string;
  problem?: string[];
  whatWeBuilt?: string[];
  impact?: Metric[];
  whyItMatters?: string;
  shippedDate?: string;
};

export type Demo = {
  _id: string;
  num: string;
  order: number;
  name: string;
  slug: { current: string };
  domain: string;
  badge: Badge;
  featuredOnHome: boolean;
  summary: string;
  stack: string[];
  metric?: Metric;
  ctas?: Cta[];
  media?: Media;
  caseStudy?: CaseStudy;
};

export type ShipLogEntry = {
  _id: string;
  shippedDate: string;
  status: Badge;
  domain: string;
  name: string;
  brief: string;
  href?: string;
  pinned?: boolean;
};
