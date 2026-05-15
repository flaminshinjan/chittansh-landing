'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`term-header${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="term-header__inner">
        <Link href="/" className="term-brand" onClick={closeMenu}>
          <span className="term-brand__bracket">[</span>
          <span className="term-brand__name">chittansh.ai</span>
          <span className="term-brand__bracket">]</span>
          <span className="term-brand__path">{brandPath}</span>
        </Link>
        <nav className="term-nav">
          {isHome && <a href={demosHref} onClick={closeMenu}>./demos</a>}
          <a href={shippedHref} onClick={closeMenu}>./shipped</a>
          <Link href="/services" className={pathname === '/services' ? 'is-active' : undefined} onClick={closeMenu}>./services</Link>
          <Link href="/case-studies" className={pathname === '/case-studies' ? 'is-active' : undefined} onClick={closeMenu}>./cases</Link>
          <Link href="/about" className={pathname === '/about' ? 'is-active' : undefined} onClick={closeMenu}>./about</Link>
        </nav>
        <button
          type="button"
          className="term-menu__btn"
          id="term-menu-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <a href="#contact" className="term-cta" onClick={closeMenu}>
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
