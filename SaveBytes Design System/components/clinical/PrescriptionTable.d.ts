export interface PrescriptionItem {
  name: string;
  strength?: string;
  /** Tablet, Syrup, Capsule… */
  form?: string;
  generic?: string;
  dose?: string;
  /** Indian notation: "1-0-1" */
  frequency?: string;
  /** "After food" / "Before food" */
  when?: string;
  duration?: string;
  instructions?: string;
  /** entered-in-error: struck through with a Voided badge. */
  voided?: boolean;
  voidReason?: string;
}
export interface PrescriptionTableProps {
  items: PrescriptionItem[];
  /** "1-0-1 = morning – afternoon – night" legend. */
  showLegend?: boolean;
  dense?: boolean;
  actions?: (item: PrescriptionItem, index: number) => React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PrescriptionTable(props: PrescriptionTableProps): JSX.Element;
