import { SelectOption } from "../utils/SelectOption";

export interface ItemFormValues {
  serialCode: string;
  comment?: string;
  type: SelectOption;
  qualityState: SelectOption;
  ownerId: SelectOption;
  state?: string;
}
