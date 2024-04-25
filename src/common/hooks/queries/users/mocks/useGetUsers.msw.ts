import { rest } from "msw";

import { usersBuilder } from "../../../../mock_builders/UsersBuilder";
import { PageableParam } from "../../../../models/utils/Pageable";

export const getUsersPagedMock = (props: PageableParam) => {
  const { page, size } = props;
  const totalPages = usersBuilder.getUsers().length / (size || 30);

  return {
    currentPage: page || 1,
    totalElements: usersBuilder.getUsers().length,
    totalPages,
    pageSize: size || 30,
    hasPrevious: page && page !== 1,
    hasNext: page < totalPages,
    content: usersBuilder.getPartialUsers(size * page, size * (page + 1) || 50),
  };
};

export const getUsersMSW = () => [
  rest.get("*/v1/users", (req, res, ctx) => {
    const queryParams = Object.fromEntries(req.url.searchParams);
    const props: PageableParam = {
      page: Number(queryParams.page),
      size: Number(queryParams.size),
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Paginated users status"),
      ctx.json(getUsersPagedMock(props)),
    );
  }),
];
