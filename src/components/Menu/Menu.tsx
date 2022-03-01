import { FunctionComponent } from "react";
import { HiddenUserMenu, StyledUserMenu } from "./styles";
import { IUserMenuProps } from "./interfaces";

const UserMenu: FunctionComponent<IUserMenuProps> = ({
  visible,
  authorName,
}) => {
  return visible ? (
    <StyledUserMenu>
      <span>Your author name - {authorName}</span>
    </StyledUserMenu>
  ) : (
    <HiddenUserMenu />
  );
};

export default UserMenu;
