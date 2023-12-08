import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios.ts";
import { AxiosError } from "axios";
import { EnvVariableName, getEnvVariable } from "../../../config/env/getEnvVariable.ts";
import { useMutation } from "@tanstack/react-query";

export const useUsersSyncMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<AxiosError<any, any>, unknown>({
    mutationFn: () =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users/sync`)
        .then((response) => response.data),
  });
};