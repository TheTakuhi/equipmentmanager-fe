import { Outlet, Route } from "@tanstack/react-router";

import { ITEMSRoute } from "./items/itemsRoute";
import { LOANSRoute } from "./loans/loansRoute";
import { MYPEOPLERoute } from "./myPeople/myPeopleRoute";
import { TEAMSRoute } from "./teams/teamsRoute";
import { USERSRoute } from "./users/usersRoute";
import { rootRoute } from "../Routes";

export const commonRoutes = new Route({
  getParentRoute: () => rootRoute,
  path: `${import.meta.env.VITE_APP_PUBLIC_URL}/management`,
  component: () => <Outlet />,
});

export const COMMONRoute = commonRoutes.addChildren([
  ITEMSRoute,
  LOANSRoute,
  TEAMSRoute,
  USERSRoute,
  MYPEOPLERoute,
]);
