export interface LabResult { test: string; value: string | number; unit?: string; flag?: 'high' | 'low' | 'critical-high' | 'critical-low' | 'normal'; range?: string; }
export interface LabResultsTableProps {
  results: LabResult[];
  dense?: boolean;
  title?: string;
  style?: React.CSSProperties;
}
export declare function LabResultsTable(props: LabResultsTableProps): JSX.Element;
