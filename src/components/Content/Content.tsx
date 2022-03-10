import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";

import { Collumns, ModalCard } from "..";
import { selectors } from "../../redux/Collumns";
import { IContentProps } from "./interfaces";
import { Title, ContainerCollumns, Container, ContentCollumns } from "./styles";

const Content: FunctionComponent<IContentProps> = ({ authName }) => {
  const collumns = useSelector(selectors.selectCollumns);

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
                colId={item.id}
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
