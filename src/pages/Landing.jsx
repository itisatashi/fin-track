import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineShieldCheck,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

const LandingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--color-grey-50) 0%,
    var(--color-brand-50) 100%
  );
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  max-width: 120rem;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;

const LogoImg = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: contain;
  object-position: center;
  display: block;
  flex-shrink: 0;
  user-select: none;
  pointer-events: none;
  image-rendering: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const NavLink = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: var(--border-radius-md);
  transition: all 0.3s;

  &.primary {
    background-color: var(--color-brand-600);
    color: white;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }

  &.secondary {
    color: var(--color-grey-600);

    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

const Hero = styled.section`
  text-align: center;
  padding: 8rem 2rem;
  max-width: 80rem;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  color: var(--color-grey-800);
  line-height: 1.2;
  margin-bottom: 2rem;

  span {
    color: var(--color-brand-600);
  }
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  color: var(--color-grey-500);
  margin-bottom: 4rem;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const HeroButton = styled(Link)`
  padding: 1.6rem 3.2rem;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  transition: all 0.3s;

  &.primary {
    background-color: var(--color-brand-600);
    color: white;
    box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);

    &:hover {
      background-color: var(--color-brand-700);
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background-color: white;
    color: var(--color-brand-600);
    border: 2px solid var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-50);
    }
  }
`;

const Features = styled.section`
  padding: 8rem 2rem;
  background-color: white;
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 3.2rem;
  color: var(--color-grey-800);
  margin-bottom: 6rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 3rem;
`;

const FeatureIcon = styled.div`
  width: 7rem;
  height: 7rem;
  background: linear-gradient(
    135deg,
    var(--color-brand-100) 0%,
    var(--color-brand-200) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;

  svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-brand-600);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  color: var(--color-grey-800);
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-500);
  line-height: 1.6;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-500);
  font-size: 1.4rem;
`;

function Landing() {
  return (
    <LandingContainer>
      <Nav>
        <Logo>
          <LogoImg src="./light-logo.png" />
          FinTrack
        </Logo>
        <NavLinks>
          <NavLink to="/login" className="secondary">
            Log in
          </NavLink>
          <NavLink to="/signup" className="primary">
            Sign up free
          </NavLink>
        </NavLinks>
      </Nav>

      <Hero>
        <HeroTitle>
          Take Control of Your <span>Finances</span>
        </HeroTitle>
        <HeroSubtitle>
          Track your income and expenses, visualize your spending habits, and
          make smarter financial decisions. Simple, secure, and free.
        </HeroSubtitle>
        <HeroButtons>
          <HeroButton to="/signup" className="primary">
            Get Started — It's Free
          </HeroButton>
          <HeroButton to="/login" className="secondary">
            I have an account
          </HeroButton>
        </HeroButtons>
      </Hero>

      <Features>
        <FeaturesTitle>Why Choose FinTrack?</FeaturesTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <HiOutlineCreditCard />
            </FeatureIcon>
            <FeatureTitle>Track Everything</FeatureTitle>
            <FeatureDescription>
              Record every income and expense. Categorize transactions to
              understand where your money goes.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <HiOutlineChartBar />
            </FeatureIcon>
            <FeatureTitle>Visual Insights</FeatureTitle>
            <FeatureDescription>
              Beautiful charts show your spending patterns. See your financial
              health at a glance.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <HiOutlineShieldCheck />
            </FeatureIcon>
            <FeatureTitle>Secure & Private</FeatureTitle>
            <FeatureDescription>
              Your data is encrypted and only you can access it. We never share
              your information.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Features>

      <Footer>
        <p>© 2026 FinTrack. Built with ❤️ by Atabek</p>
      </Footer>
    </LandingContainer>
  );
}

export default Landing;
