import { useQuery } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useSecuredAxios } from "../../../security/hooks/useSecuredAxios";

const rootKey = "version-backend";

export const getBackendVersionKey = () => [rootKey];

export const useGetBackendVersion = () => {
  const securedAxios = useSecuredAxios();
  return useQuery<string>({
    queryKey: getBackendVersionKey(),
    queryFn: () =>
      securedAxios
        .get(`${getEnvVariable(EnvVariableName.HOST_CORE)}/actuator/info`)
        .then((response) => response.data.build.version as string),
  });
};
