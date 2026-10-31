'use client';
import React from 'react';
import DS from '../ds';
import { socialLinks } from '../../config/site';

/** Icon links to our profiles. 44px hit areas, opens in a new tab. `inverse` is for dark surfaces. */
export default function SocialLinks({ inverse = false, only, style }) {
  const { Icon } = DS;
  const items = only ? socialLinks.filter(s => only.includes(s.id)) : socialLinks;
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 4, ...style }}>
      {items.map(s => (
        <li key={s.id}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label + ' (opens in a new tab)'} title={s.label} className="sb-social" data-inverse={inverse || undefined}>
            <Icon name={s.icon} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
