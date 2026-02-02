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
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 4rem 0;
`;

// const Logo = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
// `;

// const LogoIcon = styled.span`
//   font-size: 4rem;
// `;

// const LogoText = styled.h1`
//   font-size: 3rem;
//   font-weight: 700;
//   color: var(--color-brand-600);
// `;

const Heading = styled.h4`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-700);
`;

const LoginLink = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: var(--color-grey-500);

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
      <Logo />
      <Heading>Create your account</Heading>
      <SignupForm />
      <LoginLink>
        Already have an account? <Link to="/login">Log in</Link>
      </LoginLink>
    </SignupLayout>
  );
}

export default Signup;
