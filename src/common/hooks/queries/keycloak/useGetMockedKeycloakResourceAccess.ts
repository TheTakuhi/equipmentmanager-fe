import { useQuery, UseQueryResult } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { getKeycloakKey } from "../../../security/hooks/useMountKeycloak";
import { CustomRole, Role } from "../../../security/model/Role";

export const useGetMockedKeycloakResourceAccess = (): UseQueryResult<
  Role[],
  Error
> => {
  const data = {
    "equipment-manager-fe": {
      roles: [CustomRole.ADMIN],
    },
  };

  const queryKey = "keycloakResourceAccess";
  const realmId = getEnvVariable(EnvVariableName.CLIENT_ID);

  const getKeycloakResourceAccessKey = () => [
    ...getKeycloakKey(),
    queryKey,
    realmId,
  ];

  return useQuery<Role[]>({
    queryKey: getKeycloakResourceAccessKey(),
    queryFn: () => data["equipment-manager-fe"]?.roles || [],
  });
};

// export const useGetMockedKeycloakResourceAccess = (): {
//   "equipment-manager-fe": { roles: Role[] };
// } => {
//   return {
//     "equipment-manager-fe": {
//       roles: [CustomRole.ADMIN],
//     },
//   };
// };
