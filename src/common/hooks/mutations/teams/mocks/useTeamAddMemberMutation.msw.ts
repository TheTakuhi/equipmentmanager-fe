import { rest } from "msw";

import { getTeamMock } from "../../../queries/teams/mocks/utils/getTeamMock";

export const patchAddMemberToTeam = () => {
  return [
    rest.patch("*/v1/teams/:teamId/add/:userId", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team add member"),
        ctx.json(getTeamMock()),
      );
    }),
  ];
};
