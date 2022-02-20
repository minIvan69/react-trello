import React, { FunctionComponent, useState } from "react";
import { LOCALSTORAGE_KEYS } from "../../constants";
import {
  ICard,
  ICollumnData,
  ICommentsData,
} from "../../interfaces/interfaces";
import Collumns from "../Collumns";
import { IContentProps } from "./interfaces";
import { initialCollumnsState } from "../../data";
import { BoardContent, Title, ContainerCollumns, Container } from "./styles";

const Content: FunctionComponent<IContentProps> = ({ authName }) => {
  const [cardId, setCardId] = useState<number | undefined>(undefined);

  const localCollumns = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.columns) as string
  );
  const [collumns, setCollumns] = useState<ICollumnData[]>(
    localCollumns === null ? initialCollumnsState : localCollumns
  );
  localStorage.setItem(LOCALSTORAGE_KEYS.columns, JSON.stringify(collumns));

  const localComments = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.comments) as string
  );
  const [comments, setComments] = useState<ICommentsData[]>(
    localComments === null ? [] : localComments
  );
  localStorage.setItem(
    LOCALSTORAGE_KEYS.comments,
    JSON.stringify(localComments)
  );

  const localCards = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.cards) as string
  );
  const [cards, setCards] = useState<ICard[]>(
    localCards === null ? [] : localCards
  );
  localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(localCards));

  const changeTitle = (id: number, title: string) => {
    const newObj = collumns.map((item) => {
      if (item.columnId === id) {
        item.title = title;
      }
      return item;
    });
    setCollumns(newObj);
    localStorage.setItem("columns", JSON.stringify(newObj));
  };

  const addCard = (colId: number) => {};

  const getCommentsById = (id: number, comments: ICommentsData[]) => {
    return comments.filter((item) => item.cardId == id);
  };

  const getCardsById = (id: number, cards: ICard[]) => {
    return cards.filter((item) => item.columnId == id);
  };

  const getCardsDataById = (id: number, cards: ICard[]) => {
    return cards.filter((item) => item.id == id);
  };

  return (
    <Container>
      <Title>Trello in React</Title>
      <ContainerCollumns>
        {collumns.map((item) => (
          <Collumns
            key={item.columnId}
            title={item.title}
            colId={item.columnId}
            cards={cards}
            setCardId={setCardId}
            changeTitle={changeTitle}
            getCards={getCardsById}
            addCard={addCard}
            comments={comments}
            getCommentsById={getCommentsById}
          />
        ))}
      </ContainerCollumns>
    </Container>
  );
};

export default Content;
