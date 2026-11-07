import React from 'react';

/**
 * The SaveBytes logo, unchanged: the split byte mark on its 48-unit grid and the wordmark.
 * It never animates. Tones: brand (blue mark), health (blue and teal halves, "Health" after the name),
 * white (on the dark footer).
 */
const TONES = {
  brand: { l: '#2F5BFF', r: '#2F5BFF', word: 'var(--ink)', prod: 'var(--ink-2)' },
  health: { l: '#2F5BFF', r: '#0E9F8E', word: 'var(--ink)', prod: '#0B7D70' },
  white: { l: '#FFFFFF', r: '#FFFFFF', word: '#FFFFFF', prod: '#C5CCD8' },
};

export default function Logo({ tone = 'brand', size = 28, product, mark = false, id = 'lg' }) {
  const t = TONES[tone] || TONES.brand;
  const cut = size <= 32 ? 6.5 : 5;
  const svg = (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" focusable="false" style={{ display: 'block', flex: 'none', overflow: 'visible' }}>
      <defs>
        <clipPath id={id + 'c'}><rect width="48" height="48" rx="16" /></clipPath>
        <mask id={id + 'm'} maskUnits="userSpaceOnUse" x="-8" y="-8" width="64" height="64">
          <rect x="-8" y="-8" width="64" height="64" fill="#fff" />
          <path d="M34 -8C34 24 14 24 14 56" fill="none" stroke="#000" strokeWidth={cut} />
        </mask>
      </defs>
      <g clipPath={`url(#${id}c)`} mask={`url(#${id}m)`}>
        <path d="M-8 -8H34C34 24 14 24 14 56H-8Z" fill={t.l} />
        <path d="M56 -8H34C34 24 14 24 14 56H56Z" fill={t.r} />
      </g>
    </svg>
  );
  if (mark) return svg;
  const word = size * (40 / 48);
  return (
    <span className="logo" role="img" aria-label={'SaveBytes' + (product ? ' ' + product : '')} style={{ gap: size * (14 / 48) }}>
      {svg}
      <span aria-hidden="true" className="logo-word" style={{ fontSize: word, gap: word * (11 / 40) }}>
        <span style={{ fontWeight: 600, color: t.word }}>SaveBytes</span>
        {product && <span style={{ fontWeight: 500, color: t.prod }}>{product}</span>}
      </span>
    </span>
  );
}
