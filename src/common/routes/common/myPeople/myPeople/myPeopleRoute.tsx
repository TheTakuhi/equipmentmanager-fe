import { Route } from "@tanstack/react-router";

import ItemDetailPage from "../../../../../manager/pages/ItemDetailPage";
import { myPeopleRoute } from "../myPeopleRoute";

// TODO CHANGE TO USERDETAILPAGE
export const peopleRoute = new Route({
  getParentRoute: () => myPeopleRoute,
  path: "$userId",
  component: () => <ItemDetailPage />,
});

export const MyPeopleRoute = peopleRoute;
