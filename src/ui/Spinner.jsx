import styled from "styled-components";

const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 6px solid var(--color-brand-200);
  border-top-color: var(--color-brand-600);
  animation: spin 1s linear infinite;
  margin: 4rem auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
