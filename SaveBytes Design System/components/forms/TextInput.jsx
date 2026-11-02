import React from 'react';
import { Field, controlStyle } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

/** Single-line text input with label above. Mono variant for IDs and numbers. */
export function TextInput({ label, helper, error, required, optional, id, size = 'md', mono = false, icon, suffix, disabled, style, inputStyle, ...rest }) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const cs = controlStyle({ focus, hover, error, disabled, size, mono });
  return (
    <Field label={label} htmlFor={fid} helper={helper} error={error} required={required} optional={optional} style={style}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {icon && <span style={{ position: 'absolute', left: 12, color: 'var(--navy-500)', display: 'flex', pointerEvents: 'none' }}><Icon name={icon} size={16} /></span>}
        <input id={fid} disabled={disabled} aria-invalid={!!error || undefined} required={required}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ ...cs, paddingLeft: icon ? 36 : 12, paddingRight: suffix ? 48 : 12, ...inputStyle }} {...rest} />
        {suffix && <span style={{ position: 'absolute', right: 12, fontSize: 13, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', pointerEvents: 'none' }}>{suffix}</span>}
      </div>
    </Field>
  );
}
