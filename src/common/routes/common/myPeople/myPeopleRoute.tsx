import { Outlet, Route } from "@tanstack/react-router";

import { ALLMyPeopleRoute } from "./allMyPeople/allMyPeopleRoute";
import { MyPeopleRoute } from "./myPeople/myPeopleRoute";
import { myPeople } from "../../../config/links/securedLinks";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";
import { commonRoutes } from "../commonRoutes";

export const myPeopleRoute = new Route({
  getParentRoute: () => commonRoutes,
  path: "my-people",
  component: () => (
    <RoleAccessPermission allowedRoles={myPeople.allowedRoles}>
      <Outlet />
    </RoleAccessPermission>
  ),
});

export const MYPEOPLERoute = myPeopleRoute.addChildren([
  ALLMyPeopleRoute,
  MyPeopleRoute,
]);
