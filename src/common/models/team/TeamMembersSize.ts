import { UserCropped } from "../user/UserCropped";

export type TeamMembersSize = {
  id: string;
  teamName: string;
  owner: UserCropped;
  membersSize: number;
};
