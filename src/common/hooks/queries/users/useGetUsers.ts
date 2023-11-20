import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { User } from "../../../models/user/User";
import { Pageable, PageableParam } from "../../../models/utils/Pageable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { Role } from "../../../security/model/Role";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "users";

type UseGetUsersQueryOptions = UseQueryOptions<Pageable<User>, Error>;

type UseGetUsersQueryParams = {
  userRoles?: Role;
  login?: string;
  fullName?: string;
  includeRemoved?: boolean;
  pageable?: PageableParam;
  managerLogin?: string;
};

type GetUsersQueryKeyHandler = (
  params?: UseGetUsersQueryParams,
) => (string | boolean | undefined)[];

export const getUsersQueryKey: GetUsersQueryKeyHandler = (params) => {
  return getQueryKeys(params ?? [], rootKey);
};

export const useGetUsers = (
  params?: UseGetUsersQueryParams,
  options?: UseGetUsersQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  const { pageable, ...restParams } = params || {};

  return useQuery<Pageable<User>, Error>({
    queryKey: getUsersQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users`, {
          params: { ...pageable, ...restParams },
        })
        .then((response) => response.data as Pageable<User>),
    ...options,
  });
};
