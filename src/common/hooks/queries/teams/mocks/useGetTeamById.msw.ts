import { rest } from "msw";

import { getTeamMock } from "./utils/getTeamMock";

export const getTeamById = () => {
  return [
    rest.get("*/teams/:id", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team by ID"),
        ctx.json(getTeamMock()),
      );
    }),
  ];
};
