import { Role } from "../../security/model/Role";

export interface UserFormValues {
  personalNumber: string;
  ldapId: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo: string;
  userRoles: Role[];
  ownedContractIds: string[];
  managedContractIds: string[];
}
