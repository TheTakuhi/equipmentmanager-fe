import { Route } from "@tanstack/react-router";

import UserDetailPage from "../../../../../admin/pages/UserDetailPage";
import { usersRoute } from "../usersRoute";

export const userRoute = new Route({
  getParentRoute: () => usersRoute,
  path: "$userId",
  component: () => <UserDetailPage />,
});

export const USERRoute = userRoute;
