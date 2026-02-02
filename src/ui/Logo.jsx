import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

function Logo() {
  return (
    <StyledLogo>
      <LogoIcon src="./light-logo.png" />
      <LogoText>FinTrack</LogoText>
    </StyledLogo>
  );
}

export default Logo;
