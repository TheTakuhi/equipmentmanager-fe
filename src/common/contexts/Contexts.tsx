import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import UsersPage from "../../admin/pages/UsersPage";
import { queryClient } from "../config/react-query/reactQuery";
import KeycloakAuthProvider from "../providers/KeycloakAuthProvider/KeycloakAuthProvider";
import { UserAuthProvider } from "../providers/UserAuthProvider/UserAuthProvider";
import { inMockedDevEnv } from "../utils/environment";

function Contexts() {
  if (inMockedDevEnv()) {
    return (
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <UserAuthProvider>
            <UsersPage />
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
            <h1>Production site</h1>
          </UserAuthProvider>
        </QueryClientProvider>
      </StrictMode>
    </KeycloakAuthProvider>
  );
}

export default Contexts;
