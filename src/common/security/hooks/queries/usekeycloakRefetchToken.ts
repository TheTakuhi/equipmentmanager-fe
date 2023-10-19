import { useKeycloak } from "@react-keycloak/web";

import { clearKeycloakCache } from "../useMountKeycloak";

export const useKeycloakRefetchToken = () => {
  const { keycloak } = useKeycloak();

  return async () => {
    try {
      const refreshed = await keycloak.updateToken(30);
      console.warn(refreshed ? "session refreshed" : "session active");
    } catch (error) {
      console.warn("session expired");
      await keycloak.logout().then(clearKeycloakCache);
    }
  };
};
