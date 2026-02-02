import styled, { css } from "styled-components";
import { format } from "date-fns";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { useDeleteTransaction } from "./useDeleteTransaction";
import Modal from "../../ui/Modal";
import TransactionForm from "./TransactionForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 0.8fr 1fr 0.8fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Date = styled.span`
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Category = styled.span`
  font-weight: 500;
`;

const Description = styled.span`
  color: var(--color-grey-500);
`;

const TypeBadge = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  ${(props) =>
    props.type === "income" &&
    css`
      color: var(--color-green-700);
      background-color: var(--color-green-100);
    `}

  ${(props) =>
    props.type === "expense" &&
    css`
      color: var(--color-red-700);
      background-color: var(--color-red-100);
    `}
`;

const Amount = styled.span`
  font-weight: 600;
  font-size: 1.5rem;

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

const Actions = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-grey-400);
    transition: all 0.2s;
  }

  &:hover svg {
    color: ${(props) =>
      props.danger ? "var(--color-red-700)" : "var(--color-brand-600)"};
  }
`;

function TransactionRow({ transaction }) {
  const { deleteTransaction, isDeleting } = useDeleteTransaction();

  const { id, date, category, description, type, amount } = transaction;

  const formattedDate = format(new window.Date(date), "MMM dd, yyyy");
  const formattedAmount =
    type === "income" ? `+$${amount.toFixed(2)}` : `-$${amount.toFixed(2)}`;

  return (
    <TableRow role="row">
      <Date>{formattedDate}</Date>
      <Category>{category}</Category>
      <Description>{description || "—"}</Description>
      <TypeBadge type={type}>{type}</TypeBadge>
      <Amount type={type}>{formattedAmount}</Amount>
      <Actions>
        <Modal>
          <Modal.Open opens="edit-transaction">
            <ActionButton title="Edit transaction">
              <HiPencil />
            </ActionButton>
          </Modal.Open>
          <Modal.Window name="edit-transaction">
            <TransactionForm transactionToEdit={transaction} />
          </Modal.Window>
        </Modal>

        <ActionButton
          onClick={() => deleteTransaction(id)}
          disabled={isDeleting}
          title="Delete transaction"
          danger
        >
          <HiTrash />
        </ActionButton>
      </Actions>
    </TableRow>
  );
}

export default TransactionRow;
