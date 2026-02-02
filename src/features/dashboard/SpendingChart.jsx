import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 1 / -1;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 2rem;
`;

function SpendingChart({ data }) {
  return (
    <ChartBox>
      <Title>Spending Over Last 30 Days</Title>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-grey-200)" />
          <XAxis
            dataKey="date"
            tick={{ fill: "var(--color-grey-500)", fontSize: 12 }}
            tickLine={{ stroke: "var(--color-grey-200)" }}
          />
          <YAxis
            tick={{ fill: "var(--color-grey-500)", fontSize: 12 }}
            tickLine={{ stroke: "var(--color-grey-200)" }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-grey-0)",
              border: "1px solid var(--color-grey-200)",
              borderRadius: "8px",
            }}
            formatter={(value) => [`$${value}`, ""]}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            fill="#22c55e"
            fillOpacity={0.3}
            strokeWidth={2}
            name="Income"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.3}
            strokeWidth={2}
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default SpendingChart;
