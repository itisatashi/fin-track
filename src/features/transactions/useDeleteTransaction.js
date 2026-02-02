import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransaction as deleteTransactionApi } from "../../services/apiTransactions";
import toast from "react-hot-toast";

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  const { mutate: deleteTransaction, isPending: isDeleting } = useMutation({
    mutationFn: deleteTransactionApi,
    onSuccess: () => {
      toast.success("Transaction deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteTransaction, isDeleting };
}
