import { Route } from "@tanstack/react-router";

import ItemDetailPage from "../../../../../manager/pages/ItemDetailPage";
import { usersRoute } from "../usersRoute";

export const userRoute = new Route({
  getParentRoute: () => usersRoute,
  path: "$userId",
  component: () => <ItemDetailPage />,
});

export const USERRoute = userRoute;
