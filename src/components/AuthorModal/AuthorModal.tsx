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

const AuthorModal: FunctionComponent<IModalAuthorProps> = ({
  authorName,
  setAuthName,
  visibleModal,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (authorName === undefined) {
      setVisible(true);
    }
  }, [authorName]);

  const [cookie, setCookie] = useCookies(["authName"]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onsubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVisible(false);
    setCookie("authName", inputValue);
    setAuthName(inputValue);
    visibleModal(false);
  };

  return visible ? (
    <Container>
      <StyledForm onSubmit={onsubmit}>
        <StyledInput
          placeholder={"Input your author name"}
          onChange={onChange}
        />
        {inputValue === "" ? (
          <DisabledButton disabled={true}> Accept </DisabledButton>
        ) : (
          <StyledButton type={"submit"}> Accept </StyledButton>
        )}
      </StyledForm>
    </Container>
  ) : null;
};

export default AuthorModal;
