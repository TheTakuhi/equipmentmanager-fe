import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "@tanstack/react-router";
import axios, { AxiosInstance } from "axios";

import { useKeycloakRefetchToken } from "./queries/usekeycloakRefetchToken";
import {
  EnvVariableName,
  getEnvVariable,
} from "../../config/env/getEnvVariable";
import { noConnectionRoute } from "../../routes/Routes";
import { inMockedDevEnv } from "../../utils/environment";

const cAuthHeader = "Authorization";

export const useSecuredAxios = (): AxiosInstance => {
  if (inMockedDevEnv()) {
    const axiosInstance = axios.create({
      baseURL: getEnvVariable(EnvVariableName.HOST_CORE),
    });
    return axiosInstance;
  }

  const { keycloak } = useKeycloak();
  const refetchToken = useKeycloakRefetchToken();
  const navigate = useNavigate();

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
      if (error.response?.status === 401) {
        refetchToken();
      } else if (
        error.code === "ERR_NETWORK" ||
        error?.response?.status === 503
      )
        navigate({ to: noConnectionRoute.id, replace: true });
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
