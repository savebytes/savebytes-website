import React from 'react';

const TONES = {
  brand: { l: 'var(--color-brand)', r: 'var(--color-brand)', word: 'var(--navy-900)', prod: 'var(--navy-700)' },
  navy: { l: 'var(--navy-900)', r: 'var(--navy-900)', word: 'var(--navy-900)', prod: 'var(--navy-700)' },
  white: { l: '#fff', r: '#fff', word: '#fff', prod: 'var(--navy-200)' },
  current: { l: 'currentColor', r: 'currentColor', word: 'currentColor', prod: 'currentColor' },
  health: { l: 'var(--color-brand)', r: 'var(--teal-600)', word: 'var(--navy-900)', prod: 'var(--teal-700)' },
  platform: { l: 'var(--color-brand)', r: 'var(--navy-900)', word: 'var(--navy-900)', prod: 'var(--navy-700)' },
};

/** The Split byte mark (48-grid geometry from the brand spec) with optional wordmark and motion. */
export function Logo({ lockup = 'mark', tone = 'brand', size = 48, product, animate = 'none', hoverBreathe = false, title = 'SaveBytes' }) {
  const raw = React.useId ? React.useId() : String(Math.random());
  const id = 'sb' + raw.replace(/[^a-zA-Z0-9]/g, '');
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.brand;
  const cutW = size <= 32 ? 6.5 : 5;
  const intro = animate === 'intro';
  const loader = animate === 'loader';
  const breathe = hoverBreathe && hover ? 1.5 : 0;
  const halfTr = { transition: 'transform 200ms var(--ease-out)' };
  const prodWord = product || (tone === 'health' ? 'Health' : tone === 'platform' ? 'Platform' : null);

  const mark = (
    <svg viewBox="0 0 48 48" width={size} height={size} role={lockup === 'mark' ? 'img' : undefined} aria-label={lockup === 'mark' ? title : undefined} aria-hidden={lockup === 'mark' ? undefined : true} style={{ display: 'block', flexShrink: 0, overflow: 'visible' }}>
      <defs>
        <clipPath id={id + 'c'}><rect width="48" height="48" rx="16" /></clipPath>
        <mask id={id + 'm'} maskUnits="userSpaceOnUse" x="-8" y="-8" width="64" height="64">
          <rect x="-8" y="-8" width="64" height="64" fill="#fff" />
          <path pathLength="1" d="M34 -8C34 24 14 24 14 56" fill="none" stroke="#000" strokeWidth={cutW}
            style={intro ? { strokeDasharray: 1, strokeDashoffset: 1, animation: 'sb-cut 580ms cubic-bezier(.6,0,.2,1) 320ms forwards' }
              : loader ? { strokeDasharray: 1, strokeDashoffset: 1, animation: 'sb-cut-loop 1400ms cubic-bezier(.6,0,.2,1) infinite' } : undefined} />
        </mask>
      </defs>
      <g style={intro ? { transformBox: 'fill-box', transformOrigin: 'center', animation: 'sb-land 320ms cubic-bezier(.2,.8,.2,1) both' } : undefined}>
        <g clipPath={'url(#' + id + 'c)'} mask={'url(#' + id + 'm)'}>
          <path d="M-8 -8H34C34 24 14 24 14 56H-8Z" fill={t.l}
            style={intro ? { animation: 'sb-l 700ms cubic-bezier(.3,.7,.3,1) 900ms both' } : { ...halfTr, transform: 'translate(' + -breathe + 'px,' + breathe * 0.4 + 'px)' }} />
          <path d="M56 -8H34C34 24 14 24 14 56H56Z" fill={t.r}
            style={intro ? { animation: 'sb-r 700ms cubic-bezier(.3,.7,.3,1) 900ms both' } : { ...halfTr, transform: 'translate(' + breathe + 'px,' + -breathe * 0.4 + 'px)' }} />
        </g>
      </g>
    </svg>
  );

  if (lockup === 'mark') {
    return <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'inline-flex', lineHeight: 0 }}>{mark}</span>;
  }

  const stacked = lockup === 'stacked';
  const wordSize = stacked ? size * 0.5 : size * (40 / 48);
  const wordAnim = intro ? { animation: 'sb-word 400ms var(--ease-out) 1200ms both' } : undefined;
  return (
    <span role="img" aria-label={title + (prodWord ? ' ' + prodWord : '')}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', flexDirection: stacked ? 'column' : 'row', alignItems: 'center', gap: stacked ? size * 0.25 : size * (14 / 48), lineHeight: 1 }}>
      {mark}
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'baseline', gap: wordSize * (11 / 40), fontFamily: 'var(--font-sans)', fontSize: wordSize, letterSpacing: '-0.02em', whiteSpace: 'nowrap', ...wordAnim }}>
        <span style={{ fontWeight: 600, color: t.word }}>SaveBytes</span>
        {prodWord && <span style={{ fontWeight: 500, color: t.prod }}>{prodWord}</span>}
      </span>
    </span>
  );
}
