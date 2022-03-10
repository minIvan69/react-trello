import React, { FunctionComponent } from "react";
import { Field, Form } from "react-final-form";
import { ButtonCheck } from "..";
import { IForm } from "./interfaces";
import { EditContainer } from "./styles";

const FormComponent: FunctionComponent<IForm> = ({
  onSubmitForm,
  onCancel,
  component,
  defaultText,
}) => {
  return (
    <Form
      onSubmit={onSubmitForm}
      render={({ handleSubmit, submitting, pristine }) => (
        <EditContainer onSubmit={handleSubmit}>
          <Field
            name="value"
            type="text"
            component={component}
            defaultValue={defaultText}
          />
          <ButtonCheck
            pristine={pristine}
            submitting={submitting}
            onCancel={onCancel}
          />
        </EditContainer>
      )}
    />
  );
};

export default FormComponent;
