export interface IInput {
  onEditInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultText: string | undefined;
  textAreaValue?: string;
  onCancel: () => void;
}
