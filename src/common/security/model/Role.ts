export enum CustomRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}

export enum DefaultRole {
  GUEST = "GUEST",
}

export const { ADMIN, MANAGER } = CustomRole;

export const { GUEST } = DefaultRole;

export type Role = CustomRole | DefaultRole;
