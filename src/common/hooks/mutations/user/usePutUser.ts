// TODO implement after forms
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";
import { User } from "../../../models/user/User";
import { UserFormValues } from "../../../models/user/UserFormValues";

export const useUserEditMutation = (
  id: string,
  syncRolesToKeycloak?: boolean,
) => {
  const securedAxios = useSecuredAxios();

  return useMutation<
    User,
    AxiosError<any, any>,
    Partial<UserFormValues>,
    unknown
  >({
    mutationFn: (user) =>
      securedAxios
        .put(
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/users/${id}`,
          user,
          {
            params: { syncRolesToKeycloak },
          },
        )
        .then((response) => response.data as User),
  });
};