'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Animated counters on .stat-cell__num and .plan-card__stat b.
 * Mirrors the easing/IntersectionObserver pattern from test/index.html.
 */
export default function SiteEffects() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const observers: IntersectionObserver[] = [];
    const els = document.querySelectorAll<HTMLElement>('.stat-cell__num, .plan-card__stat b');

    els.forEach((el) => {
      const txt = el.firstChild;
      if (!txt || txt.nodeType !== 3) return;
      const raw = (txt.nodeValue ?? '').trim();
      const m = raw.match(/^(\$?)(\d+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      const prefix = m[1];
      const target = parseFloat(m[2]);
      const suffix = m[3] || '';
      const dec = (m[2].split('.')[1] || '').length;
      const fmt = (n: number) => prefix + (dec ? n.toFixed(dec) : String(Math.round(n))) + suffix;
      txt.nodeValue = fmt(0);
      const io = new IntersectionObserver(
        ([en]) => {
          if (en.isIntersecting) {
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / 1400);
              txt.nodeValue = fmt(target * ease(p));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(en.target);
          }
        },
        { threshold: 0.4 }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return null;
}
