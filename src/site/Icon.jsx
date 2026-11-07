import React from 'react';
import { ICONS } from './icons';

/** One icon system: lucide strokes at 1.75, inheriting the text colour. */
export default function Icon({ name, size = 20, label }) {
  const i = ICONS[name];
  if (!i) return null;
  return (
    <svg
      width={size} height={size} viewBox={i.vb}
      fill={i.fill ? 'currentColor' : 'none'} stroke={i.fill ? 'none' : 'currentColor'}
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} focusable="false"
      style={{ display: 'block', flex: 'none' }}
      dangerouslySetInnerHTML={{ __html: i.d }}
    />
  );
}
