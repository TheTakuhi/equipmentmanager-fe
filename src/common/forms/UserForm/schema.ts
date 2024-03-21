import { array, object, ObjectSchema, string } from "yup";

import { UserFormValues } from "../../models/user/UserFormValues";

export const schema: ObjectSchema<UserFormValues> = object({
  login: string().required(),
  email: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  userRoles: array().of(string().required()).required(),
});
