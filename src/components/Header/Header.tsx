import React, { FunctionComponent, useState } from "react";
import logo from "../../assets/trello.svg";
import userIcon from "../../assets/user-icon.svg";
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
  const [visible, setVisible] = useState(!authName);

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
        <HeaderLogoImg src={logo} alt="logo" />
        <HeaderLogoTxt>Trello</HeaderLogoTxt>
      </HeaderLogo>

      <StyledUserIcon>
        <img
          src={userIcon}
          onClick={() => {
            onUserClick(false);
            openModal(true);
          }}
          alt="userIcon"
        />
      </StyledUserIcon>

      <Modal isOpen={visible} ariaHideApp={false}>
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
