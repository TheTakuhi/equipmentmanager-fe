import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { ItemFormValues } from "../../../../models/item/ItemFormValues";
import { schema } from "../../schema";

export type ItemFormProps = {
  defaultValues?: Partial<ItemFormValues>;
};

export function useItemForm({ defaultValues }: ItemFormProps) {
  return useForm<ItemFormValues>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
