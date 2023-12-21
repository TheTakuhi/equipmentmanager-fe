import { object, ObjectSchema, string } from "yup";

import { LoanFormValues } from "../../models/loan/LoanFormValues";

export const schema: ObjectSchema<LoanFormValues> = object({
  dateOfLending: string().required(),
  dateOfReturning: string().optional(),
  itemId: string().required(),
  borrowerId: string().required(),
});
