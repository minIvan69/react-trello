import React, { FunctionComponent } from "react";
import Card from "../Card";
import Header from "../Header";
import { CollumnsBlock, ContainerCollumns, Content, HeaderBlock, Title, Option } from "./styles";

interface IColumnProps{
    title: string
}

const Collumns: FunctionComponent<IColumnProps> = ({title}) =>{
    return (
        <ContainerCollumns>
          <CollumnsBlock>
            <HeaderBlock>
              <Title>{title}</Title>
              <Option>Optin</Option>
            </HeaderBlock>
            <Content><Card/></Content>
          </CollumnsBlock>    
        </ContainerCollumns>
      );
}


export default Collumns;
