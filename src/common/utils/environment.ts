import { EnvVariableName, getEnvVariable } from "../config/env/getEnvVariable";
import { CustomRole, DefaultRole } from "../security/model/Role";

export const inMockedDevEnv = () => {
  const value = getEnvVariable(
    EnvVariableName.MOCKED,
    null,
    false,
  ).toUpperCase();
  return value && value === "TRUE";
};

export const getMockedUserRole = (): CustomRole | DefaultRole => {
  if (
    Object.values(CustomRole).find(
      (r: string) =>
        r === getEnvVariable(EnvVariableName.MOCKED_USER_ROLE).toUpperCase(),
    )
  )
    return <CustomRole>getEnvVariable(EnvVariableName.MOCKED_USER_ROLE);

  return DefaultRole.GUEST;
};
