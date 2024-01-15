import { useKeycloak } from "@react-keycloak/web";
import { useQuery } from "@tanstack/react-query";
import { KeycloakResourceAccess } from "keycloak-js";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { useGetMockedKeycloakResourceAccess } from "../../../hooks/queries/keycloak/useGetMockedKeycloakResourceAccess";
import { inMockedDevEnv } from "../../../utils/environment";
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

// TODO REFACTOR SO IT DOESNT BREAK RULES OF HOOKS
export const useKeycloakResourceAccess = () => {
  if (inMockedDevEnv()) {
    return useGetMockedKeycloakResourceAccess();
  }

  const { keycloak } = useKeycloak();
  return useQuery<Role[]>({
    queryKey: getKeycloakResourceAccessKey(),
    queryFn: () =>
      (keycloak.resourceAccess as KeycloakExtendedResourceAccess)[realmId]
        ?.roles || [],
  });
};
