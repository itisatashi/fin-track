import styled from "styled-components";

const SpinnerMini = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid var(--color-brand-200);
  border-top-color: var(--color-brand-600);
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerMini;
