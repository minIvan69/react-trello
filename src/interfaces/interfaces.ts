export interface ICard {
  id: number;
  columnId: number;
  title: string;
  content: string;
  author: string;
}

export interface ICollumnStorage {
  columnId: number;
  title: string;
}

export interface ICommentsStorage {
  id: number;
  cardId: number;
  name: string;
  comment: string;
}
