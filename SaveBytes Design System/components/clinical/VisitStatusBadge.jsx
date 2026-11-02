import React from 'react';
import { Badge } from '../feedback/Badge.jsx';

export const VISIT_STATES = {
  booked: ['Booked', 'neutral', 'soft'],
  arrived: ['Checked in', 'brand', 'soft'],
  vitals: ['Vitals taken', 'brand', 'soft'],
  'in-consult': ['In consult', 'brand', 'solid'],
  signed: ['Signed', 'success', 'soft'],
  closed: ['Closed', 'neutral', 'soft'],
  noshow: ['No-show', 'warning', 'soft'],
};

/** Badge for an OPD visit state (booked → signed). */
export function VisitStatusBadge({ status = 'booked', style }) {
  const [label, tone, variant] = VISIT_STATES[status] || VISIT_STATES.booked;
  return <Badge tone={tone} variant={variant} icon={status === 'signed' ? 'check' : undefined} dot={status === 'in-consult'} style={style}>{label}</Badge>;
}
