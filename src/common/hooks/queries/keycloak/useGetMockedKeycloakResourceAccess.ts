import { CustomRole, Role } from "../../../security/model/Role";

export const useGetMockedKeycloakResourceAccess = (): {
  "equipment-manager-fe": { roles: Role[] };
} => {
  return {
    "equipment-manager-fe": {
      roles: [CustomRole.ADMIN],
    },
  };
};
