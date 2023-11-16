import { Outlet, Route } from "@tanstack/react-router";

import { AllITEMSRoute } from "./allItems/allItemsRoute";
import { ITEMRoute } from "./item/itemRoute";
import { items } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const itemsRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "items",
  component: () => (
    <RoleAccessPermission allowedRoles={items.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const ITEMSRoute = itemsRoute.addChildren([AllITEMSRoute, ITEMRoute]);
