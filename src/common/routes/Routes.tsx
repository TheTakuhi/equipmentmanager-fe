import { Outlet, RootRoute, Route, Router } from "@tanstack/react-router";

import { COMMONRoute } from "./common/commonRoutes";
import { GUESTRoute } from "./guest/guestRoutes";
import ConnectionLostPage from "../../guest/pages/ConnectionLostPage";
import IndexRouteCheckpoint from "../components/IndexRouteCheckpoint";
import NavbarLayout from "../layouts/NavbarLayout";

export const rootRoute = new RootRoute({
  component: () => (
    <NavbarLayout>
      <Outlet />
    </NavbarLayout>
  ),
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: `${import.meta.env.VITE_APP_PUBLIC_URL}/*`,
  component: () => <IndexRouteCheckpoint />,
});

const noConnectionRoute = new Route({
  getParentRoute: () => rootRoute,
  path: `${import.meta.env.VITE_APP_PUBLIC_URL}/no-connection`,
  component: () => <ConnectionLostPage />,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: `/`,
  validateSearch: (search: Record<string, unknown>) => {
    return search;
  },
  component: () => <IndexRouteCheckpoint />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  GUESTRoute,
  COMMONRoute,
  noConnectionRoute,
  notFoundRoute,
]);

export const router = new Router({ routeTree });
