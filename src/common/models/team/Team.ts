import { User } from "../user/User";
import { UserCropped } from "../user/UserCropped";

export interface Team {
  id: string;
  teamName: string;
  owner: UserCropped;
  members: User[];
}
