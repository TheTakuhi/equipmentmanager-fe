import { rest } from "msw";

import { loansBuilder } from "../../../../mock_builders/LoansBuilder";
import { PageableParam } from "../../../../models/utils/Pageable";

export const getLoansPagedMock = (props: PageableParam) => {
  const { page, size } = props;
  const totalPages = loansBuilder.getLoans().length / (size || 30);

  return {
    currentPage: page || 1,
    totalElements: loansBuilder.getLoans().length,
    totalPages,
    pageSize: size || 30,
    hasPrevious: page && page !== 1,
    hasNext: page < totalPages,
    content: loansBuilder.getPartialLoans(size * page, size * (page + 1) || 50),
  };
};

export const getLoansMSW = () => [
  rest.get("*/loans", (req, res, ctx) => {
    const queryParams = Object.fromEntries(req.url.searchParams);
    const props: PageableParam = {
      page: Number(queryParams.page),
      size: Number(queryParams.size),
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Paginated loans status"),
      ctx.json(getLoansPagedMock(props)),
    );
  }),
];
