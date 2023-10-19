import { useKeycloak } from "@react-keycloak/web";
import { useQuery } from "@tanstack/react-query";
import { KeycloakProfile } from "keycloak-js";

import { getKeycloakKey } from "../useMountKeycloak";

const rootKey = "keycloak-profile";

export const getKeycloakUserProfile = () => [getKeycloakKey(), rootKey];

export const useCurrentUserQuery = () => {
  const { keycloak } = useKeycloak();
  return useQuery<KeycloakProfile>(getKeycloakUserProfile(), () =>
    keycloak.loadUserProfile().then((response) => response),
  );
};
