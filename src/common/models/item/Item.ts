import { ItemState } from "./ItemState";
import { ItemType } from "./ItemType";
import { QualityState } from "./QualityState";
import { Loan } from "../loan/Loan";
import { UserCropped } from "../user/UserCropped";

export interface Item {
  id: string;
  serialCode: string;
  comment: string;
  type: ItemType;
  state: ItemState;
  qualityState: QualityState;
  creationDate: string;
  owner: UserCropped;
  loans: Loan[];
}
