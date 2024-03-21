import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { UserFormValues } from "../../../../models/user/UserFormValues";
import { schema } from "../../schema";

export type UserFormProps = {
  defaultValues?: Partial<UserFormValues>;
};

export function useUserForm({ defaultValues }: UserFormProps) {
  return useForm<UserFormValues>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
