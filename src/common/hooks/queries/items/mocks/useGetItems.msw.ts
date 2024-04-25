import { rest } from "msw";

import { itemsBuilder } from "../../../../mock_builders/ItemsBuilder";
import { PageableParam } from "../../../../models/utils/Pageable";

export const getItemsPagedMock = (props: PageableParam) => {
  const { page, size } = props;
  const totalPages = itemsBuilder.getItems().length / (size || 30);

  return {
    currentPage: page || 1,
    totalElements: itemsBuilder.getItems().length,
    totalPages,
    pageSize: size || 30,
    hasPrevious: page && page !== 1,
    hasNext: page < totalPages,
    content: itemsBuilder.getPartialItems(size * page, size * (page + 1) || 50),
  };
};

export const getItemsMSW = () => [
  rest.get("*/v1/items", (req, res, ctx) => {
    const queryParams = Object.fromEntries(req.url.searchParams);
    const props: PageableParam = {
      page: Number(queryParams.page),
      size: Number(queryParams.size),
      sort: queryParams.sort,
    };
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked All Paginated items status"),
      ctx.json(getItemsPagedMock(props)),
    );
  }),
];
