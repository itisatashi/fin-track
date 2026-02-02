import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

const SettingsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Section = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 1.6rem;
`;

function Settings() {
  return (
    <>
      <Heading as="h1">Settings</Heading>

      <SettingsLayout>
        <Section>
          <SectionTitle>Update Your Account</SectionTitle>
          <UpdateUserDataForm />
        </Section>

        <Section>
          <SectionTitle>Update Password</SectionTitle>
          <UpdatePasswordForm />
        </Section>
      </SettingsLayout>
    </>
  );
}

export default Settings;
