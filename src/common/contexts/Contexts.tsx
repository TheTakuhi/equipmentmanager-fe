import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import UsersPage from "../../admin/pages/UsersPage";
import { queryClient } from "../config/react-query/reactQuery";
import KeycloakAuthProvider from "../providers/KeycloakAuthProvider/KeycloakAuthProvider";
import { UserAuthProvider } from "../providers/UserAuthProvider/UserAuthProvider";

function Contexts() {
  return (
    <KeycloakAuthProvider>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
          <UserAuthProvider>
            <UsersPage />
          </UserAuthProvider>
        </QueryClientProvider>
      </StrictMode>
    </KeycloakAuthProvider>
  );
}

export default Contexts;
