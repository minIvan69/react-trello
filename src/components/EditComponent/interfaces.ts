import React, { SetStateAction } from "react";

export interface IEditProps {
  isTextArea?: boolean;
  onSubmitForm: (value: string) => void;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  defaultText?: string;
}

export interface ISubmitValue {
  value: string;
}
