import { object, ObjectSchema, string } from "yup";

import { ItemFormValues } from "../../models/item/ItemFormValues";

export const schema: ObjectSchema<ItemFormValues> = object({
  serialCode: string().required(),
  comment: string().optional(),
  type: object({
    label: string().required(),
    value: string().required(),
  }).required(),
  qualityState: object({
    label: string().required(),
    value: string().required(),
  }).required(),
  ownerId: object({
    label: string().required(),
    value: string().required(),
  }).required(),
  state: string().optional(),
});
