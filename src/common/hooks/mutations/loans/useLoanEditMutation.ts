// TODO implement after forms
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Loan } from "../../../models/loan/Loan";
import { LoanFormValues } from "../../../models/loan/LoanFormValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useLoanEditMutation = (
  loanId: string,
  syncRolesToKeycloak?: boolean,
) => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    Loan,
    AxiosError<any, any>,
    Partial<LoanFormValues>,
    unknown
  >({
    mutationFn: (loan) =>
      securedAxios
        .put(
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/loans/${loanId}`,
          loan,
          {
            params: { syncRolesToKeycloak },
          },
        )
        .then((response) => response.data as Loan),
  });
};
