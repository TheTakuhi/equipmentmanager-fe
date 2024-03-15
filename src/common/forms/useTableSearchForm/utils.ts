import { TableSearchQuery } from "./useTableSearchForm";

export const createDefaultValues = (
  defs?: TableSearchQuery,
): TableSearchQuery => ({
  param: "",
  value: "",
  ...defs,
});
