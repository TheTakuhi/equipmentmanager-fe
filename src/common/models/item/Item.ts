import { ItemState } from "./ItemState";
import { ItemType } from "./ItemType";
import { QualityState } from "./QualityState";
import { User } from "../user/User";

export interface Item {
  id: string;
  serialCode: string;
  type: ItemType;
  comment: string;
  state: ItemState;
  qualityState: QualityState;
  creationDate: string;
  owner: User;
}
