import { object, ObjectSchema, string } from "yup";

export const schema: ObjectSchema<{ id: string }> = object({
  id: string().required(),
});
