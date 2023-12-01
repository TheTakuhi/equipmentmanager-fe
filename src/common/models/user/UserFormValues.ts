import { Role } from "../../security/model/Role";

export interface UserFormValues {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
  userRoles: Role[];
  ownedContractIds: string[];
  managedContractIds: string[];
}
