import { object, ObjectSchema, string } from "yup";

import { ItemFormValues } from "../../models/item/ItemFormValues";

export const schema: ObjectSchema<ItemFormValues> = object({
  serialCode: string().required(),
  type: string().optional(),
  comment: string().optional(),
  qualityState: string().optional(),
  managerOwner: string().required(),
});
