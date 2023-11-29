import { object, ObjectSchema, string } from "yup";

import { ItemFormValues } from "../../models/item/ItemFormValues";

// TODO edit ItemForm schema required-optional-types
export const schema: ObjectSchema<ItemFormValues> = object({
  serialCode: string().required(),
  type: string().optional(),
  comment: string().optional(),
  state: string().optional(),
  qualityState: string().optional(),
  dateOfCreation: string().optional(),
  managerOwner: string().optional(),
});
