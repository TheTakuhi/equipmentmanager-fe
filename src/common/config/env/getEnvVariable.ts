export enum EnvVariableName {
  PUBLIC_URL = "PUBLIC_URL",

  HOST_CORE = "HOST_CORE",
  HOST_IDP = "HOST_IDP",
  HOST_APPSHUB = "HOST_APPSHUB",

  REALM = "REALM",
  CLIENT_ID = "CLIENT_ID",

  MOCKED = "MOCKED",
}

export const getEnvVariable = (
  name: EnvVariableName,
  errorCallback?: ((name?: EnvVariableName) => void) | null | undefined,
  throwable = true,
) => {
  const value = import.meta.env[`VITE_APP_${name}`];
  if (!value) {
    if (errorCallback) errorCallback(name);
    else if (throwable)
      throw new Error(
        `Field with name "${name}" is undefined in environment scope.`,
      );
  }
  return value as string;
};
