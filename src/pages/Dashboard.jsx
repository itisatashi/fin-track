import styled from "styled-components";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Stats from "../features/dashboard/Stats";
import SpendingChart from "../features/dashboard/SpendingChart";
import RecentTransactions from "../features/dashboard/RecentTransactions";
import CategoryBreakdown from "../features/dashboard/CategoryBreakdown";
import { useStats } from "../features/dashboard/useStats";

const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
`;

const FullWidthBox = styled.div`
  grid-column: 1 / -1;
`;

function Dashboard() {
  const {
    isLoading,
    balance,
    totalIncome,
    totalExpenses,
    chartData,
    recentTransactions,
    categoryBreakdown,
  } = useStats();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading as="h1">Dashboard</Heading>
      <DashboardLayout>
        <FullWidthBox>
          <Stats
            balance={balance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
        </FullWidthBox>

        <SpendingChart data={chartData} />

        <RecentTransactions transactions={recentTransactions} />

        <CategoryBreakdown data={categoryBreakdown} />
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
