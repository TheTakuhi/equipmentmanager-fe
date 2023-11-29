import { ItemFormValues } from "../../../../models/item/ItemFormValues";

export const createDefaultValues = (
  defs?: Partial<ItemFormValues>,
): ItemFormValues => ({
  serialCode: "",
  type: "",
  comment: "",
  state: "",
  qualityState: "",
  dateOfCreation: "",
  managerOwner: "",
  ...defs,
});
