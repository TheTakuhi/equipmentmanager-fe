import { rest } from "msw";

import { itemsBuilder } from "../../../../mock_builders/ItemsBuilder";
import { getRandomElement } from "../../../../utils/arrayUtils";

export const postCreateItem = () => {
  return [
    rest.post("*/items", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Item created"),
        ctx.json(getRandomElement(itemsBuilder.getItems())),
      );
    }),
  ];
};
