import { useKeycloak } from "@react-keycloak/web";
import axios, { AxiosInstance } from "axios";

import { useKeycloakRefetchToken } from "./queries/usekeycloakRefetchToken";
import {
  EnvVariableName,
  getEnvVariable,
} from "../../config/env/getEnvVariable";

const cAuthHeader = "Authorization";

export const useSecuredAxios = (): AxiosInstance => {
  const { keycloak } = useKeycloak();
  const refetchToken = useKeycloakRefetchToken();

  const axiosInstance = axios.create({
    baseURL: getEnvVariable(EnvVariableName.HOST_CORE),
  });

  axiosInstance.interceptors.request.use((config: any) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        [cAuthHeader]: `Bearer ${keycloak.token}`,
      },
    };
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) refetchToken();
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
