import React from 'react';
import { Field, controlStyle } from './Field.jsx';

/** Multi-line text input with the same anatomy as TextInput. */
export function Textarea({ label, helper, error, required, optional, id, rows = 4, disabled, style, ...rest }) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const cs = controlStyle({ focus, hover, error, disabled });
  return (
    <Field label={label} htmlFor={fid} helper={helper} error={error} required={required} optional={optional} style={style}>
      <textarea id={fid} rows={rows} disabled={disabled} aria-invalid={!!error || undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ ...cs, height: 'auto', padding: '10px 12px', resize: 'vertical', lineHeight: '20px' }} {...rest} />
    </Field>
  );
}
