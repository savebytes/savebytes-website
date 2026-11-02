import React from 'react';
import { Icon } from './Icon.jsx';

/** Inline text link. Underline on hover (1px, offset 3px). */
export function Link({ href = '#', inverse = false, arrow = false, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ color: inverse ? 'var(--color-link-inverse)' : 'var(--color-link)', textDecoration: hover ? 'underline' : 'none', textDecorationThickness: 1, textUnderlineOffset: 3, display: arrow ? 'inline-flex' : undefined, alignItems: 'center', gap: 4, fontWeight: arrow ? 500 : undefined, ...style }} {...rest}>
      {children}
      {arrow && <Icon name="arrow-right" size={16} style={{ transform: hover ? 'translateX(2px)' : 'none', transition: 'transform var(--duration-fast) var(--ease-out)' }} />}
    </a>
  );
}
