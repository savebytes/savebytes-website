import React from 'react';

const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
const cache = {};
const pending = {};

function load(name) {
  if (cache[name] !== undefined) return Promise.resolve(cache[name]);
  if (!pending[name]) {
    pending[name] = fetch(CDN + name + '.svg')
      .then(r => (r.ok ? r.text() : ''))
      .catch(() => '')
      .then(t => (cache[name] = t.replace(/<!--[\s\S]*?-->/g, '').trim()));
  }
  return pending[name];
}

/** Lucide icon (CDN), stroke 1.75, inherits currentColor. */
export function Icon({ name, size = 20, strokeWidth = 1.75, color, label, style }) {
  const [raw, setRaw] = React.useState(cache[name] || '');
  React.useEffect(() => {
    let on = true;
    load(name).then(t => on && setRaw(t));
    return () => { on = false; };
  }, [name]);
  const svg = raw
    .replace(/width="24"/, 'width="100%"')
    .replace(/height="24"/, 'height="100%"')
    .replace(/stroke-width="[^"]*"/, 'stroke-width="' + strokeWidth + '"');
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ display: 'inline-flex', width: size, height: size, flexShrink: 0, color: color || 'currentColor', lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
