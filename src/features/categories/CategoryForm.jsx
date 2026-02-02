import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreateCategory } from "./useCreateCategory";
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

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  padding-top: 1.2rem;
`;

const emojiOptions = [
  "💰",
  "💻",
  "🍔",
  "🚗",
  "🛒",
  "🎮",
  "📄",
  "🏠",
  "💊",
  "✈️",
  "📚",
  "🎁",
];

function CategoryForm({ onCloseModal }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { createCategory, isCreating } = useCreateCategory();

  function onSubmit(data) {
    createCategory(data, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type="modal">
      <FormRow label="Category Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Type" error={errors?.type?.message}>
        <Select
          id="type"
          disabled={isCreating}
          {...register("type", { required: "This field is required" })}
        >
          <option value="">Select type...</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
      </FormRow>

      <FormRow label="Icon" error={errors?.icon?.message}>
        <Select
          id="icon"
          disabled={isCreating}
          {...register("icon", { required: "This field is required" })}
        >
          <option value="">Select icon...</option>
          {emojiOptions.map((emoji) => (
            <option key={emoji} value={emoji}>
              {emoji}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Color" error={errors?.color?.message}>
        <Input
          type="color"
          id="color"
          defaultValue="#8b5cf6"
          disabled={isCreating}
          {...register("color")}
        />
      </FormRow>

      <ButtonRow>
        <Button
          variation="secondary"
          type="button"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isCreating ? "Adding..." : "Add Category"}
        </Button>
      </ButtonRow>
    </Form>
  );
}

export default CategoryForm;
