import { useQuery, UseQueryResult } from "@tanstack/react-query";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../../config/env/getEnvVariable";
import { getKeycloakKey } from "../../../security/hooks/useMountKeycloak";
import { Role } from "../../../security/model/Role";
import { getMockedUserRole } from "../../../utils/environment";

export const useGetMockedKeycloakResourceAccess = (): UseQueryResult<
  Role[],
  Error
> => {
  const data = {
    "equipment-manager-fe": {
      roles: [getMockedUserRole()],
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
