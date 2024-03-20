import { rest } from "msw";

import { itemsBuilder } from "../../../../mock_builders/ItemsBuilder";

export const getItemsByOwnerId = () => {
  return [
    rest.get("*/items/by-owner/:userId", (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Items by owner ID"),
        ctx.json(itemsBuilder.getItemsByUserId(req.params.userId as string)),
      );
    }),
  ];
};
