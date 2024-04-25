import { rest } from "msw";

import { loansBuilder } from "../../../../mock_builders/LoansBuilder";
import { getRandomElement } from "../../../../utils/arrayUtils";

export const postCreateLoan = () => {
  return [
    rest.post("*/v1/loans", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Loan created"),
        ctx.json(getRandomElement(loansBuilder.getLoans())),
      );
    }),
  ];
};
