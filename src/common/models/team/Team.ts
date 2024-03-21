import { User } from "../user/User";

export interface Team {
  id: string;
  teamName: string;
  owner: User;
  members: User[];
}
