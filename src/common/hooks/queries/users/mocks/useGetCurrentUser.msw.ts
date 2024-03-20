import { rest } from "msw";

import { User } from "../../../../models/user/User";
import { getMockedUserRole } from "../../../../utils/environment";

const getMockedCurrentUser = (): User => {
  return {
    id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
    login: "theshrek",
    email: "shrek@swamp.ffa",
    firstName: "Shrek",
    lastName: "Swamply",
    fullName: "Swamply",
    photo: "",
    userRoles: [getMockedUserRole()],
    auditInfo: {
      createdAt: "2024-01-01",
      createdBy: "SYSTEM",
      lastModifiedAt: "2024-01-01",
      lastModifiedBy: "SYSTEM",
    },
    ownedTeams: [],
    teams: [],
    ownedItems: [],
    borrowings: [],
    loans: [],
    removed: false,
  };
};

export const getCurrentUserMSW = () => {
  return [
    rest.get("*/users/current", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status"),
        ctx.json(getMockedCurrentUser()),
      );
    }),
  ];
};
