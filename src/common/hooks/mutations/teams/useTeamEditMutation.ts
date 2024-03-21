import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Team } from "../../../models/team/Team";
import { TeamFormRequestValues } from "../../../models/team/TeamFormRequestValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useTeamEditMutation = (teamId: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    Team,
    AxiosError<any, any>,
    Partial<TeamFormRequestValues>,
    unknown
  >({
    mutationFn: (team) =>
      securedAxios
        .put(
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/teams/${teamId}`,
          team,
        )
        .then((response) => response.data as Team),
  });
};
