import { rest } from "msw";

import { Team } from "../../../models/team/Team";
import { CustomRole } from "../../../security/model/Role";

const getMockedAddMemberToTeamResponse = (): Team => {
  return {
    id: "123456",
    teamName: "testTeamMemberAdd",
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
  };
};

export const putAddMemberToTeam = () => {
  return [
    rest.put("*/teams/:teamId", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Team add member"),
        ctx.json(getMockedAddMemberToTeamResponse()),
      );
    }),
  ];
};
