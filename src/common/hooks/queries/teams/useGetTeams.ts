import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Team } from "../../../models/team/Team";
import { Pageable } from "../../../models/utils/Pageable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { getQueryKeys } from "../utility/getQueryKeys";

const rootKey = "teams";

type UseGetTeamsQueryOptions = UseQueryOptions<Pageable<Team>, Error>;

type UseGetTeamsQueryParams = {
  page?: number;
  size?: number;
  sort?: string[];
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

  return useQuery<Pageable<Team>, Error>({
    queryKey: getTeamsQueryKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/teams`, {
          params,
        })
        .then((response) => response.data as Pageable<Team>),
    ...options,
  });
};
