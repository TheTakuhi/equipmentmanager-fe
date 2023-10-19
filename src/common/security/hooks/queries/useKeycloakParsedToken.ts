import { useKeycloak } from "@react-keycloak/web";
import { useQuery } from "@tanstack/react-query";
import { KeycloakTokenParsed } from "keycloak-js";

import { getKeycloakKey } from "../useMountKeycloak";

const rootKey = "keycloak-parsed-token";

export const getKeycloakParsedTokenKey = () => [getKeycloakKey(), rootKey];

export const useKeycloakParsedToken = () => {
  const { keycloak } = useKeycloak();
  return useQuery<KeycloakTokenParsed>(
    getKeycloakParsedTokenKey(),
    () => keycloak.tokenParsed as KeycloakTokenParsed,
  );
};
