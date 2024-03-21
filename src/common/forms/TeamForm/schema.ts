import { array, object, ObjectSchema, string } from "yup";

import { TeamFormValues } from "../../models/team/TeamFormRequestValues";

export const schema: ObjectSchema<TeamFormValues> = object({
  teamName: string().required(),
  owner: object()
    .shape({
      value: string().required(),
      label: string().required(),
    })
    .required(),
  members: array()
    .of(
      object()
        .shape({ label: string().required(), value: string().required() })
        .required(),
    )
    .required(),
});
