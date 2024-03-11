import { DateTime } from "luxon";

import { LoanFormValues } from "../../../../models/loan/LoanFormValues";

export const createDefaultValues = (
  defs?: Partial<LoanFormValues>,
): LoanFormValues => ({
  loanDate: DateTime.local().toFormat("yyyy-MM-dd"),
  returnDate: "",
  item: { value: "", label: "" },
  borrower: { value: "", label: "" },
  ...defs,
});
