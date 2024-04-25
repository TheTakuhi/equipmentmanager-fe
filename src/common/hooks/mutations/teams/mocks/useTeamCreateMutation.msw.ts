import { rest } from "msw";

import { teamsBuilder } from "../../../../mock_builders/TeamsBuilder";
import { getRandomElement } from "../../../../utils/arrayUtils";

export const postCreateTeam = () => {
  return [
    rest.post("*/v1/teams", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team created"),
        ctx.json(getRandomElement(teamsBuilder.getTeams())),
      );
    }),
  ];
};
