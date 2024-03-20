import { faker } from "@faker-js/faker";

import { Team } from "../../../../../models/team/Team";
import { User } from "../../../../../models/user/User";
import { getRandomElement } from "../../../../../utils/arrayUtils";
import { getUsersMock } from "../../../users/mocks/utils/getUserMock";

export const getTeamMock = (): Team => {
  const members: User[] = getUsersMock(faker.number.int({ min: 1, max: 10 }));

  return {
    id: faker.string.uuid(),
    teamName: faker.commerce.productName(),
    owner: getRandomElement(members),
    members,
  };
};

export const getTeamsMock = (numTeams: number): Team[] =>
  Array.from({ length: numTeams }, getTeamMock);
