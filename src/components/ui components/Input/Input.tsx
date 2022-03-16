import React, { FunctionComponent } from "react";
import { FieldRenderProps } from "react-final-form";
import { StyledInput } from "./styles";

const Input: FunctionComponent<FieldRenderProps<string>> = ({
  input,
  minLength,
  meta,
}) => {
  const { error, submitError, touched, dirtySinceLastSubmit, data } = meta;
  const hasError =
    ((error || submitError) && touched && !dirtySinceLastSubmit) || data?.error;
  return <StyledInput {...input} minLength={minLength} />;
};

export default Input;
