import { getQueryKeys } from "../utility/getQueryKeys";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { EnvVariableName, getEnvVariable } from "../../../config/env/getEnvVariable";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Team } from "../../../models/team/Team";

const rootKey = "team";

type UseGetTeamQueryOptions = UseQueryOptions<Team, Error>;

type GetTeamQueryKeyHandler = (teamId: string) => string[];

export const getTeamQueryKey: GetTeamQueryKeyHandler = (teamId) => {
  return getQueryKeys([teamId], rootKey);
};

export const useGetTeamById = (
  teamId: string,
  options?: UseGetTeamQueryOptions,
) => {
  const securedAxios = useSecuredAxios();

  return useQuery<Team, Error>({
    queryKey: getTeamQueryKey(teamId),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/teams/${teamId}`)
        .then((response) => response.data as Team),
    ...options,
  });
};
