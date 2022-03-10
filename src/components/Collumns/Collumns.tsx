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
import { useDispatch } from "react-redux";
import { actions } from "../../redux/ducks";

const Collumns: FunctionComponent<ICollumnProps> = ({ colId, title }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [localCardId, setLocalId] = useState(0);
  const dispatch = useDispatch();

  const onClickTitle = () => {
    setIsEditTitle(true);
  };

  const onSubmitChangeTitles = (value: string) => {
    dispatch(actions.collumns.changeTitle({ collumnId: colId, title: value }));
    setIsEditTitle(false);
  };

  const onAddCard = () => {
    // addCard(colId);
  };

  const onClickCard = (item: number) => {
    // setCardId(item);
    setLocalId(item);
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
            {isEditTitle ? (
              <EditComponent
                onSubmitForm={onSubmitChangeTitles}
                setIsEdit={setIsEditTitle}
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
