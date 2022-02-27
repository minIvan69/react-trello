import React, { FunctionComponent, useState } from "react";
import { IEditDescription } from "./interfaces";
import { CardData, CardTitle, EditText, StyledText } from "./styles";

const EditDescription: FunctionComponent<IEditDescription> = ({
  onClickDescription,
  onAddDescription,
  onDeleteDescription,
  content,
}) => {
  return content === "" ? (
    <EditText onClick={onAddDescription}> Add description </EditText>
  ) : (
    <>
      <CardData onClick={onClickDescription}>
        <CardTitle>Description:</CardTitle>
        <StyledText>{content}</StyledText>
      </CardData>
      <EditText onClick={onDeleteDescription}>Remove description</EditText>
    </>
  );
};

export default EditDescription;
