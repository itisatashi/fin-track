import styled, { css } from "styled-components";

const Card = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const IconBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.color === "green" &&
    css`
      background-color: var(--color-green-100);
      & svg {
        color: var(--color-green-700);
      }
    `}

  ${(props) =>
    props.color === "red" &&
    css`
      background-color: var(--color-red-100);
      & svg {
        color: var(--color-red-700);
      }
    `}

  ${(props) =>
    props.color === "purple" &&
    css`
      background-color: var(--color-brand-100);
      & svg {
        color: var(--color-brand-700);
      }
    `}

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Title = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Value = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-grey-800);
`;

function StatCard({ icon, title, value, color }) {
  return (
    <Card>
      <IconBox color={color}>{icon}</IconBox>
      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Content>
    </Card>
  );
}

export default StatCard;
