import React, { SetStateAction } from "react";

export interface IEditProps {
  isTextArea?: boolean;
  textAreaValue?: string;
  onSubmitForm: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onEditInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEditTextArea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue?: string;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  defaultText?: string;
}
