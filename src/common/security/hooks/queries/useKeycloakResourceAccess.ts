import { useKeycloak } from "@react-keycloak/web";
import { KeycloakResourceAccess } from "keycloak-js";

import { useGetMockedKeycloakResourceAccess } from "../../../hooks/queries/keycloak/useGetMockedKeycloakResourceAccess";
import { inMockedDevEnv } from "../../../utils/environment";
import { Role } from "../../model/Role";

export type KeycloakExtendedResourceAccess = KeycloakResourceAccess & {
  [key: string]: { roles: Role[] } | undefined;
};

export const useKeycloakResourceAccess = () => {
  if (inMockedDevEnv()) {
    return useGetMockedKeycloakResourceAccess();
  }
  const { keycloak } = useKeycloak();
  return keycloak.resourceAccess as KeycloakExtendedResourceAccess;
};
