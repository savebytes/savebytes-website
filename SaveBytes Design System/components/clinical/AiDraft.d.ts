export interface AiDraftProps {
  title?: string;
  children?: React.ReactNode;
  onAccept?: () => void;
  onEdit?: () => void;
  onDiscard?: () => void;
  style?: React.CSSProperties;
}
export declare function AiDraft(props: AiDraftProps): JSX.Element;
