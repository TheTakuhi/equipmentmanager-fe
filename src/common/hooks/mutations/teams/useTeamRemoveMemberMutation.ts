import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Team } from "../../../models/team/Team";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useTeamRemoveMemberMutation = (teamId: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<Team, AxiosError<any, any>, any>({
    mutationFn: (id) =>
      securedAxios
        .delete(
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/teams/${teamId}`,
          id,
        )
        .then((response) => response.data as Team),
  });
};
