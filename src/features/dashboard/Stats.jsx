import styled from "styled-components";
import {
  HiOutlineBanknotes,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowTrendingDown,
} from "react-icons/hi2";
import StatCard from "./StatCard";

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function Stats({ balance, totalIncome, totalExpenses }) {
  return (
    <StatsContainer>
      <StatCard
        icon={<HiOutlineBanknotes />}
        title="Total Balance"
        value={formatCurrency(balance)}
        color="purple"
      />
      <StatCard
        icon={<HiOutlineArrowTrendingUp />}
        title="Total Income"
        value={formatCurrency(totalIncome)}
        color="green"
      />
      <StatCard
        icon={<HiOutlineArrowTrendingDown />}
        title="Total Expenses"
        value={formatCurrency(totalExpenses)}
        color="red"
      />
    </StatsContainer>
  );
}

export default Stats;
