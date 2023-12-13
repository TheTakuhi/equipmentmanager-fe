import { CustomRole } from "../../../security/model/Role";

export const useGetMockedKeycloakResourceAccess = (): {
  "equipment-manager-fe": { roles: CustomRole[] };
} => {
  return {
    "equipment-manager-fe": {
      roles: [CustomRole.ADMIN],
    },
  };
};
