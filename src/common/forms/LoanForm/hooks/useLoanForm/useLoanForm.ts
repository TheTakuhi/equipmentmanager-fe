import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { createDefaultValues } from "./utils";
import { LoanFormValues } from "../../../../models/loan/LoanFormValues";
import { schema } from "../../schema";

export type LoanFormProps = {
  defaultValues?: Partial<LoanFormValues>;
};

export function useLoanForm({ defaultValues }: LoanFormProps) {
  return useForm<LoanFormValues>({
    resolver: yupResolver(schema),
    defaultValues: createDefaultValues(defaultValues),
  });
}
