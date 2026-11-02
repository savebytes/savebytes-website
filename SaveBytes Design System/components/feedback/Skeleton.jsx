import React from 'react';

/** navy-100 loading placeholder. Use instead of spinners for content areas. */
export function Skeleton({ width = '100%', height = 14, radius = 4, lines = 1, gap = 8, style }) {
  const one = (w, k) => <span key={k} aria-hidden="true" style={{ display: 'block', width: w, height, borderRadius: radius, background: 'var(--navy-100)', animation: 'sb-skeleton 1.4s ease-in-out infinite', ...style }} />;
  if (lines <= 1) return one(width, 0);
  return <span role="status" aria-label="Loading" style={{ display: 'flex', flexDirection: 'column', gap }}>{Array.from({ length: lines }, (_, i) => one(i === lines - 1 ? '60%' : width, i))}</span>;
}
