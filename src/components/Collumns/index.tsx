import React, { FunctionComponent, useState } from "react";
import { ICard } from "../../interfaces/interfaces";
import Card from "../Card";
import { ICollumnProps } from "./interfaces";
import {
  CollumnsBlock,
  ContainerCollumns,
  Content,
  HeaderBlock,
  Title,
  Option,
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
  const [localCards, setLocalCards] = useState<ICard[]>(() =>
    getCards(colId, cards)
  );

  return (
    <ContainerCollumns>
      <CollumnsBlock>
        <HeaderBlock>
          <Title>{title}</Title>
          <Option>Optin</Option>
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
        </Content>
      </CollumnsBlock>
    </ContainerCollumns>
  );
};

export default Collumns;
