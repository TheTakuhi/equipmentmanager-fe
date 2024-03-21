import { Route } from "@tanstack/react-router";

import GuestPage from "../../../guest/pages/GuestPage";
import RoleAccessPermission from "../../security/components/RoleAccessPermission";
import { DefaultRole } from "../../security/model/Role";
import { rootRoute } from "../Routes";

const guestRoutes = new Route({
  getParentRoute: () => rootRoute,
  path: `${import.meta.env.VITE_APP_PUBLIC_URL}/guest`,
  component: () => (
    <RoleAccessPermission allowedRoles={[DefaultRole.GUEST]}>
      <GuestPage />
    </RoleAccessPermission>
  ),
});

export const GUESTRoute = guestRoutes;
