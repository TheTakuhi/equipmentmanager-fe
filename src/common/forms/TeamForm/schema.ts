import { array, object, ObjectSchema, string } from "yup";

import { TeamFormValues } from "../../models/team/TeamFormValues";

export const schema: ObjectSchema<TeamFormValues> = object({
  teamName: string().required(),
  owner: string().required(),
  members: array().of(string().required()).required(),
});
