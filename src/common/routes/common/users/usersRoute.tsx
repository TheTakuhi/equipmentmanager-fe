import { Outlet, Route } from "@tanstack/react-router";

import { AllUSERSRoute } from "./allUsers/allUsersRoute";
import { users } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const usersRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "users",
  component: () => (
    <RoleAccessPermission allowedRoles={users.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const USERSRoute = usersRoute.addChildren([AllUSERSRoute]);
