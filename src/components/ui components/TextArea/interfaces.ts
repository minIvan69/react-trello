export interface ITextArea {
  onEditTextArea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultText: string | undefined;
  textAreaValue?: string;
  onCancel: () => void;
}
