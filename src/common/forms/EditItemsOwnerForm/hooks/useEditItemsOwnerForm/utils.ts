import { UserSelectOption } from "../../../../models/user/UserSelectOption";

export const createDefaultValues = (
  defs?: Partial<UserSelectOption>,
): UserSelectOption => ({
  toUserId: { value: "", label: "", id: "" },
  ...defs,
});
