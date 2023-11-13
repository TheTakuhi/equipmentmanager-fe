import { TableSearchQuery } from "./useTableSearchForm";

export const createDefaultSearchValues = (
  defs?: TableSearchQuery,
): TableSearchQuery => ({
  param: "",
  value: "",
  ...defs,
});
