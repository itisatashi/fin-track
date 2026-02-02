import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getTransactions } from "../../services/apiTransactions";

export function useTransactions() {
  const [searchParams] = useSearchParams();

  // Get filter values from URL
  const filterType = searchParams.get("type") || "all";
  const filterCategory = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sortBy") || "date-desc";

  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions", filterType, filterCategory, sortBy],
    queryFn: () => getTransactions({ filterType, filterCategory, sortBy }),
  });

  return { transactions, isLoading, error };
}
