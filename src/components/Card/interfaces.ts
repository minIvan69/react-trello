import React, { Dispatch } from "react";
import { ICommentsData } from "../../interfaces/interfaces";

export interface ICardProps {
  id: number;
  title: string;
  // onClick: void;
  // setCardId: Dispatch<React.SetStateAction<number | undefined>>
  // comments: ICommentsData[]
  // getComments: (id: number, comments: ICommentsData[]) => ICommentsData[]
}
