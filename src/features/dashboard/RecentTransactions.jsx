import styled, { css } from "styled-components";
import { format, parseISO } from "date-fns";

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 2rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.6rem;
  align-items: center;
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Category = styled.span`
  font-weight: 500;
  color: var(--color-grey-700);
  margin-right: 10px;
`;

const Description = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);
`;

const DateText = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-400);
`;

const Amount = styled.span`
  font-weight: 600;

  ${(props) =>
    props.type === "income" &&
    css`
      color: var(--color-green-700);
    `}

  ${(props) =>
    props.type === "expense" &&
    css`
      color: var(--color-red-700);
    `}
`;

const Empty = styled.p`
  color: var(--color-grey-500);
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem;
`;

function RecentTransactions({ transactions }) {
  if (!transactions?.length)
    return (
      <Box>
        <Title>Recent Transactions</Title>
        <Empty>No transactions yet</Empty>
      </Box>
    );

  return (
    <Box>
      <Title>Recent Transactions</Title>
      <List>
        {transactions.map((t) => (
          <Item key={t.id}>
            <div>
              <Category>{t.category}</Category>
              <Description>{t.description || "No description"}</Description>
            </div>
            <DateText>{format(parseISO(t.date), "MMM dd")}</DateText>
            <Amount type={t.type}>
              {t.type === "income" ? "+" : "-"}${Number(t.amount).toFixed(2)}
            </Amount>
          </Item>
        ))}
      </List>
    </Box>
  );
}

export default RecentTransactions;
