import React, { FunctionComponent, useEffect, useState } from "react";
import { ICard } from "../../interfaces/interfaces";
import EditComponent from "../EditComponent/EditComponent";
import { ICollumnProps } from "./interfaces";
import { Card } from "..";
import {
  CollumnsBlock,
  ContainerCollumns,
  Content,
  HeaderBlock,
  Title,
  AddCardText,
  AddCard,
  ContentCard,
} from "./styles";

const Collumns: FunctionComponent<ICollumnProps> = ({ colId, title }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [localCardId, setLocalId] = useState(0);
  // const [localCards, setLocalCards] = useState<ICard[]>(() =>
  //   // getCards(colId, cards)
  // );

  // const localCards = [
  //   id:1,
  //   title:1,
  //   content:string,string,string;
  // ]

  // useEffect(() => {
  //   setLocalCards(() => getCards(colId, cards));
  // }, [cards]);

  const onAddCard = () => {
    // addCard(colId);
  };

  const onClickCard = (item: number) => {
    // setCardId(item);
    setLocalId(item);
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

  const onSubmitEdit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // changeTitle(colId, inputValue);
    setIsEdit(false);
    resetInputValue();
  };

  return (
    <>
      <ContainerCollumns>
        <CollumnsBlock>
          <HeaderBlock>
            {isEdit ? (
              <EditComponent
                onSubmitForm={onSubmitEdit}
                onEditInput={onEditInput}
                setIsEdit={setIsEdit}
                inputValue={inputValue}
                textAreaValue={title}
                defaultText={title}
              />
            ) : (
              <Title onClick={onClickTitle}>{title}</Title>
            )}
          </HeaderBlock>
          <Content>
            {/* {localCards.map((item, key) => (
              <ContentCard
                onClick={() => {
                  onClickCard(item.id);
                  // cardClick(true);
                }}
                key={`${item}_${key}`}
              >
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  // getComments={getCommentsById}
                  // comments={comments}
                />
              </ContentCard>
            ))} */}
            <AddCard onClick={onAddCard}>
              <AddCardText>Add card</AddCardText>
            </AddCard>
          </Content>
        </CollumnsBlock>
      </ContainerCollumns>
    </>
  );
};

export default Collumns;
