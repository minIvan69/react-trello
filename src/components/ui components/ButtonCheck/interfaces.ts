import { ComponentType } from "react";
import { FieldRenderProps, SupportedInputs } from "react-final-form";
export interface IButton {
  submitting: boolean;
  pristine: boolean;
  onCancel: () => void;
  component?:
    | SupportedInputs
    | ComponentType<FieldRenderProps<string, HTMLElement, string>>;
}
