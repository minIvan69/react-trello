import { FunctionComponent } from "react";
import { Field, Form } from "react-final-form";
import { Input } from "..";
import { IAddComponentProps, ISubmitValue } from "./interfaces";
import {
  EditContainer,
  StyledButton,
  StyledInput,
  DisabledButton,
  StyledForm,
} from "./styles";

const AddComponent: FunctionComponent<IAddComponentProps> = ({
  onSubmitForm,
}) => {
  const onSubmit = (values: ISubmitValue) => {
    onSubmitForm(values.value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
            form.reset();
          }}
        >
          <Field
            name="value"
            component={Input}
            type="text"
            placeholder="Input your comment"
          />
          {submitting || pristine ? (
            <DisabledButton type="submit" disabled={true}>
              OK
            </DisabledButton>
          ) : (
            <StyledButton type="submit"> OK </StyledButton>
          )}
        </StyledForm>
      )}
    />
  );
};

export default AddComponent;
