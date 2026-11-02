import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { VisitStatusBadge } from './VisitStatusBadge.jsx';

const Meta = ({ label, children, mono }) => (
  <span style={{ display: 'inline-flex', gap: 6, alignItems: 'baseline', whiteSpace: 'nowrap' }}>
    <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)' }}>{label}</span>
    <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--color-text)', fontFamily: mono ? 'var(--font-mono)' : undefined }}>{children}</span>
  </span>
);

/** Fixed single-patient header: identity + allergy strip + visit status. */
export function PatientBanner({ name, age, gender, born, bornEstimated = false, mrn, mobile, allergies, status, actions, style }) {
  const known = Array.isArray(allergies) && allergies.length > 0;
  const none = Array.isArray(allergies) && allergies.length === 0;
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--color-line)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '12px 20px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: 20, lineHeight: '28px', fontWeight: 600, letterSpacing: '-0.005em' }}>{name}</h1>
          <span style={{ fontSize: 14, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{age} · {gender}</span>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', flex: 1 }}>
          {born && <Meta label="Born">{born}{bornEstimated ? ' (est.)' : ''}</Meta>}
          {mrn && <Meta label="MRN" mono>{mrn}</Meta>}
          {mobile && <Meta label="Mobile" mono>{mobile}</Meta>}
        </div>
        {status && <VisitStatusBadge status={status} />}
        {actions}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 20px', fontSize: 13, lineHeight: '18px', background: known ? 'var(--color-danger-soft)' : 'var(--color-surface-subtle)', color: known ? 'var(--color-danger)' : 'var(--color-text-muted)', borderTop: '1px solid ' + (known ? 'transparent' : 'var(--color-line)') }}>
        <Icon name={known ? 'triangle-alert' : none ? 'check' : 'minus'} size={16} />
        {known ? (
          <span><strong style={{ fontWeight: 600 }}>Known allergies</strong>{' '}
            {allergies.map((a, i) => <span key={i} style={{ color: 'var(--navy-900)' }}>{i ? ' · ' : ''}{a.substance}{a.reaction ? <span style={{ color: 'var(--color-text-secondary)' }}> ({a.reaction})</span> : null}</span>)}
          </span>
        ) : none ? 'No known allergies' : 'Allergies not recorded'}
      </div>
    </div>
  );
}
