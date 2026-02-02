import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";
import {
  subDays,
  format,
  eachDayOfInterval,
  isSameDay,
  parseISO,
} from "date-fns";

export function useStats() {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions", "all", "all", "date-desc"],
    queryFn: () =>
      getTransactions({
        filterType: "all",
        filterCategory: "all",
        sortBy: "date-desc",
      }),
  });

  // Calculate stats
  const totalIncome =
    transactions
      ?.filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  const totalExpenses =
    transactions
      ?.filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  const balance = totalIncome - totalExpenses;

  // Get last 30 days for chart
  const last30Days = eachDayOfInterval({
    start: subDays(new Date(), 29),
    end: new Date(),
  });

  const chartData = last30Days.map((day) => {
    const dayTransactions =
      transactions?.filter((t) => isSameDay(parseISO(t.date), day)) || [];

    const income = dayTransactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const expenses = dayTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    return {
      date: format(day, "MMM dd"),
      income,
      expenses,
    };
  });

  // Get recent transactions (last 5)
  const recentTransactions = transactions?.slice(0, 5) || [];

  // Category breakdown for expenses
  const categoryBreakdown =
    transactions
      ?.filter((t) => t.type === "expense")
      .reduce((acc, t) => {
        const existing = acc.find((item) => item.category === t.category);
        if (existing) {
          existing.value += Number(t.amount);
        } else {
          acc.push({ category: t.category, value: Number(t.amount) });
        }
        return acc;
      }, []) || [];

  return {
    isLoading,
    balance,
    totalIncome,
    totalExpenses,
    chartData,
    recentTransactions,
    categoryBreakdown,
  };
}
