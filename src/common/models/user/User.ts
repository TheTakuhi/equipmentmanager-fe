import { Role } from "../../security/model/Role";
import { ItemCropped } from "../item/ItemCropped";
import { LoanCropped } from "../loan/LoanCropped";
import { TeamCropped } from "../team/TeamCropped";
import { AuditInfo } from "../utils/AuditInfo";

export interface User {
  id: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo: string;
  userRoles: Role[];
  auditInfo: AuditInfo;
  removed: boolean;
  teams: TeamCropped[];
  ownedTeams: TeamCropped[];
  loans: LoanCropped[];
  borrowings: LoanCropped[];
  ownedItems: ItemCropped[];
}
