import { DateTime } from "luxon";
import { object, ObjectSchema, ref, string } from "yup";

import { LoanFormValues } from "../../models/loan/LoanFormValues";

export const schema: ObjectSchema<LoanFormValues> = object({
  loanDate: string().required(),
  returnDate: string()
    .optional()
    .test(
      "isReturnDateBeforeLoanDate",
      "Return date must be after loan date",
      function test(value) {
        const loanDate: DateTime = DateTime.fromISO(
          this.resolve(ref("loanDate")),
        );
        return value !== "" ? DateTime.fromISO(value!) >= loanDate : true;
      },
    ),
  item: object().shape({
    value: string().required(),
    label: string().required(),
  }),
  borrower: object().shape({
    value: string().required(),
    label: string().required(),
  }),
});
