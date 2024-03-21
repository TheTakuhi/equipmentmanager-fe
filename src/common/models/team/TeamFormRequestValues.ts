import { SelectOption } from "../utils/SelectOption";

export interface TeamFormRequestValues {
  teamName: string;
  ownerId: string;
  membersIds: string[];
}

export interface TeamFormValues {
  teamName: string;
  owner: SelectOption;
  members: SelectOption[];
}
