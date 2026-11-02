export type VisitStatus = 'booked' | 'arrived' | 'vitals' | 'in-consult' | 'signed' | 'closed' | 'noshow';
export interface VisitStatusBadgeProps {
  status: VisitStatus;
  style?: React.CSSProperties;
}
export declare function VisitStatusBadge(props: VisitStatusBadgeProps): JSX.Element;
