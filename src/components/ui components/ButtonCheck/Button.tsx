import React, { FunctionComponent } from "react";
import { IButton } from "./interfaces";
import { StyledButton } from "./styles";

const Button: FunctionComponent<IButton> = ({ textAreaValue, onCancel }) => {
  return textAreaValue === "" ? (
    <StyledButton type={"button"} onClick={onCancel}>
      Cancel
    </StyledButton>
  ) : (
    <StyledButton>OK</StyledButton>
  );
};

export default Button;
