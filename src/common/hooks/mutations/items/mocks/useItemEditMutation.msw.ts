import { rest } from "msw";

import { itemsBuilder } from "../../../../mock_builders/ItemsBuilder";

export const putEditItem = () => {
  return [
    rest.put("*/v1/items/:id", (req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Item edited"),
        ctx.json(itemsBuilder.getItemById(req.params.id as string)),
      );
    }),
  ];
};
