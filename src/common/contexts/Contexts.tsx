import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";

import { queryClient } from "../config/react-query/reactQuery";
import KeycloakAuthProvider from "../providers/KeycloakAuthProvider/KeycloakAuthProvider";
import NavbarProvider from "../providers/NavbarProvider";
import { UserAuthProvider } from "../providers/UserAuthProvider/UserAuthProvider";
import { router } from "../routes/Routes";
import { inMockedDevEnv } from "../utils/environment";

import "react-toastify/dist/ReactToastify.min.css";

function Contexts() {
  if (inMockedDevEnv()) {
    return (
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <UserAuthProvider>
            <NavbarProvider>
              <ToastContainer />
              <RouterProvider router={router} />
            </NavbarProvider>
          </UserAuthProvider>
        </QueryClientProvider>
      </StrictMode>
    );
  }
  return (
    <KeycloakAuthProvider>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          {/* TODO find out why ReactQueryDevTools makes queryClient undefined */}
          {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
          <UserAuthProvider>
            <NavbarProvider>
              <ToastContainer />
              <RouterProvider router={router} />
            </NavbarProvider>
          </UserAuthProvider>
        </QueryClientProvider>
      </StrictMode>
    </KeycloakAuthProvider>
  );
}

export default Contexts;
