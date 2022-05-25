import React, { FunctionComponent } from "react";
import { FieldRenderProps } from "react-final-form";

import { StyledTextArea } from "./styles";

const TextArea: FunctionComponent<FieldRenderProps<string>> = ({ input }) => {
  return <StyledTextArea {...input} />;
};

export default TextArea;
