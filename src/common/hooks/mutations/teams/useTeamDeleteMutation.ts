import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useTeamDeleteMutation = (teamId: string) => {
  const securedAxios = useSecuredAxios();

  return useMutation<void, AxiosError<any, any>, void, unknown>({
    mutationFn: () =>
      securedAxios
        .delete(`${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/teams/${teamId}`)
        .then((response) => response.data as void),
  });
};
