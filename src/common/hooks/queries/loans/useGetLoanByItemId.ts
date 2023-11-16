import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Loan } from "../../../models/loan/Loan";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "loan-by-item-id";

type UseGetLoanQueryOptions = UseQueryOptions<Loan, Error>;

type GetLoanQueryKeyHandler = (itemId: string) => string[];

export const getItemQueryKey: GetLoanQueryKeyHandler = (itemId) => {
  return getQueryKeys([itemId], rootKey);
};

export const useGetLoanByItemId = (
  itemId: string,
  options?: UseGetLoanQueryOptions,
) => {
  const securedAxios = useSecuredAxios();

  return useQuery<Loan, Error>({
    queryKey: getItemQueryKey(itemId),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/loans/${itemId}`)
        .then((response) => response.data as Loan),
    ...options,
  });
};
