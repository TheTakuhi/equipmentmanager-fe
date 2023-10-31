import { Route } from "@tanstack/react-router";

import LoansPage from "../../../../manager/pages/LoansPage";
import { loans } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

const loansRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "loans",
  component: () => (
    <RoleAccessPermission allowedRoles={loans.allowedRoles}>
      <LoansPage />
    </RoleAccessPermission>
  ),
});

export const LOANSRoute = loansRoute;
