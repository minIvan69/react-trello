import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Collumns, ModalCard } from "..";
import { selectors } from "../../redux/ducks";
import { Title, ContainerCollumns, Container, ContentCollumns } from "./styles";

const Content: FunctionComponent = () => {
  const cardId = useSelector(selectors.localCards.getLocalCards);
  const collumns = useSelector(selectors.collumns.selectCollumns);

  const [setVisible, setIsVisible] = useState(false);

  const modalIsOpen = (item: boolean) => {
    setIsVisible(item);
  };

  const closeModal = () => {
    setIsVisible(false);
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
                cardClick={modalIsOpen}
              />
            </ContentCollumns>
          ))}
        </ContainerCollumns>
      </Container>
      <Modal
        isOpen={setVisible}
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
        {cardId && <ModalCard localCardId={cardId} onClose={closeModal} />}
      </Modal>
    </>
  );
};

export default Content;
