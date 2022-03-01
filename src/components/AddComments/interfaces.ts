import React from "react";

export interface IAddComponentProps {
  onSubmitForm: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onEditInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}
