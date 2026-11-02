import React from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

const fmt = b => b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';

/** Drop zone + file list. */
export function FileUpload({ label, helper, accept, multiple = true, files: controlled, onChange, hint = 'PDF, JPG or PNG up to 10 MB' }) {
  const [inner, setInner] = React.useState([]);
  const files = controlled || inner;
  const set = f => { if (!controlled) setInner(f); onChange && onChange(f); };
  const [drag, setDrag] = React.useState(false);
  const ref = React.useRef(null);
  const add = list => set([...files, ...Array.from(list).map(f => ({ name: f.name, size: f.size }))]);
  return (
    <Field label={label} helper={helper}>
      <div onDragOver={e => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} onDrop={e => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); }}
        style={{ border: '1px dashed ' + (drag ? 'var(--color-brand)' : 'var(--color-border-control)'), background: drag ? 'var(--color-brand-soft)' : 'var(--navy-50)', borderRadius: 'var(--radius-md)', padding: '20px 16px', display: 'flex', alignItems: 'center', gap: 12, transition: 'background var(--duration-fast) var(--ease-out)' }}>
        <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: '#fff', border: '1px solid var(--color-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-600)' }}><Icon name="upload" size={20} /></span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 14, lineHeight: '20px' }}>Drop files here or <button type="button" onClick={() => ref.current && ref.current.click()} style={{ border: 0, background: 'none', padding: 0, font: 'inherit', fontWeight: 500, color: 'var(--color-link)', cursor: 'pointer' }}>browse</button></span>
          <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)' }}>{hint}</span>
        </div>
        <input ref={ref} type="file" accept={accept} multiple={multiple} onChange={e => add(e.target.files)} style={{ display: 'none' }} />
      </div>
      {files.length > 0 && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {files.map((f, i) => (
            <li key={f.name + i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-sm)', fontSize: 14, lineHeight: '20px' }}>
              <Icon name="file-text" size={16} color="var(--navy-500)" />
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>{fmt(f.size)}</span>
              <button type="button" aria-label={'Remove ' + f.name} onClick={() => set(files.filter((_, j) => j !== i))} style={{ border: 0, background: 'none', padding: 4, cursor: 'pointer', color: 'var(--navy-500)', display: 'flex' }}><Icon name="x" size={16} /></button>
            </li>
          ))}
        </ul>
      )}
    </Field>
  );
}
