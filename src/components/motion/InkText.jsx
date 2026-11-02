'use client';
import React from 'react';

/**
 * A statement whose words fill from muted to full ink as it scrolls through the viewport.
 * Opacity only, driven by one CSS variable on the parent. Without JS, or with reduced motion, every word is at full ink.
 */
export default function InkText({ children, as: Tag = 'p', className, style }) {
  const ref = React.useRef(null);
  const words = String(children).split(' ');
  React.useEffect(() => {
    const el = ref.current; if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.82 - r.top) / (r.height + vh * 0.35)));
      el.style.setProperty('--ink', p.toFixed(3));
    };
    const tick = () => { if (!raf) raf = requestAnimationFrame(paint); };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { window.addEventListener('scroll', tick, { passive: true }); tick(); }
      else window.removeEventListener('scroll', tick);
    }, { rootMargin: '30% 0px' });
    el.classList.add('is-live'); paint(); io.observe(el);
    return () => { io.disconnect(); window.removeEventListener('scroll', tick); cancelAnimationFrame(raf); el.classList.remove('is-live'); };
  }, []);
  return (
    <Tag ref={ref} className={'sb-ink' + (className ? ' ' + className : '')} style={{ '--n': words.length, '--ink': 1, ...style }}>
      {words.map((w, i) => <span key={i} className="sb-ink-w" style={{ '--i': i }}>{w}{i < words.length - 1 ? ' ' : ''}</span>)}
    </Tag>
  );
}
