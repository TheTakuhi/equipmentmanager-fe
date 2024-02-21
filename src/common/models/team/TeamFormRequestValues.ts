import { SelectOption } from "../utils/SelectOption";

export interface TeamFormRequestValues {
  teamName: string;
  ownerId: string;
  // TODO - membersIds after dto update on BE
  memberIds: string[];
}

export interface TeamFormValues {
  teamName: string;
  owner: SelectOption;
  members: SelectOption[];
}
