import { FunctionComponent } from "react";
import { IAddComponentProps } from "./interfaces";
import {
  EditContainer,
  StyledButton,
  StyledInput,
  DisabledButton,
} from "./styles";

const AddComponent: FunctionComponent<IAddComponentProps> = ({
  onSubmitForm,
  onEditInput,
  inputValue,
}) => {
  return (
    <EditContainer onSubmit={onSubmitForm}>
      <StyledInput onChange={onEditInput} placeholder="Input your comment" />
      {inputValue === "" ? (
        <DisabledButton disabled={true}> ОК </DisabledButton>
      ) : (
        <StyledButton type={"submit"}>OK</StyledButton>
      )}
    </EditContainer>
  );
};

export default AddComponent;
