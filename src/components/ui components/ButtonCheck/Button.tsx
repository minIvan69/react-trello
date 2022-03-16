import React, { FunctionComponent } from "react";
import { IButton } from "./interfaces";
import { StyledButton } from "./styles";

const Button: FunctionComponent<IButton> = ({
  pristine,
  submitting,
  onCancel,
}) => {
  return submitting || pristine ? (
    <StyledButton type={"button"} onClick={onCancel}>
      Cancel
    </StyledButton>
  ) : (
    <StyledButton>OK</StyledButton>
  );
};

export default Button;
