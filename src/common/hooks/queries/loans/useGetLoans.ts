import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Loan } from "../../../models/loan/Loan";
import { Pageable, PageableParam } from "../../../models/utils/Pageable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "loans";

type UseGetLoansQueryOptions = UseQueryOptions<Pageable<Loan>, Error>;

type UseGetLoansQueryParams = {
  includeRemoved?: boolean;
  pageable?: PageableParam;
  user?: string;
  item?: string;
};

type GetLoansQueryKeyHandler = (
  params?: UseGetLoansQueryParams,
) => (string | boolean | undefined)[];

export const getLoansQueryKey: GetLoansQueryKeyHandler = (params) => {
  return getQueryKeys(params ?? [], rootKey);
};

export const useGetLoans = (
  params?: UseGetLoansQueryParams,
  options?: UseGetLoansQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  const { pageable, ...restParams } = params || {};

  return useQuery<Pageable<Loan>, Error>({
    queryKey: getLoansQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/loans`, {
          params: { ...pageable, ...restParams },
        })
        .then((response) => response.data as Pageable<Loan>),
    ...options,
  });
};
