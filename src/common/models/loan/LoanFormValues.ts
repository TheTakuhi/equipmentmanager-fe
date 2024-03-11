import { SelectOption } from "../utils/SelectOption";

export interface LoanFormValues {
  loanDate: string;
  returnDate?: string;
  item: SelectOption;
  borrower: SelectOption;
}
