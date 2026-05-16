'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header${menuOpen ? ' is-menu-open' : ''}`} id="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" onClick={close}>
          <img className="brand__mark" src="/logo.png" alt="Chittansh AI" />
          <span>Chittansh AI</span>
        </Link>
        <nav className="nav-links" id="nav-links">
          <Link href="/services" onClick={close}>Services</Link>
          <Link href="/#demos" onClick={close}>Demos</Link>
          <Link href="/case-studies" onClick={close}>Case studies</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/agent" className="nav-mobile-cta" onClick={close}>
            Try our agent builder
          </Link>
        </nav>
        <div className="nav-cta">
          <Link href="/agent" className="btn btn-solid" data-agent-launch="1" onClick={close}>
            Try our agent builder
          </Link>
          <button
            type="button"
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
