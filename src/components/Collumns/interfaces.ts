import React, {Dispatch} from "react";
import {ICard, ICommentsData} from "../../interfaces/interfaces";

export interface ICollumnProps {
  title: string
  colId: number
  cards: ICard[]
  setCardId: Dispatch<React.SetStateAction<number | undefined>>
  changeTitle: (id: number, title: string) => void
  getCards: (id: number, cards: ICard[]) => ICard[]
  addCard: (colId: number) => void
  comments: ICommentsData[]
  getCommentsById: (id: number, comments: ICommentsData[]) => ICommentsData[]
}
