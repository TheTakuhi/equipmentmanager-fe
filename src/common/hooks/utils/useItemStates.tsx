import { ItemState } from "../../models/item/ItemState";
import { SelectOption } from "../../models/utils/SelectOption";

export const useItemStates = () => {
  const itemStates: SelectOption[] = [
    ...Object.values(ItemState).map((v) => {
      return { value: v, label: v.toLowerCase() };
    }),
  ];

  return { itemStates };
};
