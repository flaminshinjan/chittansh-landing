'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const screenLabels: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/case-studies': 'Case Studies',
};

export default function TermEffects() {
  const pathname = usePathname() || '/';

  // Mirror data-screen-label from the static HTML
  useEffect(() => {
    const label = screenLabels[pathname] ?? '';
    if (label) document.body.dataset.screenLabel = label;
  }, [pathname]);

  // Scroll progress meter
  useEffect(() => {
    const num = document.getElementById('scroll-meter-num');
    const fill = document.getElementById('scroll-meter-fill');
    if (!num || !fill) return;

    let raf = 0;
    const update = () => {
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
      const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100)));
      num.textContent = String(pct);
      (fill as HTMLElement).style.transform = `scaleX(${pct / 100})`;
      raf = 0;
    };
    update();
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [pathname]);

  // Animated status counters
  useEffect(() => {
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const targets = document.querySelectorAll<HTMLElement>('.term-status__list b');
    const observers: IntersectionObserver[] = [];

    targets.forEach((b) => {
      const orig = b.textContent ?? '';
      const m = orig.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      const target = parseFloat(m[1]);
      const suffix = m[2] || '';
      const dec = (m[1].split('.')[1] || '').length;
      const intPad = m[1].split('.')[0].length;
      const fmt = (n: number) => {
        if (dec) return n.toFixed(dec) + suffix;
        return String(Math.round(n)).padStart(intPad, '0') + suffix;
      };
      b.textContent = fmt(0);
      const io = new IntersectionObserver(
        ([en]) => {
          if (en.isIntersecting) {
            const start = performance.now();
            const dur = 1200;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              b.textContent = fmt(target * ease(p));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(en.target);
          }
        },
        { threshold: 0.4 }
      );
      io.observe(b);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return null;
}
