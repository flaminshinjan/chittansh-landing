'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const brandPaths: Record<string, string> = {
  '/': '~/home',
  '/about': '~/about',
  '/services': '~/services',
  '/case-studies': '~/cases',
};

export default function Header() {
  const pathname = usePathname() || '/';
  const isHome = pathname === '/';
  const brandPath = brandPaths[pathname] ?? '~/home';
  const demosHref = isHome ? '#demos' : '/#demos';
  const shippedHref = isHome ? '#shipping-log' : '/#shipping-log';

  return (
    <header className="term-header">
      <div className="term-header__inner">
        <Link href="/" className="term-brand">
          <span className="term-brand__bracket">[</span>
          <span className="term-brand__name">chittansh.ai</span>
          <span className="term-brand__bracket">]</span>
          <span className="term-brand__path">{brandPath}</span>
        </Link>
        <nav className="term-nav">
          {isHome && <a href={demosHref}>./demos</a>}
          <a href={shippedHref}>./shipped</a>
          <Link href="/services" className={pathname === '/services' ? 'is-active' : undefined}>./services</Link>
          <Link href="/case-studies" className={pathname === '/case-studies' ? 'is-active' : undefined}>./cases</Link>
          <Link href="/about" className={pathname === '/about' ? 'is-active' : undefined}>./about</Link>
        </nav>
        <a href="#contact" className="term-cta">
          <span className="term-cta__dot"></span>
          ./contact <span className="arr">→</span>
        </a>
      </div>
      <div className="scroll-meter" aria-hidden="true">
        <span className="scroll-meter__num" id="scroll-meter-num">0</span>
        <span className="scroll-meter__pct">%</span>
        <span className="scroll-meter__bar">
          <span className="scroll-meter__fill" id="scroll-meter-fill"></span>
        </span>
      </div>
    </header>
  );
}
