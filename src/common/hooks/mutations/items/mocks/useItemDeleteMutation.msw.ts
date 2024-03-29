import { rest } from "msw";

export const getDeleteItem = () => {
  return [
    rest.delete("*/items/:id", (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, "Mocked status - Item deleted"),
      );
    }),
  ];
};
