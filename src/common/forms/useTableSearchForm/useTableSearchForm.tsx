import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";

export type TableSearchQuery = { param: string; value: string };

export type TableSearchFormProps = {
  defaultValues?: TableSearchQuery;
};

export function useTableSearchForm({
  defaultValues,
}: TableSearchFormProps) {
  return useForm<TableSearchQuery>({
    defaultValues: createDefaultValues(defaultValues),
  });
}
