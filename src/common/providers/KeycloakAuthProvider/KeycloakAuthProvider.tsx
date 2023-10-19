import { FC, ReactNode } from "react";

import { Progress } from "@chakra-ui/react";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from "../../security/config/keycloak";

const KeycloakAuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: "login-required",
        checkLoginIframe: false,
      }}
      LoadingComponent={
        <Progress
          isIndeterminate
          size="md"
          colorScheme="facebook"
          sx={{ height: "1rem" }}
        />
      }
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakAuthProvider;
