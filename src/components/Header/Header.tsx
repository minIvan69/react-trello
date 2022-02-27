import React, { FunctionComponent, useState } from "react";
import { Menu, AuthorModal } from "..";
import { IHeaderProps } from "./interfaces";
import {
  AppHeader,
  HeaderLogo,
  HeaderLogoImg,
  HeaderLogoTxt,
  StyledUserIcon,
} from "./styles";
import Modal from "react-modal";

const Header: FunctionComponent<IHeaderProps> = ({ authName, setAuthName }) => {
  const [visible, setVisible] = useState(authName === undefined ? true : false);

  const [visibleUser, setVisibleUser] = useState(true);

  const onUserClick = (item: boolean) => {
    setVisibleUser(item);
  };

  const openModal = (item: boolean) => {
    setVisible(item);
    setVisibleUser(true);
  };
  return (
    <AppHeader>
      <HeaderLogo>
        <HeaderLogoImg>
          <img src="public/assets/trello-logo.svg" alt="logo" />
        </HeaderLogoImg>
        <HeaderLogoTxt>Trello</HeaderLogoTxt>
      </HeaderLogo>

      <StyledUserIcon>
        <img
          src="img/user-icon.svg"
          onClick={() => {
            onUserClick(false);
            openModal(true);
          }}
        />
      </StyledUserIcon>

      <Modal isOpen={visible}>
        <AuthorModal
          authorName={authName}
          visibleModal={openModal}
          setAuthName={setAuthName}
        />
      </Modal>
      <Menu visible={visibleUser} authorName={authName} />
    </AppHeader>
  );
};

export default Header;
