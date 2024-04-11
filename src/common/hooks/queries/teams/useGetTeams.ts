import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { TeamMembersSize } from "../../../models/team/TeamMembersSize";
import { Pageable, PageableParam } from "../../../models/utils/Pageable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "teams";

type UseGetTeamsQueryOptions = UseQueryOptions<
  Pageable<TeamMembersSize>,
  Error
>;

type UseGetTeamsQueryParams = {
  search?: string;
  pageable?: PageableParam;
};

type GetTeamsQueryKeyHandler = (
  params?: UseGetTeamsQueryParams,
) => (string | number | undefined)[];

export const getTeamsQueryKey: GetTeamsQueryKeyHandler = (params) => {
  return getQueryKeys(params ?? [], rootKey);
};

export const useGetTeams = (
  params?: UseGetTeamsQueryParams,
  options?: UseGetTeamsQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  const { pageable, ...restParams } = params || {};

  return useQuery<Pageable<TeamMembersSize>, Error>({
    queryKey: getTeamsQueryKey(params),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/teams`, {
          params: { ...pageable, ...restParams },
        })
        .then((response) => response.data as Pageable<TeamMembersSize>),
    ...options,
  });
};
