import { object, ObjectSchema, string } from "yup";

import { TeamMemberRequestType } from "./AddMemberForm";

export const schema: ObjectSchema<TeamMemberRequestType> = object({
  member: object().shape({
    value: string().required(),
    label: string().required(),
  }),
});
