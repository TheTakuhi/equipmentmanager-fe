import { rest } from "msw";

export const getDeleteTeam = () => {
  return [
    rest.delete("*/teams/:id", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team deleted"),
      );
    }),
  ];
};
