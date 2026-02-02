import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CategoryForm from "./CategoryForm";

function AddCategory() {
  return (
    <Modal>
      <Modal.Open opens="add-category">
        <Button>+ Add Category</Button>
      </Modal.Open>
      <Modal.Window name="add-category">
        <CategoryForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCategory;
