import { CustomRole, Role } from "../../../security/model/Role";

export const useGetMockedKeycloakResourceAccess = (): {
  isLoading: boolean;
  isError: boolean;
  data: Role[];
} => {
  return {
    isLoading: false,
    isError: false,
    data: [CustomRole.ADMIN],
  };
};
