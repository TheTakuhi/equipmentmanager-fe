import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { User } from "../../../models/user/User";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

const rootKey = "currentUser";

type UseGetCurrentUserQueryOptions = UseQueryOptions<User, Error>;

export const getCurrentUserQueryKey = () => [rootKey];

export const useGetCurrentUser = (options?: UseGetCurrentUserQueryOptions) => {
  const securedAxios = useSecuredAxios();
  return useQuery<User, Error>({
    queryKey: getCurrentUserQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/users/current`)
        .then((response) => response.data as User),
    ...options,
  });
};
