import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Team } from "../../../models/team/Team";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "teams";

type UseGetTeamsQueryOptions = UseQueryOptions<Team[], Error>;

// TODO implement after BE is done (ID/login/in url/email)
type UseGetTeamsQueryParams = {
  name?: string;
  ownerLogin?: string;
  memberLogin?: string;
};

type GetTeamsQueryKeyHandler = (
  params?: UseGetTeamsQueryParams,
) => (string | undefined)[];

export const getTeamsQueryKey: GetTeamsQueryKeyHandler = (params) => {
  return getQueryKeys(params ?? [], rootKey);
};

export const useGetTeams = (
  params?: UseGetTeamsQueryParams,
  options?: UseGetTeamsQueryOptions,
) => {
  const securedAxios = useSecuredAxios();
  const { ...restParams } = params || {};

  return useQuery<Team[], Error>({
    queryKey: getTeamsQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/teams`, {
          params: { ...restParams },
        })
        .then((response) => response.data as Team[]),
    ...options,
  });
};
