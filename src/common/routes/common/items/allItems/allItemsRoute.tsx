import { Route } from "@tanstack/react-router";

import ItemsPage from "../../../../../manager/pages/ItemsPage";
import { itemsRoute } from "../itemsRoute";

export const allItemsRoute = new Route({
  getParentRoute: () => itemsRoute,
  path: "/",
  component: () => <ItemsPage />,
});

export const AllITEMSRoute = allItemsRoute;
