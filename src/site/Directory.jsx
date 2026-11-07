import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

/** The signage directory: one panel per destination, its name, one line, and an arrow. */
export default function Directory({ items, label }) {
  return (
    <ul className="dir" aria-label={label}>
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} className="dir-row">
            <span className="dir-text">
              <span className="dir-name">{it.title}</span>
              {it.line && <span className="dir-line">{it.line}</span>}
            </span>
            <span className="dir-arrow"><Icon name="arrow-right" size={24} /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
