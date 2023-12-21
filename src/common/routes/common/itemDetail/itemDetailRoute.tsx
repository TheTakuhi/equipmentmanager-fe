import { Outlet, Route } from "@tanstack/react-router";

import { ONEITEMDETAILRoute } from "./item/oneItemDetailRoute";
import { userDetail } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const itemDetailRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "item-detail",
  component: () => (
    <RoleAccessPermission allowedRoles={userDetail.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const ITEMDETAILRoute = itemDetailRoute.addChildren([
  ONEITEMDETAILRoute,
]);
