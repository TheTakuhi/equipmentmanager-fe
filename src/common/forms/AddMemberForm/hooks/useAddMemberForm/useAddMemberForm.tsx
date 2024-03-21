import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { TeamMemberRequestType } from "../../AddMemberForm";
import { schema } from "../../schema";

export type AddMemberProps = {
  defaultValues?: TeamMemberRequestType;
};

export function useAddMemberForm({ defaultValues }: AddMemberProps) {
  return useForm<TeamMemberRequestType>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
