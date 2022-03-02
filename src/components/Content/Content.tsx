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
  const collumns = [
    {
      title: "TODO",
      columnId: 0,
    },
    {
      title: "InProgress",
      columnId: 1,
    },
    {
      title: "Testing",
      columnId: 2,
    },
    {
      title: "Done",
      columnId: 3,
    },
  ];

  const [setVisible, setIsVisible] = useState(false);

  const modalIsOpen = (item: boolean) => {
    setIsVisible(item);
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
                // cards={cards}
                // authName={authName}
                // setCardId={setCardId}
                // changeTitle={changeTitle}
                // getCards={getCardsById}
                // addCard={addCard}
                // cardClick={openModal}
                // comments={comments}
                // getCommentsById={getCommentsById}
              />
            </ContentCollumns>
          ))}
        </ContainerCollumns>
      </Container>
      {/* <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            padding: 0,
          },
        }}
        ariaHideApp={false}
      > */}
      {/* {cardId && ( */}
      {/* <ModalCard
            // localCardId={cardId}
            // cards={cards}
            authName={authName}
            // comments={comments}
            // columns={collumns}
            // getComments={getCommentsById}
            // getCardContent={getCardsDataById}
            // changeTitle={changeTitleCard}
            // changeDescription={changeCardData}
            // deleteCard={deleteCard}
            // changeComment={changeComment}
            // deleteComment={deleteComment}
            // addComment={addComment}
            // onClose={closeModal}
          />
        )} */}
      {/* </Modal> */}
    </>
  );
};

export default Content;
