import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { UserHierarchyWithManager } from "../../../models/user/UserHierarchy";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../getQueryKeys";

const rootKey = "users-hierarchy";

type UseGetUsersHierarchyQueryOptions = UseQueryOptions<
  UserHierarchyWithManager,
  Error
>;

type GetUsersHierarchyQueryKeyHandler = (userId: string) => string[];

export const getUsersHierarchyQueryKey: GetUsersHierarchyQueryKeyHandler = (
  userId: string,
) => {
  return getQueryKeys([userId], rootKey);
};

export const useGetUsersHierarchy = (
  userId: string,
  options?: UseGetUsersHierarchyQueryOptions,
) => {
  const securedAxios = useSecuredAxios();

  return useQuery<UserHierarchyWithManager, Error>({
    queryKey: getUsersHierarchyQueryKey(userId),
    queryFn: () =>
      securedAxios
        .get(
          `${getEnvVariable(
            EnvVariableName.HOST_CORE,
          )}/v1/users/${userId}/hierarchy`,
        )
        .then((response) => response.data as UserHierarchyWithManager),
    ...options,
  });
};
