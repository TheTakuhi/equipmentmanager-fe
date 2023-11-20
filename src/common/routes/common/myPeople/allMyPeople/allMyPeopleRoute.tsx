import { Route } from "@tanstack/react-router";

import MyPeoplePage from "../../../../../manager/pages/MyPeoplePage";
import { myPeopleRoute } from "../myPeopleRoute";

export const allMyPeopleRoute = new Route({
  getParentRoute: () => myPeopleRoute,
  path: "/",
  component: () => <MyPeoplePage />,
});

export const ALLMyPeopleRoute = allMyPeopleRoute;
