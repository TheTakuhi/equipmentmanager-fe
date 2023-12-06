import { FC, ReactNode } from "react";

import { Alert } from "@chakra-ui/react";

import { useKeycloakResourceAccess } from "../../hooks/queries/useKeycloakResourceAccess";
import { Role } from "../../model/Role";
import { EnvVariableName, getEnvVariable } from "../../../config/env/getEnvVariable.ts";

export interface RoleAccessPermissionProps {
  allowedRoles: Role[];
  onDenyCallback?: (message: string) => void;
  onDenyComponent?: ReactNode;
  onlyVisibility?: boolean;
  children?: ReactNode;
}

const RoleAccessPermission: FC<RoleAccessPermissionProps> = ({
  allowedRoles,
  onDenyCallback,
  onDenyComponent,
  onlyVisibility,
  children,
}) => {
  const roles = useKeycloakResourceAccess();

  const equipmentManagerRoles = roles?.[`${getEnvVariable(EnvVariableName.CLIENT_ID)}`]?.roles;

  if (equipmentManagerRoles && equipmentManagerRoles.length > 0) {
    const isAllowed = equipmentManagerRoles.some(role => allowedRoles.includes(role));
    if (isAllowed) {
      return <>{children}</>;
    }
  }

  if (onlyVisibility) return null;

  return (
    <>
      {onDenyCallback && onDenyCallback("Access denied for your authority")}
      {onDenyComponent}
      <Alert status="error" sx={{ py: 4 }}>
        We are sorry, this page is not available for your role
      </Alert>
    </>
  );
};

export default RoleAccessPermission;
