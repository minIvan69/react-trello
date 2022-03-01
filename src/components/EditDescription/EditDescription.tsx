import { FunctionComponent } from "react";
import { IEditDescription } from "./interfaces";
import { CardDescription, CardTitle, EditText, StyledText } from "./styles";

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
      <CardDescription onClick={onClickDescription}>
        <CardTitle>Description:</CardTitle>
        <StyledText>{content}</StyledText>
      </CardDescription>
      <EditText onClick={onDeleteDescription}>Remove description</EditText>
    </>
  );
};

export default EditDescription;
