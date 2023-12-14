import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Team } from "../../../models/team/Team";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useTeamAddMemberMutation = (teamId: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<Team, AxiosError<any, any>, { id: string }>({
    mutationFn: (id) =>
      securedAxios
        .put(`${getEnvVariable(EnvVariableName.HOST_CORE)}/teams/${teamId}`, id)
        .then((response) => response.data as Team),
  });
};
