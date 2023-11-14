import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { User } from "../../../models/user/User";
import { UserFormValues } from "../../../models/user/UserFormValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useUserCreateMutation = () => {
  const securedAxios = useSecuredAxios();

  return useMutation<User, AxiosError<any, any>, UserFormValues, unknown>({
    mutationFn: (user: UserFormValues) =>
      securedAxios
        .post(`${getEnvVariable(EnvVariableName.HOST_CORE)}/users`, user)
        .then((response) => response.data as User),
  });
};
