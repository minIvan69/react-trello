import React, { FunctionComponent } from "react";
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
      <StyledInput onChange={onEditInput} />
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
