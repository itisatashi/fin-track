import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const StyledUpdatePasswordForm = styled.div``;

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: () => reset() });
  }

  return (
    <StyledUpdatePasswordForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="New password (min 8 chars)"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            id="password"
            autoComplete="new-password"
            disabled={isUpdating}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Confirm password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            autoComplete="new-password"
            disabled={isUpdating}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>

        <FormRow>
          <Button type="reset" variation="secondary" onClick={reset}>
            Cancel
          </Button>
          <Button disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update password"}
          </Button>
        </FormRow>
      </Form>
    </StyledUpdatePasswordForm>
  );
}

export default UpdatePasswordForm;
