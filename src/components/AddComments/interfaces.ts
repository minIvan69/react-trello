import React from "react";

export interface IAddComponentProps {
  onSubmitForm: (value: string) => void;
  onEditInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export interface ISubmitValue {
  value: string;
}
