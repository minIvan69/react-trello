import { ComponentType } from "react";
import { FieldRenderProps, SupportedInputs } from "react-final-form";

export interface ISubmitValue {
  value: string;
}

export interface IForm {
  onSubmitForm: (values: ISubmitValue) => void;
  onCancel: () => void;
  component?:
    | SupportedInputs
    | ComponentType<FieldRenderProps<string, HTMLElement, string>>;
  defaultText?: string;
}
