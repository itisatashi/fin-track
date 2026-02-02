import styled, { css } from "styled-components";
import { Link } from "react-router";

const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.transformY === "Y" &&
    css`
      margin-top: 5rem;
    `}
`;

const LogoIcon = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  object-position: center;
  display: block;
  flex-shrink: 0;
  user-select: none;
  pointer-events: none;
  image-rendering: auto;
`;

const LogoText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-brand-600);
  transform: translateY(-15px);
`;

function Logo({ to, transformY }) {
  return (
    <StyledLogo to={to} transformY={transformY}>
      <LogoIcon src="./light-logo.png" />
      <LogoText>FinTrack</LogoText>
    </StyledLogo>
  );
}

export default Logo;
