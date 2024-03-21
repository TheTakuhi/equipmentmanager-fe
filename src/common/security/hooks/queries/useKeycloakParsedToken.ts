import { useKeycloak } from "@react-keycloak/web";
import { KeycloakTokenParsed } from "keycloak-js";

import { useGetMockedKeycloakTokenParsed } from "../../../hooks/queries/keycloak/useGetMockedKeycloakTokenParsed";
import { inMockedDevEnv } from "../../../utils/environment";

export const useKeycloakParsedToken = (): KeycloakTokenParsed => {
  if (inMockedDevEnv()) {
    return useGetMockedKeycloakTokenParsed();
  }
  const { keycloak } = useKeycloak();
  return keycloak.tokenParsed as KeycloakTokenParsed;
};
