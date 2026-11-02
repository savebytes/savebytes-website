'use client';
import React from 'react';

/** The logo's cut as a thin spine that draws itself down the side of a page as you scroll. Desktop only (hidden under 1024px). */
export default function CutThread() {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const el = ref.current; if (!el) return;
      const r = el.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height)));
    };
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <svg ref={ref} className="sb-thread" viewBox="0 0 48 400" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d="M34 0C34 100 14 100 14 200C14 300 34 300 34 400" fill="none" stroke="var(--navy-200)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="1" strokeDashoffset={1 - p} />
    </svg>
  );
}
