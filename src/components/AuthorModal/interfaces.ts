import React, { SetStateAction } from "react";

export interface IModalAuthorProps {
  authorName: string;
  setAuthName: React.Dispatch<SetStateAction<string>>;
}
