'use client';
import React from 'react';
import useInView from './useInView';

/** A vertical connector that draws downward once when it scrolls into view. */
export default function Connector({ height = 28, color = 'var(--navy-700)', delay = 0 }) {
  const [ref, seen] = useInView(0.6);
  return (
    <span ref={ref} aria-hidden="true" style={{ display: 'block', width: 1, height, margin: '0 auto', background: color, transformOrigin: 'top', transform: seen ? 'scaleY(1)' : 'scaleY(0)', transition: `transform 520ms var(--ease-out) ${delay}ms` }} />
  );
}
