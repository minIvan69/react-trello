import React, { FunctionComponent, useState } from "react";
import { ICard } from "../../interfaces/interfaces";
import { ICollumnProps } from "./interfaces";
import { Card, EditComponent } from "..";
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
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux/ducks";

const Collumns: FunctionComponent<ICollumnProps> = ({
  colId,
  title,
  cardClick,
}) => {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const dispatch = useDispatch();

  const localCards = useSelector(selectors.cards.getCardsByCollumnsId(colId));

  const onClickTitle = () => {
    setIsEditTitle(true);
  };

  const onSubmitChangeTitles = (value: string) => {
    dispatch(actions.collumns.changeTitle({ collumnId: colId, title: value }));
    setIsEditTitle(false);
  };

  const onAddCard = () => {
    const newCard: ICard = {
      id: new Date().getMilliseconds(),
      columnId: colId,
      title: "default name",
      content: "",
      author: title,
    };

    dispatch(actions.cards.addCard({ newCard }));
  };

  const handleCardClick = (item: number) => {
    cardClick(true, item);
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
            {localCards.map((item, key) => (
              <ContentCard
                onClick={() => handleCardClick(item.id)}
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
            ))}
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
