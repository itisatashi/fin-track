import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction as createTransactionApi } from "../../services/apiTransactions";
import toast from "react-hot-toast";

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  const { mutate: createTransaction, isPending: isCreating } = useMutation({
    mutationFn: createTransactionApi,
    onSuccess: () => {
      toast.success("Transaction created successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createTransaction, isCreating };
}
