import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { User } from "../../../models/user/User";
import { UserFormValues } from "../../../models/user/UserFormValues";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

export const useUserEditMutation = (
  userId: string,
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
          `${getEnvVariable(EnvVariableName.HOST_CORE)}/v1/users/${userId}`,
          user,
          {
            params: { syncRolesToKeycloak },
          },
        )
        .then((response) => response.data as User),
  });
};
