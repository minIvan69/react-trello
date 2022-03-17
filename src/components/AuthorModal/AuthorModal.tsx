import { FunctionComponent, useState } from "react";
import { IModalAuthorProps, ISubmitValue } from "./interfaces";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/ducks";
import { Field, Form } from "react-final-form";
import { ErrorText, StyledButton, StyledForm, StyledInput } from "./styles";
import {
  composeValidators,
  minLenghtValue,
  mustBeString,
  required,
} from "../utils/validators";

const AuthorModal: FunctionComponent<IModalAuthorProps> = ({
  visibleModal,
}) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = (value: ISubmitValue) => {
    setVisible(false);
    visibleModal(false);
    dispatch(actions.authorNames.setAuthor(value.value));
  };

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
