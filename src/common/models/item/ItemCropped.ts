import { ItemState } from "./ItemState";
import { ItemType } from "./ItemType";
import { QualityState } from "./QualityState";

export type ItemCropped = {
  id: string;
  serialCode: string;
  comment: string;
  type: ItemType;
  state: ItemState;
  qualityState: QualityState;
  creationDate: string;
  ownerId: string;
  loansId: string[];
};
