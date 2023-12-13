import { rest } from "msw";

import { Team } from "../../../models/team/Team";
import { CustomRole } from "../../../security/model/Role";

const getMockedTeams = (): Team[] => {
  return [
    {
      id: "123456",
      teamName: "testTeam",
      owner: {
        id: "01ef73d8-70b8-4bf9-953d-b69f32c1762c",
        login: "theshrek",
        email: "shrek@swamp.ffa",
        firstName: "Shrek",
        lastName: "Joe",
        fullName: "Joe Shrek",
        photo: "",
        userRoles: [CustomRole.ADMIN],
        ownedContractIds: [""],
        managedContractIds: [""],
      },
      members: [
        {
          id: "38ef73d8-70b8-4bf9-953d-b69f32c1762c",
          login: "damektom",
          email: "tomas.damek@tietoevry.com",
          firstName: "Tomáš",
          lastName: "Dámek",
          fullName: "Tomáš Dámek",
          photo: "",
          userRoles: [CustomRole.ADMIN],
          ownedContractIds: [""],
          managedContractIds: [""],
        },
      ],
    },
  ];
};

const getMockedTeamByIdResponse = (teamId: string): Team => {
  const ret = [...getMockedTeams()].filter((o) => o.id === teamId)[0];
  return ret;
};

export const getTeamById = () => {
  return [
    rest.get("*/teams/:teamId", (_req, res, ctx) => {
      const { teamId } = _req.params;
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team by ID"),
        ctx.json(getMockedTeamByIdResponse(teamId as string)),
      );
    }),
  ];
};
