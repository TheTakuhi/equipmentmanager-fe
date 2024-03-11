import { Role } from "../../security/model/Role";

export type UserCropped = {
  id: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo: string;
  userRoles: Role[];
  removed: boolean;
  teamsIds: string[];
  ownedTeamsIds: string[];
  loansIds: string[];
  ownedItemsIds: string[];
  borrowingsIds: string[];
};
