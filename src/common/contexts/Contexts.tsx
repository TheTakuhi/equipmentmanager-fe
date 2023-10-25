import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import UsersPage from "../../admin/pages/UsersPage";
import { queryClient } from "../config/react-query/reactQuery";
import KeycloakAuthProvider from "../providers/KeycloakAuthProvider/KeycloakAuthProvider";
import NavbarProvider from "../providers/NavbarProvider";
import { UserAuthProvider } from "../providers/UserAuthProvider/UserAuthProvider";
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
              <UsersPage />
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
              <h1>Production site</h1>
            </NavbarProvider>
          </UserAuthProvider>
        </QueryClientProvider>
      </StrictMode>
    </KeycloakAuthProvider>
  );
}

export default Contexts;
