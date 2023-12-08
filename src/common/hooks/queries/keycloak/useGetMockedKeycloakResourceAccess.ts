import { CustomRole, Role } from "../../../security/model/Role";

export const useGetMockedKeycloakResourceAccess = (): Role[] => {
  return {
    'equipment-manager-fe': {
      roles: [CustomRole.ADMIN],
    },
  };
};
