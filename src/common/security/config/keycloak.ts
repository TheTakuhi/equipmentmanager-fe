import Keycloak from "keycloak-js";

import {
  EnvVariableName,
  getEnvVariable,
} from "../../config/env/getEnvVariable";

const keycloak = new Keycloak({
  realm: getEnvVariable(EnvVariableName.REALM),
  url: getEnvVariable(EnvVariableName.HOST_IDP),
  clientId: getEnvVariable(EnvVariableName.CLIENT_ID),
});
export default keycloak;
