import { Route } from "@tanstack/react-router";

import LoansPage from "../../../../../manager/pages/LoansPage";
import { loansRoute } from "../loansRoute";

export const allLoansRoute = new Route({
  getParentRoute: () => loansRoute,
  path: "/",
  component: () => <LoansPage />,
});

export const AllLOANSRoute = allLoansRoute;
