import { createContext, useContext } from "react";

import { KeycloakTokenParsed } from "keycloak-js";

export type UserAuthContext = KeycloakTokenParsed | null;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserAuthContext = createContext<UserAuthContext>(null);
export const useUserAuthContext = () => {
  const context = useContext(UserAuthContext) as KeycloakTokenParsed;
  if (!context) {
    throw new Error("useUserAuthContext must be used within UserAuthProvider");
  }
  return context;
};
