import { Route } from "@tanstack/react-router";

import { usersRoute } from "../usersRoute";
import UserDetailPage from "../../../../../admin/pages/UserDetailPage";

export const userRoute = new Route({
  getParentRoute: () => usersRoute,
  path: "$userId",
  component: () => <UserDetailPage />,
});

export const USERRoute = userRoute;
