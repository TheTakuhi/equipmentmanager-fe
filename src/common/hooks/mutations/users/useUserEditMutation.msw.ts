import { rest } from "msw";

import { User } from "../../../models/user/User";
import { CustomRole } from "../../../security/model/Role";

const getMockedEditUserResponse = (): User => {
  return {
    id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
    personalNumber: "123456",
    ldapId: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
    login: "theshrek",
    email: "shrek@swamp.ffa",
    firstName: "Shrek",
    lastName: "Joe",
    fullName: "Joe Shrek E",
    photo: "",
    userRoles: [CustomRole.ADMIN],
    ownedContractIds: [""],
    managedContractIds: [""],
  };
};

export const putEditUser = () => {
  return [
    rest.put("*/users/:userId", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User edited"),
        ctx.json(getMockedEditUserResponse()),
      );
    }),
  ];
};
