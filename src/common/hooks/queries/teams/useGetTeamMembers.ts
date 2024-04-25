import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { User } from "../../../models/user/User";
import { Pageable, PageableParam } from "../../../models/utils/Pageable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../getQueryKeys";

const rootKey = "team-members";

type QueryOptions = UseQueryOptions<Pageable<User>, Error>;

type QueryParams = {
  search?: string;
  pageable?: PageableParam;
};

type QueryKeyHandler = (
  id: string,
  params?: QueryParams,
) => (string | number | undefined)[];

export const getTeamMembersQueryKey: QueryKeyHandler = (id, params) => {
  return getQueryKeys([id, ...Object.values(params ?? [])], rootKey);
};

export const useGetTeamMembers = (
  id: string,
  params?: QueryParams,
  options?: QueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  const { pageable, ...restParams } = params || {};

  return useQuery<Pageable<User>, Error>({
    queryKey: getTeamMembersQueryKey(id, params),
    queryFn: () =>
      securedAxios
        .get(
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/teams/${id}/members`,
          { params: { ...pageable, ...restParams } },
        )
        .then((response) => response.data as Pageable<User>),
    ...options,
  });
};
