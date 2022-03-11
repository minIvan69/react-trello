import React, { FunctionComponent, useState } from "react";
import { LOCALSTORAGE_KEYS } from "../../constants";
import {
  ICard,
  ICollumnStorage,
  ICommentsStorage,
} from "../../interfaces/interfaces";
import Modal from "react-modal";
import { Collumns, ModalCard } from "..";
import { IContentProps } from "./interfaces";
import { initialCollumnsState } from "../../data";
import { Title, ContainerCollumns, Container, ContentCollumns } from "./styles";

const Content: FunctionComponent<IContentProps> = ({ authName }) => {
  const [cardId, setCardId] = useState<number | undefined>(undefined);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const localColumns = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.columns) as string
  );
  const [collumns, setColumns] = useState<ICollumnStorage[]>(
    localColumns === null ? initialCollumnsState : localColumns
  );
  localStorage.setItem(LOCALSTORAGE_KEYS.columns, JSON.stringify(collumns));

  const localComments = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEYS.comments) as string
  );
  const [comments, setComments] = useState<ICommentsStorage[]>(
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
    setColumns(newObj);
    localStorage.setItem("columns", JSON.stringify(newObj));
  };

  const changeTitleCard = (id: number, title: string) => {
    const newObjData = cards.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
    setCards(newObjData);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObjData));

    const newObjCards = cards.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
    setCards(newObjCards);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObjCards));
  };

  const changeCardData = (id: number, newData: string) => {
    const newObj = cards.map((item) => {
      if (item.id === id) {
        item.content = newData;
      }
      return item;
    });

    setCards(newObj);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObj));
  };

  const deleteCard = (id: number) => {
    const itemToDelete = cards.find((item) => item.id === id);
    const newObj = cards.filter((item) => item !== itemToDelete);

    setCards(newObj);
    localStorage.setItem(LOCALSTORAGE_KEYS.cards, JSON.stringify(newObj));
  };

  const changeComment = (id: number, newComment: string) => {
    const newObj = comments.map((item) => {
      if (item.id === id) {
        item.comment = newComment;
      }
      return item;
    });

    setComments(newObj);
    localStorage.setItem("comments", JSON.stringify(newObj));
  };

  const deleteComment = (id: number) => {
    const itemToDelete = comments.find((item) => item.id === id);
    const newObj = comments.filter((item) => item !== itemToDelete);

    setComments(newObj);
    localStorage.setItem("comments", JSON.stringify(newObj));
  };

  const addCard = (colId: number) => {
    const newObj: ICard = {
      id: cards.length + 1,
      columnId: colId,
      title: "default title",
      content: "",
      author: authName,
    };

    setCards([...cards, newObj]);
    localStorage.setItem(
      LOCALSTORAGE_KEYS.cards,
      JSON.stringify([...cards, newObj])
    );
  };

  const openModal = (item: boolean) => {
    setIsOpen(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addComment = (cardId: number, comment: string) => {
    const newComment: ICommentsStorage = {
      id: new Date().getMilliseconds(),
      cardId: cardId,
      name: authName,
      comment: comment,
    };

    setComments((prevState) => [newComment, ...prevState]);
    localStorage.setItem("comments", JSON.stringify([newComment, ...comments]));
  };

  const getCommentsById = (id: number, comments: ICommentsStorage[]) => {
    return comments.filter((item) => item.cardId === id);
  };

  const getCardsById = (id: number, cards: ICard[]) => {
    return cards.filter((item) => item.columnId === id);
  };

  const getCardsDataById = (id: number, cards: ICard[]) => {
    return cards.filter((item) => item.id === id);
  };

  return (
    <>
      <Container>
        <Title>Trello in React</Title>
        <ContainerCollumns>
          {collumns.map((item, key) => (
            <ContentCollumns key={key}>
              <Collumns
                key={key}
                title={item.title}
                colId={item.columnId}
                cards={cards}
                authName={authName}
                setCardId={setCardId}
                changeTitle={changeTitle}
                getCards={getCardsById}
                addCard={addCard}
                cardClick={openModal}
                comments={comments}
                getCommentsById={getCommentsById}
              />
            </ContentCollumns>
          ))}
        </ContainerCollumns>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            padding: 0,
          },
        }}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        key={cardId}
      >
        {cardId && (
          <ModalCard
            localCardId={cardId}
            cards={cards}
            authName={authName}
            comments={comments}
            getComments={getCommentsById}
            getCardContent={getCardsDataById}
            changeTitle={changeTitleCard}
            changeDescription={changeCardData}
            deleteCard={deleteCard}
            changeComment={changeComment}
            deleteComment={deleteComment}
            addComment={addComment}
            onClose={closeModal}
          />
        )}
      </Modal>
    </>
  );
};

export default Content;
