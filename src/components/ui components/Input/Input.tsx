import React, { FunctionComponent } from "react";
import { FieldRenderProps } from "react-final-form";
import { StyledInput } from "./styles";

const Input: FunctionComponent<FieldRenderProps<string>> = ({
  input,
  minLength,
}) => {
  return <StyledInput {...input} minLength={minLength} />;
};

export default Input;
