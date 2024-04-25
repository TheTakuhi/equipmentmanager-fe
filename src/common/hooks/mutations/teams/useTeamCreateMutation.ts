import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Team } from "../../../models/team/Team";
import { TeamFormRequestValues } from "../../../models/team/TeamFormRequestValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useTeamCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    Team,
    AxiosError<any, any>,
    TeamFormRequestValues,
    unknown
  >({
    mutationFn: (team: TeamFormRequestValues) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/teams`, team)
        .then((response) => response.data as Team),
  });
};
