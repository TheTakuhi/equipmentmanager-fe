import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { queryClient } from "../../../config/react-query/reactQuery";
import { Loan } from "../../../models/loan/Loan";
import { LoanCreateDTO } from "../../../models/loan/LoanCreateDTO";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { toastOptions } from "../../../utils/toastOptions";

export const useLoanCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<Loan, AxiosError<any, any>, LoanCreateDTO, unknown>({
    mutationFn: (loan: LoanCreateDTO) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/loans`, loan)
        .then((response) => response.data as Loan),
    onSuccess: () => {
      toast.success("Loan created", toastOptions);
      queryClient.invalidateQueries();
    },
    onError: (error) =>
      toast.error(
        error.response?.data.message ?? "An error has occurred",
        toastOptions,
      ),
  });
};
