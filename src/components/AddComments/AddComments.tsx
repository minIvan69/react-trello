import { FunctionComponent } from "react";
import { IAddComponentProps } from "./interfaces";
import { EditContainer, StyledButton, StyledInput } from "./styles";

const AddComponent: FunctionComponent<IAddComponentProps> = ({
  onSubmitForm,
  onEditInput,
}) => {
  return (
    <EditContainer onSubmit={onSubmitForm}>
      <StyledInput onChange={onEditInput} />
      <StyledButton>OK</StyledButton>
    </EditContainer>
  );
};

export default AddComponent;
