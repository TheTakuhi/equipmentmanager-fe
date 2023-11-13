import { Item } from "../item/Item";
import { User } from "../user/User";

export interface Loan {
  id: string;
  dateOfLending: string;
  dateOfReturning: string;
  item: Item;
  lender: User;
}
