import { useKeycloak } from "@react-keycloak/web";
import { useQuery } from "@tanstack/react-query";
import { KeycloakResourceAccess } from "keycloak-js";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { Role } from "../../model/Role";
import { getKeycloakKey } from "../useMountKeycloak";

const realmId = getEnvVariable(EnvVariableName.CLIENT_ID);

export type KeycloakExtendedResourceAccess = KeycloakResourceAccess & {
  [key: string]: { roles: Role[] } | undefined;
};

const rootKey = "keycloak-resource-access";

export const getKeycloakResourceAccessKey = () => [
  ...getKeycloakKey(),
  rootKey,
  realmId,
];

export const useKeycloakResourceAccess = () => {
  const { keycloak } = useKeycloak();
  return useQuery<Role[]>(
    getKeycloakResourceAccessKey(),
    () =>
      (keycloak.resourceAccess as KeycloakExtendedResourceAccess)[realmId]
        ?.roles || [],
  );
};
