import React, { SetStateAction } from "react";

export interface IEditProps {
  onSubmitForm: (value: string) => void;
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  defaultText: string;
  changeCancel: () => void;
}

export interface ISubmitValue {
  description: string;
}
