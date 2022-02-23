import React, { FunctionComponent, useEffect, useState } from "react";
import { LOCALSTORAGE_KEYS } from "../../constants";
import { ICard } from "../../interfaces/interfaces";
import Card from "../Card";
import EditComponent from "../EditComponent";
import ModalCard from "../ModalCard";
import { ICollumnProps } from "./interfaces";
import Modal from "react-modal";
import {
  CollumnsBlock,
  ContainerCollumns,
  Content,
  HeaderBlock,
  Title,
  Option,
  AddCardText,
  StyledImg,
  AddCard,
  ContentCard,
} from "./styles";

const Collumns: FunctionComponent<ICollumnProps> = ({
  colId,
  title,
  authName,
  // setCardId,
  // changeTitle,
  cards,
  getCards,
  // addCard,
  // comments,
  // getCommentsById,
}) => {
  const [cardId, setCardId] = useState<number | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [collId, setCollId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [localCards, setLocalCards] = useState<ICard[]>(() =>
    getCards(colId, cards)
  );

  console.log("cards", cards);

  const onAddCard = () => {
    setCollId(colId);
    console.log(colId);
    addCard(colId);
  };
  const addCard = (colId: number) => {
    const newObj: ICard = {
      id: cards.length + 1,
      columnId: colId,
      title: "default title",
      data: "",
      author: authName,
    };

    // setCards([...cards, newObj]);
    localStorage.setItem(
      LOCALSTORAGE_KEYS.cards,
      JSON.stringify([...cards, newObj])
    );
  };

  useEffect(() => {
    setLocalCards(() => getCards(colId, cards));
    console.log("Вызываюсь");
  }, [cards]);

  const onClickCard = (item: number) => {
    setCardId(item);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickTitle = () => {
    setIsEdit(true);
  };

  const onEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  return (
    <>
      <ContainerCollumns>
        <CollumnsBlock>
          <HeaderBlock>
            {isEdit ? (
              <AddCard />
            ) : (
              // <EditComponent
              //   onSubmitForm={onSubmitEdit}
              //   onEditInput={onEditInput}
              //   setIsEdit={setIsEdit}
              //   inputValue={inputValue}
              // />
              <Title onClick={onClickTitle}>{title}</Title>
            )}
          </HeaderBlock>
          <Content>
            {localCards.map((item, key) => (
              <ContentCard
                onClick={() => {
                  onClickCard(item.id);
                  openModal();
                }}
                key={`${item}_${key}`}
              >
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  // onClick={}
                  // setCardId={setCardId}
                  // getComments={getCommentsById}
                  // comments={comments}
                />
              </ContentCard>
            ))}

            <AddCard onClick={onAddCard}>
              <AddCardText>Add card</AddCardText>
              {/* <StyledImg src="img/plus-svg.svg" onClick={onAddCard} /> */}
            </AddCard>
          </Content>
        </CollumnsBlock>
      </ContainerCollumns>
      <Modal isOpen={modalIsOpen}>
        <button onClick={closeModal}>close</button>
        {cardId && (
          <ModalCard
            cardId={cardId}
            // setId={setCardId}
            cards={cards}
            // comments={comments}
            // columns={collumns}
            // getComments={getCommentsById}
            // getCardData={getCardsDataById}
            // changeTitle={changeTitleCard}
            // changeData={changeCardData}
            // deleteCard={deleteCard}
            // changeComment={changeComment}
            // deleteComment={deleteComment}
            // addComment={addComment}
          />
        )}
      </Modal>
    </>
  );
};

export default Collumns;
