import React, { SetStateAction } from "react";

export interface IHeaderProps {
  authName: string;
  setAuthName: React.Dispatch<SetStateAction<string>>;
}
