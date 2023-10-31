import { Route } from "@tanstack/react-router";

import TeamsPage from "../../../../manager/pages/TeamsPage";
import { teams } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

const teamsRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "teams",
  component: () => (
    <RoleAccessPermission allowedRoles={teams.allowedRoles}>
      <TeamsPage />
    </RoleAccessPermission>
  ),
});

export const TEAMSRoute = teamsRoute;
