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
            required
            component={component}
            defaultValue={defaultText}
            minLength={5}
          />
          <ButtonCheck
            pristine={pristine}
            submitting={submitting}
            onCancel={onCancel}
            component={component}
          />
        </EditContainer>
      )}
    />
  );
};

export default FormComponent;
