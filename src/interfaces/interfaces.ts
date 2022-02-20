export interface ICard {
    id: number,
    columnId: number,
    title: string,
    data: string,
    author: string,
  }
  
  // export interface ICard {
  //   id: number
  //   columnId: number
  //   title: string
  // }
  
  export interface ICollumnData {
    columnId: number,
    title: string
  }
  
  export interface ICommentsData {
    id: number
    cardId: number,
    name: string,
    comment: string
  }
  