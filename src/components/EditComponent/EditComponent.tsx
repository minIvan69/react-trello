import { FunctionComponent } from "react";
import {
  EditContainer,
  StyledButton,
  StyledInput,
  StyledTextArea,
} from "./styles";
import { IEditProps } from "./interfaces";

const EditComponent: FunctionComponent<IEditProps> = ({
  onEditInput,
  onSubmitForm,
  onEditTextArea,
  isTextArea,
  textAreaValue,
  inputValue,
  setIsEdit,
  defaultText,
}) => {
  const onCancel = () => {
    setIsEdit(false);
  };

  return isTextArea ? (
    <EditContainer onSubmit={onSubmitForm}>
      <StyledTextArea
        onChange={onEditTextArea}
        disabled={false}
        readOnly={false}
        defaultValue={defaultText}
      />
      {textAreaValue === "" ? (
        <StyledButton type={"button"} onClick={onCancel}>
          Cancel
        </StyledButton>
      ) : (
        <StyledButton>OK</StyledButton>
      )}
    </EditContainer>
  ) : (
    <EditContainer onSubmit={onSubmitForm}>
      <StyledInput onChange={onEditInput} defaultValue={defaultText} />
      {inputValue === "" ? (
        <StyledButton type={"button"} onClick={onCancel}>
          Cancel
        </StyledButton>
      ) : (
        <StyledButton>OK</StyledButton>
      )}
    </EditContainer>
  );
};

export default EditComponent;
