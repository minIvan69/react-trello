import React, { FunctionComponent } from "react";
import {
  Container,
  StyledModal,
  Content,
  Header,
  PanelText,
  CardAuthor,
  Description,
  Actions,
  Title,
  ContainerPanel,
  Input,
} from "../ModalCard/styles";

interface IModalCard {
  collumnName: string;
  author: string;
}

const ModalCard: FunctionComponent<IModalCard> = ({ author, collumnName }) => {
  return (
    <StyledModal>
      <Container>
        <Content>
          <Header>
            <Title>{collumnName}</Title>
            <CardAuthor>{author}</CardAuthor>
          </Header>
          <ContainerPanel>
            <PanelText>
              <Description>
                <Title>Описание</Title>
                <Input />
              </Description>
            </PanelText>
            <Actions>Действия</Actions>
          </ContainerPanel>
        </Content>
      </Container>
    </StyledModal>
  );
};

export default ModalCard;
