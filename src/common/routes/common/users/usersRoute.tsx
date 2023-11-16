import { Outlet, Route } from "@tanstack/react-router";

import { AllUSERSRoute } from "./allUsers/allUsersRoute";
import { USERRoute } from "./user/userRoute";
import { users } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const usersRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "my-people",
  component: () => (
    <RoleAccessPermission allowedRoles={users.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const USERSRoute = usersRoute.addChildren([AllUSERSRoute, USERRoute]);
