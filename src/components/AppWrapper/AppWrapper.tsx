import { FunctionComponent } from "react";
import { AppWrappeStyled } from "./styles";

const AppWrapper: FunctionComponent = ({ children }) => {
  return <AppWrappeStyled>{children}</AppWrappeStyled>;
};

export default AppWrapper;
