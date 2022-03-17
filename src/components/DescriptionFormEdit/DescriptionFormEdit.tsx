import { FunctionComponent } from "react";
import { IEditProps, ISubmitValue } from "./interfaces";
import { TextArea } from "..";
import { Field, Form } from "react-final-form";
import { EditContainer, StyledButton } from "./styles";

const EditComponent: FunctionComponent<IEditProps> = ({
  onSubmitForm,
  setIsEdit,
  defaultText,
  changeCancel,
}) => {
  const onCancel = () => {
    setIsEdit(false);
    changeCancel();
  };

  const onSubmit = (values: ISubmitValue) => {
    onSubmitForm(values.description);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <EditContainer onSubmit={handleSubmit}>
          <Field
            name="description"
            type="text"
            component={TextArea}
            placeholder={"Аdd a more detailed description"}
            defaultValue={defaultText}
          />
          {submitting || pristine ? (
            <StyledButton type="button" onClick={onCancel}>
              OK
            </StyledButton>
          ) : (
            <StyledButton type="submit"> OK </StyledButton>
          )}
        </EditContainer>
      )}
    />
  );
};

export default EditComponent;
