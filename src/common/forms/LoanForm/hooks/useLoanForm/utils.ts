import { DateTime } from "luxon";

import { LoanFormValues } from "../../../../models/loan/LoanFormValues";

export const createDefaultValues = (
  defs?: Partial<LoanFormValues>,
): LoanFormValues => ({
  dateOfLending: DateTime.local().toFormat("yyyy-MM-dd"),
  dateOfReturning: "",
  itemId: "",
  borrowerId: "",
  ...defs,
});
