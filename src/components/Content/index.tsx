import React, { FunctionComponent } from "react";
import Collumns from "../Collumns";
import { BoardContent, Title, ContainerCollumns, Container } from "./styles";

const mass = [
  {
    title: "TODO",
    content: [],
  },
  {
    title: "In Progress,",
    content: [],
  },
  {
    title: "Testing",
    content: [],
  },
  {
    title: "Done",
    content: [],
  },
];

const Content: FunctionComponent = ({}) => {
  return (
    <Container>
      <Title>Trello in React</Title>
      <ContainerCollumns>
        {mass.map((item, index) => (
          <Collumns title={item.title} />
        ))}
      </ContainerCollumns>
    </Container>
  );
};

export default Content;
