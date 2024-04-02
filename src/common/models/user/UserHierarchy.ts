export type UserHierarchy = {
  id: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo: string;
};

export type UserHierarchyWithManager = UserHierarchy & {
  manager: UserHierarchyWithManager | null;
};
