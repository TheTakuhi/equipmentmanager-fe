import { Route } from "@tanstack/react-router";

import UserDetailPage from "../../../../../admin/pages/UserDetailPage";
import { userDetailRoute } from "../userDetailRoute";

export const oneUserDetailRoute = new Route({
  getParentRoute: () => userDetailRoute,
  path: "$userDetailId",
  component: () => <UserDetailPage />,
});

export const ONEUSERDETAILRoute = oneUserDetailRoute;
