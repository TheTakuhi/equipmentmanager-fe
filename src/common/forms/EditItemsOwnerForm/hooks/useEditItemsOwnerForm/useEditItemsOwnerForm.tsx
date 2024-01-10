import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { schema } from "../../schema";

export type EditItemsOwnerProps = {
  defaultValues?: { id: string };
};

export function useEditItemsOwnerForm({ defaultValues }: EditItemsOwnerProps) {
  return useForm<{ id: string }>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
