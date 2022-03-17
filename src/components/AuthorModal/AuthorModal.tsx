import { FunctionComponent, useState } from "react";
import { IModalAuthorProps, ISubmitValue } from "./interfaces";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/ducks";
import { Field, Form } from "react-final-form";
import {
  DisabledButton,
  ErrorText,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./styles";
import { log } from "console";

const AuthorModal: FunctionComponent<IModalAuthorProps> = ({
  visibleModal,
}) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = (value: ISubmitValue) => {
    console.log(value);
    setVisible(false);
    visibleModal(false);
    dispatch(actions.authorNames.setAuthor(value.value));
  };

  const required = (value: string) =>
    value ? undefined : "Fill in the required field";

  const mustBeString = (value: string) =>
    typeof value === "string" ? undefined : `Please enter a name, not a number`;

  const minLenghtValue = (min: number) => (value: string) =>
    typeof value === "string" && value.length <= min
      ? "Please enter more than 4 characters"
      : undefined;

  const composeValidators =
    (...validators: any[]) =>
    (value: string) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return visible ? (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            name="value"
            validate={composeValidators(
              required,
              minLenghtValue(4),
              mustBeString
            )}
          >
            {({ input, meta }) => (
              <>
                <StyledInput
                  {...input}
                  type="name"
                  placeholder="Input your author name"
                />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </>
            )}
          </Field>

          {submitting || pristine ? (
            <StyledButton type="submit" disabled={true}>
              Accept
            </StyledButton>
          ) : (
            <StyledButton type="submit"> Accept </StyledButton>
          )}
        </StyledForm>
      )}
    />
  ) : null;
};

export default AuthorModal;
