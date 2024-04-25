import { rest } from "msw";

const getAllUserRoles = (): string[] => {
  return ["ADMIN"];
};

export const getMockedAllUserRolesMSW = () => {
  return [
    rest.get("*/v1/users/roles", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - USER ROLES"),
        ctx.json(getAllUserRoles()),
      );
    }),
  ];
};
