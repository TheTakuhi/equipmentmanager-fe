import { Outlet, Route } from "@tanstack/react-router";

import { ONEUSERDETAILRoute } from "./user/oneUserDetailRoute";
import { userDetail } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const userDetailRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "user-detail",
  component: () => (
    <RoleAccessPermission allowedRoles={userDetail.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const USERDETAILRoute = userDetailRoute.addChildren([
  ONEUSERDETAILRoute,
]);
