import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  background-color: var(--color-grey-50);
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

const Heading = styled.h4`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 4rem;
`;

const SignupLink = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  margin-top: 5rem;
  a {
    color: var(--color-brand-600);
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo to="/" transform="Y" />
      <Heading>Log in to your account</Heading>
      <LoginForm />
      <SignupLink>
        Don't have an account? <Link to="/signup">Sign up for free</Link>
      </SignupLink>
    </LoginLayout>
  );
}

export default Login;
