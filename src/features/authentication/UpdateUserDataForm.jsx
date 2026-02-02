import { useState } from "react";
import styled from "styled-components";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const StyledUpdateUserDataForm = styled.div`
  margin-bottom: 2rem;
`;

function UpdateUserDataForm() {
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const currentFullName = user?.user_metadata?.fullName || "";
  const email = user?.email;

  const [fullName, setFullName] = useState(currentFullName);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName },
      {
        onSuccess: () => {
          e.target.reset();
        },
      },
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
  }

  return (
    <StyledUpdateUserDataForm>
      <Form onSubmit={handleSubmit}>
        <FormRow label="Email address">
          <Input value={email} disabled />
        </FormRow>

        <FormRow label="Full name">
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
            disabled={isUpdating}
          />
        </FormRow>

        <FormRow>
          <Button type="reset" variation="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update account"}
          </Button>
        </FormRow>
      </Form>
    </StyledUpdateUserDataForm>
  );
}

export default UpdateUserDataForm;
