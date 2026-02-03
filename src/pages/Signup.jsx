import styled from "styled-components";
import { Link } from "react-router-dom";
import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 52rem;
  align-content: center;
  justify-content: center;
  background-color: var(--color-grey-50);
  padding: 4rem 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 4rem;
`;

const LoginLink = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  margin-top: 2rem;
  margin-top: 5rem;

  a {
    color: var(--color-brand-600);
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Signup() {
  return (
    <SignupLayout>
      <Logo to="/" transform="Y" />
      <Heading>Create your account</Heading>
      <SignupForm />
      <LoginLink>
        Already have an account? <Link to="/login">Log in</Link>
      </LoginLink>
    </SignupLayout>
  );
}

export default Signup;
