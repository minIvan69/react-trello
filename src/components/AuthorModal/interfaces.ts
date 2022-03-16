import React, { SetStateAction } from "react";

export interface IModalAuthorProps {
  visibleModal: (item: boolean) => void;
}

export interface ISubmitValue {
  value: string;
}
