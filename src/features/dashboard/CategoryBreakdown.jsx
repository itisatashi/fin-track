import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 2rem;
`;

const COLORS = [
  "#8b5cf6",
  "#22c55e",
  "#ef4444",
  "#f59e0b",
  "#3b82f6",
  "#ec4899",
  "#6b7280",
];

const Empty = styled.p`
  color: var(--color-grey-500);
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem;
`;

function CategoryBreakdown({ data }) {
  if (!data?.length)
    return (
      <Box>
        <Title>Spending by Category</Title>
        <Empty>No expense data yet</Empty>
      </Box>
    );

  return (
    <Box>
      <Title>Spending by Category</Title>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            nameKey="category"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, ""]}
            contentStyle={{
              backgroundColor: "var(--color-grey-0)",
              border: "1px solid var(--color-grey-200)",
              borderRadius: "8px",
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => (
              <span style={{ color: "var(--color-grey-600)" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default CategoryBreakdown;
