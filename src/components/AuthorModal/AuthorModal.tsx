import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Container,
  DisabledButton,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./styles";
import { IModalAuthorProps } from "./interfaces";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux/ducks";
import { Field, Form } from "react-final-form";
import { Input } from "..";

const AuthorModal: FunctionComponent<IModalAuthorProps> = ({
  // setAuthName,
  visibleModal,
}) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const authorName = useSelector(selectors.authorNames.getAuthorName);

  // const [cookies] = useCookies(["authName"]);
  // const [authName, setAuthName] = useState(cookies.authName);

  // const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   if (authorName === undefined) {
  //     setVisible(true);
  //   }
  // }, [authorName]);

  // const [cookie, setCookie] = useCookies(["authName"]);

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  const onsubmit = (value: IModalAuthorProps) => {
    setVisible(false);
    visibleModal(false);
    dispatch(actions.authorNames.setAuthor(value.authorName));
    console.log(value.authorName);
  };

  return visible ? (
    <Form
      onSubmit={onsubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            name="value"
            type="text"
            component={Input}
            placeholder={"Input your author name"}
          />

          {submitting || pristine ? (
            <DisabledButton type="submit" disabled={true}>
              Accept
            </DisabledButton>
          ) : (
            <StyledButton type="submit"> Accept </StyledButton>
          )}
        </StyledForm>
      )}
    />
  ) : // <Form onSubmitForm={onsubmit} onCancel={onCancel} component={Input} />
  null;
};

export default AuthorModal;
