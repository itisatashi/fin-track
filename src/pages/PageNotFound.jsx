import styled from "styled-components";

const StyledPageNotFound = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <h1>404</h1>
      <p>Page not found 😢</p>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
