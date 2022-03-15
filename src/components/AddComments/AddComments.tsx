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
  onEditInput,
  inputValue,
}) => {
  const onSubmit = (values: ISubmitValue) => {
    onSubmitForm(values.value);
  };

  return (
    // <EditContainer onSubmit={onSubmit}>
    //   <StyledInput onChange={onEditInput} placeholder="Input your comment" />
    //   {inputValue === "" ? (
    //     <DisabledButton disabled={true}> ОК </DisabledButton>
    //   ) : (
    //     <StyledButton type={"submit"}>OK</StyledButton>
    //   )}
    // </EditContainer>

    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, values }) => (
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
          <StyledButton>OK</StyledButton>
        </StyledForm>
      )}
    />
  );
};

export default AddComponent;
