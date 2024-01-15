import { FC, ReactNode } from "react";

import { Alert } from "@chakra-ui/react";

import { useKeycloakResourceAccess } from "../../hooks/queries/useKeycloakResourceAccess";
import { Role } from "../../model/Role";

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
  const { data: roles } = useKeycloakResourceAccess();
  const checkedRoles = roles?.length ? [...roles] : [];

  if (checkedRoles.some((role) => allowedRoles.includes(role)))
    return <>{children}</>;

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
