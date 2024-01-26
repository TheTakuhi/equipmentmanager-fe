import { ItemFormValues } from "../../../../models/item/ItemFormValues";

export const createDefaultValues = (
  defs?: Partial<ItemFormValues>,
): ItemFormValues => ({
  serialCode: "",
  type: { value: "", label: "" },
  comment: "",
  qualityState: { value: "", label: "" },
  ownerId: { value: "", label: "", id: "" },
  ...defs,
});
