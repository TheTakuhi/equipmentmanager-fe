import { rest } from "msw";

export const getDeleteUser = () => {
  return [
    rest.delete("*/v1/users/:id", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - User deleted"),
      );
    }),
  ];
};
