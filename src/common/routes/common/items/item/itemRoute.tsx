import { Route } from "@tanstack/react-router";

import ItemDetailPage from "../../../../../manager/pages/ItemDetailPage";
import { itemsRoute } from "../itemsRoute";

export const itemRoute = new Route({
  getParentRoute: () => itemsRoute,
  path: "$itemId",
  component: () => <ItemDetailPage />,
});

export const ITEMRoute = itemRoute;
