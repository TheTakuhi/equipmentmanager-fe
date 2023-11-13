import { DateTime } from "luxon";

import { Item } from "../item/Item";
import { User } from "../user/User";

export interface LoanFormValues {
  dateOfLending: DateTime;
  dateOfReturning: DateTime;
  item: Item;
  lender: User;
}
