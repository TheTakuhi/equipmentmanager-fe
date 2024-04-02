import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

type UseUsersSyncQueryOptions = UseQueryOptions<undefined, Error>;

export const useUsersSync = (options?: UseUsersSyncQueryOptions) => {
  const securedAxios = useSecuredAxios();

  return useQuery<undefined, Error>({
    queryKey: [],
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users/sync`)
        .then((response) => response.data),
    ...options,
  });
};
