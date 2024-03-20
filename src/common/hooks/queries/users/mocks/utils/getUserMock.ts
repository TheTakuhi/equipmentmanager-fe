import { getUserBasicInfoMock } from "./getUserBasicInfoMock";
import { User } from "../../../../../models/user/User";

export const getUserMock = (): User => ({
  ...getUserBasicInfoMock(),
  loans: [],
  borrowings: [],
  ownedItems: [],
  teams: [],
  ownedTeams: [],
  auditInfo: {
    createdAt: "2024-01-01",
    createdBy: "SYSTEM",
    lastModifiedAt: "2024-01-01",
    lastModifiedBy: "SYSTEM",
  },
});

export const getUsersMock = (numUsers: number): User[] =>
  Array.from({ length: numUsers }, getUserMock);
