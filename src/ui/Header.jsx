import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <Logout />
        </li>
      </HeaderMenu>
    </StyledHeader>
  );
}

export default Header;
