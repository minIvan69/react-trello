import { FunctionComponent } from "react";
import { EditContainer } from "./styles";
import { IEditProps } from "./interfaces";
import { Input, TextArea } from "..";

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
      <TextArea
        onEditTextArea={onEditTextArea}
        defaultText={defaultText}
        onCancel={onCancel}
        textAreaValue={textAreaValue}
      />
    </EditContainer>
  ) : (
    <EditContainer onSubmit={onSubmitForm}>
      <Input
        onEditInput={onEditInput}
        defaultText={defaultText}
        onCancel={onCancel}
        textAreaValue={inputValue}
      />
    </EditContainer>
  );
};

export default EditComponent;
