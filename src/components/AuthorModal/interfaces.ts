import React, { SetStateAction } from "react";

export interface IModalAuthorProps {
  // authorName: string;
  visibleModal: (item: boolean) => void;
  // setAuthName: React.Dispatch<SetStateAction<string>>;
}

export interface ISubmitValue {
  value: string;
}
