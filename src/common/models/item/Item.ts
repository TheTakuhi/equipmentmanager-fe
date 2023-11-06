import { DateTime } from "luxon";

import { User } from "../user/User";

export interface Item {
  id: string;
  serialCode: string;
  type: string[];
  comment: string;
  state: string[];
  qualityState: string[];
  dateOfCreation: DateTime;
  managerOwner: User;
}
