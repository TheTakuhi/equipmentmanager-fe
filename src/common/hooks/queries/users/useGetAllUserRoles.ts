import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

const rootKey = "userRoles";

type UseGetAllUserRolesQueryOptions = UseQueryOptions<string[], Error>;

export const getAllUserRolesQueryKey = () => [rootKey];

export const useGetAllUserRoles = (
  options?: UseGetAllUserRolesQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  return useQuery<string[], Error>({
    queryKey: getAllUserRolesQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users/roles`)
        .then((response) => response.data as string[]),
    ...options,
  });
};
