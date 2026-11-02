import React from 'react';
import { Field, controlStyle } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

const M = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const formatDate = d => d ? d.getDate() + ' ' + M[d.getMonth()] + ' ' + d.getFullYear() : '';
const same = (a, b) => a && b && a.toDateString() === b.toDateString();

/** Date field showing "12 Mar 2026" with a calendar popover. Optional time select ("10:30 am"). */
export function DatePicker({ label, helper, error, value, defaultValue, onChange, withTime = false, time, onTimeChange, times, style }) {
  const [inner, setInner] = React.useState(defaultValue || null);
  const v = value !== undefined ? value : inner;
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(() => { const d = v || new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [t, setT] = React.useState(time || '10:30 am');
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, []);
  const pick = d => { if (value === undefined) setInner(d); onChange && onChange(d); setOpen(false); };
  const first = (view.getDay() + 6) % 7;
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: first }, () => null).concat(Array.from({ length: days }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1)));
  const today = new Date();
  const slots = times || ['9:00 am','9:30 am','10:00 am','10:30 am','11:00 am','11:30 am','12:00 pm','4:00 pm','4:30 pm','5:00 pm','5:30 pm','6:00 pm'];
  const navBtn = { width: 28, height: 28, border: 0, borderRadius: 4, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-700)' };
  return (
    <Field label={label} helper={helper} error={error} style={style}>
      <div style={{ display: 'flex', gap: 8 }}>
        <div ref={ref} style={{ position: 'relative', flex: 1 }}>
          <button type="button" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(o => !o)}
            style={{ ...controlStyle({ focus: open, error }), display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left', cursor: 'pointer' }}>
            <Icon name="calendar" size={16} color="var(--navy-500)" />
            <span style={{ color: v ? 'var(--color-text)' : 'var(--color-text-muted)' }}>{v ? formatDate(v) : 'DD MMM YYYY'}</span>
          </button>
          {open && (
            <div role="dialog" aria-label="Choose date" style={{ position: 'absolute', zIndex: 30, top: 'calc(100% + 4px)', left: 0, width: 272, padding: 12, background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <button type="button" aria-label="Previous month" style={navBtn} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}><Icon name="chevron-left" size={16} /></button>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{M[view.getMonth()]} {view.getFullYear()}</span>
                <button type="button" aria-label="Next month" style={navBtn} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}><Icon name="chevron-right" size={16} /></button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, textAlign: 'center' }}>
                {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <span key={d} style={{ fontSize: 12, lineHeight: '24px', color: 'var(--color-text-muted)' }}>{d}</span>)}
                {cells.map((d, i) => d ? (
                  <button key={i} type="button" onClick={() => pick(d)}
                    style={{ height: 32, border: same(d, today) && !same(d, v) ? '1px solid var(--color-line-strong)' : '1px solid transparent', borderRadius: 4, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 13, background: same(d, v) ? 'var(--color-brand)' : 'transparent', color: same(d, v) ? '#fff' : 'var(--color-text)' }}>{d.getDate()}</button>
                ) : <span key={i} />)}
              </div>
            </div>
          )}
        </div>
        {withTime && (
          <div style={{ position: 'relative', width: 132 }}>
            <span style={{ position: 'absolute', left: 12, top: 0, bottom: 0, display: 'flex', alignItems: 'center', pointerEvents: 'none', color: 'var(--navy-500)' }}><Icon name="clock" size={16} /></span>
            <select aria-label="Time" value={time || t} onChange={e => { setT(e.target.value); onTimeChange && onTimeChange(e.target.value); }}
              style={{ ...controlStyle({}), appearance: 'none', WebkitAppearance: 'none', paddingLeft: 36, cursor: 'pointer' }}>
              {slots.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        )}
      </div>
    </Field>
  );
}
