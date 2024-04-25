import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { queryClient } from "../../../config/react-query/reactQuery";
import { Loan } from "../../../models/loan/Loan";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { toastOptions } from "../../../utils/toastOptions";

export const useLoanPatchMutation = (loanId: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    Loan,
    AxiosError<any, any>,
    { returnDate: string },
    unknown
  >({
    mutationFn: ({ returnDate }) =>
      securedAxios
        .patch(
          `${getEnvVariable(
            EnvVariableName.HOST_CORE,
          )}/v1/loans/${loanId}/${returnDate}`,
        )
        .then((response) => response.data as Loan),
    onSuccess: () => {
      toast.success("Item returned", toastOptions);
      queryClient.invalidateQueries();
    },
    onError: (error) =>
      toast.error(
        error.response?.data.message ?? "An error has occurred",
        toastOptions,
      ),
  });
};
