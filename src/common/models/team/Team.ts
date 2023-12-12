import { User } from "../user/User.ts";

export interface Team {
    id: string;
    teamName: string; // TODO check with BE name
    owner: User;
    members: User[];
}
