import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { AxiosError } from "axios";
import { EnvVariableName, getEnvVariable } from "../../../config/env/getEnvVariable";
import { useMutation } from "@tanstack/react-query";
import { TeamFormValues } from "../../../models/team/TeamFormValues";
import { Team } from "../../../models/team/Team";

export const useTeamCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<Team, AxiosError<any, any>, TeamFormValues, unknown>({
    mutationFn: (team: TeamFormValues) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/teams`, team)
        .then((response) => response.data as Team),
  });
};
