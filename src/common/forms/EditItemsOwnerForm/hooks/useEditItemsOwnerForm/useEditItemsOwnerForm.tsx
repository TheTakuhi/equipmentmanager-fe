import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { UserSelectOption } from "../../../../models/user/UserSelectOption";
import { schema } from "../../schema";

export type EditItemsOwnerProps = {
  defaultValues?: Partial<UserSelectOption>;
};

export function useEditItemsOwnerForm({ defaultValues }: EditItemsOwnerProps) {
  return useForm<UserSelectOption>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
