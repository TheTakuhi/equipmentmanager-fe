import { rest } from "msw";

import { itemsBuilder } from "../../../../mock_builders/ItemsBuilder";

export const getItemById = () => {
  return [
    rest.get("*/v1/items/:id", (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked item by ID"),
        ctx.json(itemsBuilder.getItemById(req.params.id as string)),
      );
    }),
  ];
};
