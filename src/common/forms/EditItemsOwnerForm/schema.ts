import { object, ObjectSchema, string } from "yup";

import { UserSelectOption } from "../../models/user/UserSelectOption";

export const schema: ObjectSchema<UserSelectOption> = object({
  toUserId: object({
    label: string().required(),
    value: string().required(),
    id: string().required(),
  }).required(),
});
