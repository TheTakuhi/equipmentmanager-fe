import { ItemCropped } from "../item/ItemCropped";
import { UserCropped } from "../user/UserCropped";

export interface Loan {
  id: string;
  item: ItemCropped;
  borrower: UserCropped;
  lender: UserCropped;
  loanDate: string;
  returnDate: string | null;
}
