export interface UploadedFile { name: string; size: number; }
export interface FileUploadProps {
  label?: string;
  helper?: string;
  accept?: string;
  multiple?: boolean;
  files?: UploadedFile[];
  onChange?: (files: UploadedFile[]) => void;
  hint?: string;
}
export declare function FileUpload(props: FileUploadProps): JSX.Element;
