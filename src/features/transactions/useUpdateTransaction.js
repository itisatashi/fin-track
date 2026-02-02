import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTransaction as updateTransactionApi } from "../../services/apiTransactions";
import toast from "react-hot-toast";

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  const { mutate: updateTransaction, isPending: isUpdating } = useMutation({
    mutationFn: updateTransactionApi,
    onSuccess: () => {
      toast.success("Transaction updated successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateTransaction, isUpdating };
}
