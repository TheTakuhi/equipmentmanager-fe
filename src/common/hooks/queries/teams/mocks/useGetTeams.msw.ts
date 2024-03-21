import { faker } from "@faker-js/faker";
import { rest } from "msw";

import { teamsBuilder } from "../../../../mock_builders/TeamsBuilder";
import { PageableParam } from "../../../../models/utils/Pageable";

export const getTeamsPagedMock = (props: PageableParam) => {
  const num = faker.number.int({ min: 1, max: 7 });
  const { page, size } = props;
  const totalPages = teamsBuilder.getTeams().length / (size || 30);

  return {
    currentPage: page || 1,
    totalElements: teamsBuilder.getTeams().length,
    totalPages,
    pageSize: num,
    hasPrevious: page && page !== 1,
    hasNext: page < totalPages,
    content: teamsBuilder.getPartialTeams(num * page, num * (page + 1) || 7),
  };
};

export const getTeamsMSW = () => [
  rest.get("*/teams", (req, res, ctx) => {
    const queryParams = Object.fromEntries(req.url.searchParams);
    const props: PageableParam = {
      page: 1,
      size: 7,
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Teams status"),
      ctx.json(getTeamsPagedMock(props)),
    );
  }),
];
