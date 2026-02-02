import styled from "styled-components";
import { useTransactions } from "./useTransactions";
import TransactionRow from "./TransactionRow";
import Spinner from "../../ui/Spinner";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 0.8fr 1fr 0.8fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

function TransactionTable() {
  const { transactions, isLoading } = useTransactions();

  if (isLoading) return <Spinner />;

  if (!transactions?.length)
    return <Empty>No transactions found. Add your first one!</Empty>;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Date</div>
        <div>Category</div>
        <div>Description</div>
        <div>Type</div>
        <div>Amount</div>
        <div></div>
      </TableHeader>
      {transactions.map((transaction) => (
        <TransactionRow key={transaction.id} transaction={transaction} />
      ))}
    </Table>
  );
}

export default TransactionTable;
