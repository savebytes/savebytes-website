'use client';
import React from 'react';

/**
 * Drifts a layered scene with the pointer by setting --px / --py (-1..1) on the scene element; the layers read them in CSS
 * (transform only). Listens on the enclosing section so the whole hero responds. Off for touch and reduced motion.
 */
export default function usePointerParallax(ref) {
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    let raf = 0, x = 0, y = 0;
    const paint = () => { raf = 0; el.style.setProperty('--px', x.toFixed(3)); el.style.setProperty('--py', y.toFixed(3)); };
    const move = e => { const r = el.getBoundingClientRect(); x = ((e.clientX - r.left) / r.width - .5) * 2; y = ((e.clientY - r.top) / r.height - .5) * 2; if (!raf) raf = requestAnimationFrame(paint); };
    const leave = () => { x = 0; y = 0; if (!raf) raf = requestAnimationFrame(paint); };
    const host = el.closest('section') || el;
    host.addEventListener('pointermove', move, { passive: true }); host.addEventListener('pointerleave', leave);
    return () => { host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, [ref]);
}
