import { UserFormValues } from "../../../../models/user/UserFormValues";
import { CustomRole } from "../../../../security/model/Role";

export const createDefaultValues = (
  defs?: Partial<UserFormValues>,
): UserFormValues => ({
  login: "",
  email: "",
  firstName: "",
  lastName: "",
  userRoles: [CustomRole.MANAGER],
  ...defs,
});
