import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

const LandingContainer = styled.div`
  min-height: 100vh;
  background-color: var(--color-grey-0);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  max-width: 140rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImg = styled.img`
  height: 4.8rem;
  width: auto;
`;

const LogoText = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  padding: 1rem 2.4rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 10rem;
  transition: all 0.3s;

  &.primary {
    background-color: var(--color-brand-600);
    color: white;

    &:hover {
      background-color: var(--color-brand-700);
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background-color: var(--color-grey-200);
    color: var(--color-grey-600);

    &:hover {
      background-color: var(--color-grey-300);
      color: var(--color-brand-600);
    }
  }
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10rem 2rem 12rem;
  background: radial-gradient(
    ellipse at top,
    var(--color-brand-50) 0%,
    var(--color-grey-0) 70%
  );
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background-color: var(--color-brand-100);
  color: var(--color-brand-700);
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 10rem;
  margin-bottom: 2.4rem;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 5.6rem;
  font-weight: 800;
  color: var(--color-grey-900);
  line-height: 1.1;
  margin-bottom: 2rem;
  max-width: 70rem;

  @media (max-width: 768px) {
    font-size: 3.6rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(
    135deg,
    var(--color-brand-500) 0%,
    var(--color-brand-700) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-500);
  margin-bottom: 4rem;
  line-height: 1.7;
  max-width: 55rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const HeroButton = styled(Link)`
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 1.2rem;
  transition: all 0.3s;

  &.primary {
    background: linear-gradient(
      135deg,
      var(--color-brand-500) 0%,
      var(--color-brand-700) 100%
    );
    color: white;
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(124, 58, 237, 0.45);
    }
  }

  &.secondary {
    background-color: var(--color-grey-200);

    color: var(--color-grey-700);

    &:hover {
      background-color: var(--color-grey-300);
    }
  }
`;

const Features = styled.section`
  padding: 8rem 2rem 10rem;
  max-width: 120rem;
  margin: 0 auto;
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const FeaturesLabel = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-brand-600);
  margin-bottom: 1.2rem;
`;

const FeaturesTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: var(--color-grey-900);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 3rem;
`;

const FeatureCard = styled.div`
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: 1.6rem;
  padding: 3.2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    border-color: var(--color-brand-200);
  }
`;

const FeatureIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background: linear-gradient(
    135deg,
    var(--color-brand-100) 0%,
    var(--color-brand-200) 100%
  );
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--color-brand-600);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-500);
  line-height: 1.7;
`;

const CTA = styled.section`
  background: linear-gradient(
    135deg,
    var(--color-brand-600) 0%,
    var(--color-brand-800) 100%
  );
  padding: 8rem 2rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.6rem;
`;

const CTASubtitle = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3.2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.6rem 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: white;
  color: var(--color-brand-600);
  border-radius: 1.2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 2rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-500);
  font-size: 1.4rem;
  border-top: 1px solid var(--color-grey-100);
`;

function Landing() {
  return (
    <LandingContainer>
      <Nav>
        <Logo to="/">
          <LogoImg src="./light-logo.png" alt="FinTrack" />
          <LogoText>FinTrack</LogoText>
        </Logo>
        <NavLinks>
          <NavLink to="/login" className="secondary">
            Log in
          </NavLink>
          <NavLink to="/signup" className="primary">
            Get Started
          </NavLink>
        </NavLinks>
      </Nav>

      <Hero>
        <Badge>
          <HiOutlineSparkles />
          Free forever for personal use
        </Badge>
        <HeroTitle>
          Master Your Money with <Highlight>FinTrack</Highlight>
        </HeroTitle>
        <HeroSubtitle>
          The simplest way to track your income and expenses. Get insights into
          your spending habits and make smarter financial decisions.
        </HeroSubtitle>
        <HeroButtons>
          <HeroButton to="/signup" className="primary">
            Start Tracking Free
          </HeroButton>
          <HeroButton to="/login" className="secondary">
            I have an account
          </HeroButton>
        </HeroButtons>
      </Hero>

      <Features>
        <FeaturesHeader>
          <FeaturesLabel>Features</FeaturesLabel>
          <FeaturesTitle>Everything you need to manage money</FeaturesTitle>
        </FeaturesHeader>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <HiOutlineCreditCard />
            </FeatureIcon>
            <FeatureTitle>Track Transactions</FeatureTitle>
            <FeatureDescription>
              Record every income and expense. Add categories, descriptions, and
              dates to keep everything organized.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <HiOutlineChartBar />
            </FeatureIcon>
            <FeatureTitle>Visual Dashboard</FeatureTitle>
            <FeatureDescription>
              See your financial health at a glance with beautiful charts and
              real-time statistics.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <HiOutlineShieldCheck />
            </FeatureIcon>
            <FeatureTitle>Secure & Private</FeatureTitle>
            <FeatureDescription>
              Your data is encrypted and stored securely. Only you can access
              your financial information.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Features>

      <CTA>
        <CTATitle>Ready to take control?</CTATitle>
        <CTASubtitle>
          Join now and start tracking your finances in minutes.
        </CTASubtitle>
        <CTAButton to="/signup">Create Free Account</CTAButton>
      </CTA>

      <Footer>
        <p>© 2026 FinTrack · Built with ❤️ by Atabek</p>
      </Footer>
    </LandingContainer>
  );
}

export default Landing;
