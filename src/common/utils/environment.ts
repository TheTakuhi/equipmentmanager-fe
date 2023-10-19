import { EnvVariableName, getEnvVariable } from "../config/env/getEnvVariable";

export const inMockedDevEnv = () => {
  const value = getEnvVariable(EnvVariableName.MOCKED, null, false);
  return value && (value === "true" || value === "True" || value === "TRUE");
};
