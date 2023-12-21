import { Outlet, Route } from "@tanstack/react-router";

import { AllLOANSRoute } from "./allLoans/allLoansRoute";
import { loans } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const loansRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "loans",
  component: () => (
    <RoleAccessPermission allowedRoles={loans.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const LOANSRoute = loansRoute.addChildren([AllLOANSRoute]);
