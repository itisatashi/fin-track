import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TransactionTable from "../features/transactions/TransactionTable";
import TransactionFilter from "../features/transactions/TransactionFilter";
import AddTransaction from "../features/transactions/AddTransaction";

const TransactionsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function Transactions() {
  return (
    <TransactionsLayout>
      <Row type="horizontal">
        <Heading as="h1">Transactions</Heading>
        <AddTransaction />
      </Row>

      <TransactionFilter />

      <TransactionTable />
    </TransactionsLayout>
  );
}

export default Transactions;
