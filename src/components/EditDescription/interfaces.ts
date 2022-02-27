import React, { SetStateAction } from "react";

export interface IEditDescription {
  onAddDescription: () => void;
  onClickDescription: () => void;
  onDeleteDescription: () => void;
  content: string;
}
