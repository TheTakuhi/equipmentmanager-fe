import { useForm } from "react-hook-form";

import { createDefaultSearchValues } from "./utils";

export type TableSearchQuery = { param: string; value: string };

export type TableSearchFormProps = {
  defaultValues?: TableSearchQuery;
};

export function useTableSearchForm({ defaultValues }: TableSearchFormProps) {
  return useForm<TableSearchQuery>({
    defaultValues: createDefaultSearchValues(defaultValues),
  });
}
