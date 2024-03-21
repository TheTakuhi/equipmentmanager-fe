import { rest } from "msw";

import { getLoanMock } from "../../../queries/loans/mocks/utils/getLoanMock";

export const patchLoan = () => {
  return [
    rest.patch("*/loans/:id/:date", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Loan edited"),
        ctx.json(getLoanMock()),
      );
    }),
  ];
};
