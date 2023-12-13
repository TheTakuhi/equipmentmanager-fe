import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useUsersSyncMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<AxiosError<any, any>, unknown>({
    mutationFn: () =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users/sync`)
        .then((response) => response.data),
  });
};
