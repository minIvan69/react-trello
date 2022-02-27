import React, { Dispatch } from "react";
import { ICommentsStorage } from "../../interfaces/interfaces";

export interface ICardProps {
  id: number;
  title: string;
  comments: ICommentsStorage[];
  getComments: (id: number, comments: ICommentsStorage[]) => ICommentsStorage[];
}
