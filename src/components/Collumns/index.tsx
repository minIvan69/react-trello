import React, { FunctionComponent, useEffect, useState } from "react";
import { ICard } from "../../interfaces/interfaces";
import Card from "../Card";
import EditComponent from "../EditComponent";
import { ICollumnProps } from "./interfaces";
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
} from "./styles";

const Collumns: FunctionComponent<ICollumnProps> = ({
  colId,
  title,
  setCardId,
  changeTitle,
  cards,
  getCards,
  addCard,
  comments,
  getCommentsById,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [localCards, setLocalCards] = useState<ICard[]>(() =>
    getCards(colId, cards)
  );

  useEffect(() => {
    setLocalCards(() => getCards(colId, cards));
  }, [cards]);

  const onAddCard = () => {
    addCard(colId);
  };

  const onClickTitle = () => {
    setIsEdit(true);
  };

  const onEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmitEdit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeTitle(colId, inputValue);
    setIsEdit(false);
    resetInputValue();
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  return (
    <ContainerCollumns>
      <CollumnsBlock>
        <HeaderBlock>
          {isEdit ? (
            <EditComponent
              onSubmitForm={onSubmitEdit}
              onEditInput={onEditInput}
              setIsEdit={setIsEdit}
              inputValue={inputValue}
            />
          ) : (
            <Title onClick={onClickTitle}>{title}</Title>
          )}
        </HeaderBlock>
        <Content>
          {localCards.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              setCardId={setCardId}
              getComments={getCommentsById}
              comments={comments}
            />
          ))}

          <AddCard>
            <AddCardText>Add card</AddCardText>
            <StyledImg src="img/plus-svg.svg" onClick={onAddCard} />
          </AddCard>
        </Content>
      </CollumnsBlock>
    </ContainerCollumns>
  );
};

export default Collumns;
