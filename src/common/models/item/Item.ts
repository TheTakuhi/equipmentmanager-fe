import { DateTime } from "luxon";

import { ItemType } from "./ItemType";
import { QualityState } from "./QualityState";
import { State } from "./State";
import { User } from "../user/User";

export interface Item {
  id: string;
  serialCode: string;
  type: ItemType;
  comment: string;
  state: State;
  qualityState: QualityState;
  dateOfCreation: DateTime;
  managerOwner: User;
}
