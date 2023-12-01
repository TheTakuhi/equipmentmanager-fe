import { UserFormValues } from "../../../../models/user/UserFormValues.ts";
import { CustomRole } from "../../../../security/model/Role.ts";

export const createDefaultValues = (
  defs?: Partial<UserFormValues>,
): UserFormValues => ({
  login: "",
  email: "",
  firstName: "",
  lastName: "",
  photo: "",
  userRoles: [CustomRole.MANAGER],
  ownedContractIds: [],
  managedContractIds: [],
  ...defs,
});
