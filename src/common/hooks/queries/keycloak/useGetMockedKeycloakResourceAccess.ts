import { CustomRole, Role } from "../../../security/model/Role";

export const useGetMockedKeycloakResourceAccess = (): Role[] => {
  return {
    data: [CustomRole.ADMIN],
  };
};
