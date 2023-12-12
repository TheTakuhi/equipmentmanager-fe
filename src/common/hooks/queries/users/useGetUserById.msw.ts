import { rest } from "msw";

import { User } from "../../../models/user/User";
import { DefaultRole } from "../../../security/model/Role";

const getMockedUsers = (): User[] => {
  return [
    {
      id: "123",
      login: "getbyid",
      email: "user@by.id",
      firstName: "first",
      lastName: "last",
      fullName: "full",
      photo: "",
      userRoles: [DefaultRole.GUEST],
      ownedContractIds: ["123"],
      managedContractIds: [""],
    },
  ];
};

const getMockedUserByIdResponse = (userId: string): User => {
  const ret = [...getMockedUsers()].filter((o) => o.id === userId)[0];
  return ret;
};

export const getUserById = () => {
  return [
    rest.get("*/users/:userId", (_req, res, ctx) => {
      const { userId } = _req.params;
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User by ID"),
        ctx.json(getMockedUserByIdResponse(userId as string)),
      );
    }),
  ];
};
