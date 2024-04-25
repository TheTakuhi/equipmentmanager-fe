import { rest } from "msw";

import { teamsBuilder } from "../../../../mock_builders/TeamsBuilder";

export const putEditTeam = () => {
  return [
    rest.put("*/v1/teams/:id", (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team edited"),
        ctx.json(teamsBuilder.getUserById(req.params.id as string)),
      );
    }),
  ];
};
