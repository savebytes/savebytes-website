export interface QueueRow {
  token: number;
  name: string;
  /** "34 y" */
  age: string;
  /** "F" / "M" */
  sex: string;
  reason?: string;
  /** "10:30 am" */
  time: string;
  status: 'booked' | 'arrived' | 'vitals' | 'in-consult' | 'signed' | 'closed' | 'noshow';
}
/**
 * @startingPoint section="Health" subtitle="Live OPD queue with tokens" viewport="700x360"
 */
export interface OpdQueueProps {
  rows: QueueRow[];
  /** Defaults to the row with status in-consult. */
  activeToken?: number;
  onSelect?: (row: QueueRow) => void;
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function OpdQueue(props: OpdQueueProps): JSX.Element;
