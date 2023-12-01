import { array, object, ObjectSchema, string } from "yup";
import { UserFormValues } from "../../models/user/UserFormValues.ts";

// TODO edit UserForm schema required-optional
export const schema: ObjectSchema<UserFormValues> = object({
  login: string().required(),
  email: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  photo: string().optional(),
  userRoles: array().of(string().required()).required(),
  ownedContractIds: array().of(string().optional()).optional(),
  managedContractIds: array().of(string().optional()).optional(),
});
