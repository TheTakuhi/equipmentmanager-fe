import { Role } from "../../security/model/Role";

export interface KeycloakUser {
  ldapId: string;
  keycloakId: string;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  personalNumber: string;
  photo: string;
  userRoles: Role[];
}
