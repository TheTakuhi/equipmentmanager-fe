import { Route } from "@tanstack/react-router";

import { myPeopleRoute } from "../myPeopleRoute";
import UserDetailPage from "../../../../../admin/pages/UserDetailPage";

export const peopleRoute = new Route({
  getParentRoute: () => myPeopleRoute,
  path: "$userId",
  component: () => <UserDetailPage />,
});

export const MyPeopleRoute = peopleRoute;
