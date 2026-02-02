import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import TransactionForm from "./TransactionForm";

function AddTransaction() {
  return (
    <Modal>
      <Modal.Open opens="add-transaction">
        <Button>+ Add Transaction</Button>
      </Modal.Open>
      <Modal.Window name="add-transaction">
        <TransactionForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddTransaction;
