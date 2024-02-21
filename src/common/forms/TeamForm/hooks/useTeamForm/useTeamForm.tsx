import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { TeamFormValues } from "../../../../models/team/TeamFormRequestValues";
import { schema } from "../../schema";

export type TeamFormProps = {
  defaultValues?: Partial<TeamFormValues>;
};

export function useTeamForm({ defaultValues }: TeamFormProps) {
  return useForm<TeamFormValues>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
