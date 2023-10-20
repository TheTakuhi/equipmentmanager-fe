import { useKeycloak } from "@react-keycloak/web";
import { useQuery } from "@tanstack/react-query";
import { KeycloakTokenParsed } from "keycloak-js";

import { useGetMockedKeycloakTokenParsed } from "../../../hooks/queries/keycloak/useGetMockedKeycloakTokenParsed";
import { inMockedDevEnv } from "../../../utils/environment";
import { getKeycloakKey } from "../useMountKeycloak";

const rootKey = "keycloak-parsed-token";

export const getKeycloakParsedTokenKey = () => [getKeycloakKey(), rootKey];

export const useKeycloakParsedToken = () => {
  if (inMockedDevEnv()) {
    return useGetMockedKeycloakTokenParsed();
  }
  const { keycloak } = useKeycloak();
  return useQuery<KeycloakTokenParsed>(
    getKeycloakParsedTokenKey(),
    () => keycloak.tokenParsed as KeycloakTokenParsed,
  );
};
