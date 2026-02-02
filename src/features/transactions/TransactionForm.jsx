import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreateTransaction } from "./useCreateTransaction";
import { useUpdateTransaction } from "./useUpdateTransaction";
import { useCategories } from "./useCategories";
import { useUser } from "../authentication/useUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  height: 8rem;
  resize: none;

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  padding-top: 1.2rem;
`;

function TransactionForm({ transactionToEdit = {}, onCloseModal }) {
  const isEditSession = Boolean(transactionToEdit.id);
  const { id: editId, ...editValues } = transactionToEdit;

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { createTransaction, isCreating } = useCreateTransaction();
  const { updateTransaction, isUpdating } = useUpdateTransaction();
  const { categories } = useCategories();
  const { user } = useUser();

  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    if (isEditSession) {
      updateTransaction(
        { id: editId, ...data, amount: Number(data.amount) },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createTransaction(
        {
          ...data,
          amount: Number(data.amount),
          user_id: user.id,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type="modal">
      <FormRow label="Type" error={errors?.type?.message}>
        <Select
          id="type"
          disabled={isWorking}
          {...register("type", { required: "This field is required" })}
        >
          <option value="">Select type...</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
      </FormRow>

      <FormRow label="Amount" error={errors?.amount?.message}>
        <Input
          type="number"
          id="amount"
          step="0.01"
          disabled={isWorking}
          {...register("amount", {
            required: "This field is required",
            min: { value: 0.01, message: "Amount must be greater than 0" },
          })}
        />
      </FormRow>

      <FormRow label="Category" error={errors?.category?.message}>
        <Select
          id="category"
          disabled={isWorking}
          {...register("category", { required: "This field is required" })}
        >
          <option value="">Select category...</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Date" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isWorking}
          defaultValue={
            isEditSession
              ? editValues.date
              : new window.Date().toISOString().split("T")[0]
          }
          {...register("date", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Description (optional)"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          disabled={isWorking}
          {...register("description")}
        />
      </FormRow>

      <ButtonRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isWorking
            ? "Saving..."
            : isEditSession
              ? "Update Transaction"
              : "Add Transaction"}
        </Button>
      </ButtonRow>
    </Form>
  );
}

export default TransactionForm;
