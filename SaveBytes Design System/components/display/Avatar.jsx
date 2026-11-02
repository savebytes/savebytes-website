import React from 'react';

const initials = n => (n || '').split(/\s+/).filter(Boolean).filter(w => !/^dr\.?$/i.test(w)).slice(0, 2).map(w => w[0].toUpperCase()).join('');

/** Initials on blue-50 with blue-900 text, radius-full. */
export function Avatar({ name, src, size = 32, style }) {
  return (
    <span role="img" aria-label={name} style={{ width: size, height: size, borderRadius: '50%', background: 'var(--blue-50)', color: 'var(--blue-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: Math.round(size * 0.4), fontWeight: 600, flexShrink: 0, overflow: 'hidden', ...style }}>
      {src ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials(name)}
    </span>
  );
}
