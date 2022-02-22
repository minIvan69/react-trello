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
import BackModal from "../BackModal";

const AuthorModal: FunctionComponent<IModalAuthorProps> = ({
  authorName,
  setAuthName,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(false);

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
  };

  return visible ? (
    <BackModal>
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
    </BackModal>
  ) : null;
};

export default AuthorModal;
