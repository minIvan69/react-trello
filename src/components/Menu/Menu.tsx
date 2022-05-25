import { FunctionComponent } from "react";
import { HiddenUserMenu, StyledUserMenu } from "./styles";
import { IUserMenuProps } from "./interfaces";
import { useSelector } from "react-redux";
import { selectors } from "../../redux/ducks";

const UserMenu: FunctionComponent<IUserMenuProps> = ({ visible }) => {
  const authorName = useSelector(selectors.authorNames.getAuthorName);

  return visible ? (
    <StyledUserMenu>
      <span>Your author name - {authorName}</span>
    </StyledUserMenu>
  ) : (
    <HiddenUserMenu />
  );
};

export default UserMenu;
