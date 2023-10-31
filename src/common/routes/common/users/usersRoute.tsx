import { Route } from "@tanstack/react-router";

import UsersPage from "../../../../admin/pages/UsersPage";
import { users } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

const usersRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "users",
  component: () => (
    <RoleAccessPermission allowedRoles={users.allowedRoles}>
      <UsersPage />
    </RoleAccessPermission>
  ),
});

export const USERSRoute = usersRoute;
