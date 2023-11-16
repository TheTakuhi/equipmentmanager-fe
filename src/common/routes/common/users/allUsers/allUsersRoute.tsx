import { Route } from "@tanstack/react-router";

import UsersPage from "../../../../../admin/pages/UsersPage";
import { usersRoute } from "../usersRoute";

export const allUsersRoute = new Route({
  getParentRoute: () => usersRoute,
  path: "/",
  component: () => <UsersPage />,
});

export const AllUSERSRoute = allUsersRoute;
