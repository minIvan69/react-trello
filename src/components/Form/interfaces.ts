export interface ISubmitValue {
  value: string;
}

export interface IForm {
  onSubmitForm: (values: ISubmitValue) => void;
  onCancel: () => void;
  component: any;
  defaultText?: string;
}
