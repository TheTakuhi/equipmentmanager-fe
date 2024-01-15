import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";

import { queryClient } from "../config/react-query/reactQuery";
import ActionDialogProvider from "../providers/ActionDialogProvider";
import ActiveRolesProvider from "../providers/ActiveRolesProvider";
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
          <ActiveRolesProvider>
            <UserAuthProvider>
              <ActionDialogProvider>
                <NavbarProvider>
                  <ToastContainer />
                  <RouterProvider router={router} />
                </NavbarProvider>
              </ActionDialogProvider>
            </UserAuthProvider>
          </ActiveRolesProvider>
        </QueryClientProvider>
      </StrictMode>
    );
  }
  return (
    <KeycloakAuthProvider>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ActiveRolesProvider>
            <UserAuthProvider>
              <ActionDialogProvider>
                <NavbarProvider>
                  <ToastContainer />
                  <RouterProvider router={router} />
                </NavbarProvider>
              </ActionDialogProvider>
            </UserAuthProvider>
          </ActiveRolesProvider>
        </QueryClientProvider>
      </StrictMode>
    </KeycloakAuthProvider>
  );
}

export default Contexts;
