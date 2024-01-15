import { useKeycloakResourceAccess } from "../../security/hooks/queries/useKeycloakResourceAccess";
import { DefaultRole } from "../../security/model/Role";

const CheckedRoutes = () => {
  const { data: roles } = useKeycloakResourceAccess();
  return roles?.filter((role) => role !== DefaultRole.GUEST) || [];
};

export default CheckedRoutes;
