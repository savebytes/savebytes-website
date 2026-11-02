import React from 'react';
import { Field, controlStyle } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

/** Native select with brand styling and a chevron. */
export function Select({ label, helper, error, required, optional, id, options = [], placeholder, size = 'md', disabled, style, ...rest }) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const cs = controlStyle({ focus, hover, error, disabled, size });
  return (
    <Field label={label} htmlFor={fid} helper={helper} error={error} required={required} optional={optional} style={style}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <select id={fid} disabled={disabled} aria-invalid={!!error || undefined} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ ...cs, appearance: 'none', WebkitAppearance: 'none', paddingRight: 36, cursor: disabled ? 'not-allowed' : 'pointer' }} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(o => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 10, color: 'var(--navy-500)', display: 'flex', pointerEvents: 'none' }}><Icon name="chevron-down" size={16} /></span>
      </div>
    </Field>
  );
}
