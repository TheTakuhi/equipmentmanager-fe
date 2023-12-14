import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { schema } from "../../schema";

export type AddMemberProps = {
  defaultValues?: { id: string };
};

export function useAddMemberForm({ defaultValues }: AddMemberProps) {
  return useForm<{ id: string }>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
