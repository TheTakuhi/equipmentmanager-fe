import { Route } from "@tanstack/react-router";

import ItemDetailPage from "../../../../../manager/pages/ItemDetailPage";
import { itemDetailRoute } from "../itemDetailRoute";

export const oneItemDetailRoute = new Route({
  getParentRoute: () => itemDetailRoute,
  path: "$itemDetailId",
  component: () => <ItemDetailPage />,
});

export const ONEITEMDETAILRoute = oneItemDetailRoute;
