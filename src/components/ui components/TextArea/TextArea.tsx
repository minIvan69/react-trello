import React, { FunctionComponent } from "react";
import { Button } from "../..";

import { ITextArea } from "./interfaces";
import { StyledTextArea } from "./styles";

const Input: FunctionComponent<ITextArea> = ({
  onEditTextArea,
  defaultText,
  onCancel,
  textAreaValue,
}) => {
  return (
    <>
      <StyledTextArea
        onChange={onEditTextArea}
        disabled={false}
        readOnly={false}
        defaultValue={defaultText}
      />
      <Button textAreaValue={textAreaValue} onCancel={onCancel} />
    </>
  );
};

export default Input;
