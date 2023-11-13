import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { User } from "../../../models/user/User";
import { UserFormValues } from "../../../models/user/UserFormValues";

export const useUserCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<User, AxiosError<any, any>, UserFormValues, unknown>({
    mutationFn: (loan: UserFormValues) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/loans`, loan)
        .then((response) => response.data as User),
  });
};