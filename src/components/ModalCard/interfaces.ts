import {
  ICard,
  ICollumnStorage,
  ICommentsStorage,
} from "../../interfaces/interfaces";

export interface IModalCardProps {
  localCardId: number;
  comments: ICommentsStorage[];
  cards: ICard[];
  authName: string;
  columns: ICollumnStorage[];
  getCardContent: (id: number, cardsData: ICard[]) => ICard[];
  getComments: (id: number, comments: ICommentsStorage[]) => ICommentsStorage[];
  changeTitle: (id: number, title: string) => void;
  changeDescription: (id: number, newData: string) => void;
  deleteCard: (id: number) => void;
  deleteComment: (id: number) => void;
  changeComment: (id: number, newComment: string) => void;
  addComment: (cardId: number, comment: string) => void;
  onClose: (item: boolean) => void;
}
