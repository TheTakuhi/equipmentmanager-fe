import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Loan } from "../../../models/loan/Loan";
import { LoanFormValues } from "../../../models/loan/LoanFormValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useLoanCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<Loan, AxiosError<any, any>, LoanFormValues, unknown>({
    mutationFn: (loan: LoanFormValues) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/loans`, loan)
        .then((response) => response.data as Loan),
  });
};
