import React from "react";
import { AppHeader, HeaderLogo, HeaderLogoImg, HeaderLogoTxt } from "./styles";

function Header() {
  return (
    <AppHeader>
      <HeaderLogo>
        <HeaderLogoImg>
          <img src="public/assets/trello-logo.svg" alt="logo" />
        </HeaderLogoImg>
        <HeaderLogoTxt>Trello</HeaderLogoTxt>
      </HeaderLogo>
    </AppHeader>
  );
}

export default Header;
