import React, { FunctionComponent } from "react";
import { Button } from "../..";
import { IInput } from "./interfaces";
import { StyledInput } from "./styles";

const Input: FunctionComponent<IInput> = ({
  onEditInput,
  defaultText,
  textAreaValue,
  onCancel,
}) => {
  return (
    <>
      <StyledInput onChange={onEditInput} defaultValue={defaultText} />
      <Button textAreaValue={textAreaValue} onCancel={onCancel} />
    </>
  );
};

export default Input;
