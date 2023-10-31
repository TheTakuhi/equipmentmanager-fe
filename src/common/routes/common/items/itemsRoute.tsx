import { Route } from "@tanstack/react-router";

import ItemsPage from "../../../../manager/pages/ItemsPage";
import { items } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

const itemsRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "items",
  component: () => (
    <RoleAccessPermission allowedRoles={items.allowedRoles}>
      <ItemsPage />
    </RoleAccessPermission>
  ),
});

export const ITEMSRoute = itemsRoute;
