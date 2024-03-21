import { ItemState } from "../../models/item/ItemState";

export const handleBadgeVariant = (state: ItemState) => {
  switch (state) {
    case ItemState.BORROWED:
      return "info";
    case ItemState.AVAILABLE:
      return "success";
    case ItemState.DISCARDED:
      return "danger";
    default:
      return "info";
  }
};
